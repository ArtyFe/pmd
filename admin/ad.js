// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
    
    // Ajouter un utilisateur
    document.getElementById('add-user').addEventListener('click', addUser);
});

// Charger les utilisateurs depuis le localStorage
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.getElementById('users-list');
    tableBody.innerHTML = '';
    
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button class="action-btn edit-btn" data-id="${index}">
                    <i class="fas fa-edit"></i> Modifier
                </button>
                <button class="action-btn delete-btn" data-id="${index}">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Ajouter les événements aux boutons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', editUser);
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deleteUser);
    });
}

// Ajouter un nouvel utilisateur
function addUser() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!username || !email) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Réinitialiser le formulaire
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    
    // Recharger la liste
    loadUsers();
}

// Modifier un utilisateur
function editUser(e) {
    const index = e.target.getAttribute('data-id');
    const users = JSON.parse(localStorage.getItem('users'));
    
    const newUsername = prompt('Nouveau nom d\'utilisateur:', users[index].username);
    if (newUsername === null) return;
    
    const newEmail = prompt('Nouvel email:', users[index].email);
    if (newEmail === null) return;
    
    users[index].username = newUsername.trim();
    users[index].email = newEmail.trim();
    
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

// Supprimer un utilisateur
function deleteUser(e) {
    if (!confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
        return;
    }
    
    const index = e.target.getAttribute('data-id');
    const users = JSON.parse(localStorage.getItem('users'));
    
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}