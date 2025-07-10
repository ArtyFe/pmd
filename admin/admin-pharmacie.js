// Initialisation du tableau de bord
document.addEventListener('DOMContentLoaded', function() {
    // Navigation entre les sections
    setupNavigation();
    
    // Mettre à jour les compteurs
    updateCounters();
    
    // Afficher les données du tableau de bord
    displayDashboardData();
    
    // Afficher les médicaments
    displayMedicaments();
    
    // Afficher les clients
    displayClients();
    
    // Afficher les commandes
    displayOrders();
    
    // Initialiser les graphiques
    initCharts();
    
    // Gérer les modals
    setupModals();
    
    // Gestion de la déconnexion
    document.getElementById('logout-btn').addEventListener('click', function() {
        // Ici vous ajouteriez la logique de déconnexion
        console.log('Déconnexion...');
        window.location.href = 'index.html';
    });
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les liens et sections
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));
            
            // Ajouter la classe active au lien cliqué
            this.parentElement.classList.add('active');
            
            // Afficher la section correspondante
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active-section');
        });
    });
}

function updateCounters() {
    const elements = {
        'medicaments-count': dashboardData.counts.medicaments,
        'clients-count': dashboardData.counts.clients,
        'commandes-count': dashboardData.counts.commandes,
        'alertes-count': dashboardData.counts.alertes
    };
    
    for (const [id, target] of Object.entries(elements)) {
        animateCounter(id, target);
    }
}

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

function displayDashboardData() {
    // Commandes récentes
    const ordersTable = document.querySelector('#recent-orders-table tbody');
    ordersTable.innerHTML = '';
    
    dashboardData.recentOrders.forEach(order => {
        const tr = document.createElement('tr');
        
        let statusClass = '';
        let statusText = '';
        switch(order.statut) {
            case 'completed':
                statusClass = 'completed';
                statusText = 'Complétée';
                break;
            case 'pending':
                statusClass = 'pending';
                statusText = 'En attente';
                break;
            case 'canceled':
                statusClass = 'canceled';
                statusText = 'Annulée';
                break;
        }
        
        tr.innerHTML = `
            <td>${order.id}</td>
            <td>${order.client}</td>
            <td>${order.date}</td>
            <td>${order.montant}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>
                <button class="action-btn" title="Voir"><i class="fas fa-eye"></i></button>
                <button class="action-btn" title="Modifier"><i class="fas fa-edit"></i></button>
            </td>
        `;
        
        ordersTable.appendChild(tr);
    });
    
    // Alertes de stock
    const alertsContainer = document.getElementById('alert-items');
    alertsContainer.innerHTML = '';
    
    dashboardData.stockAlerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.className = 'alert-item';
        
        alertItem.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert-info">
                <h4>${alert.medicament}</h4>
                <p>Stock restant: ${alert.stock} (seuil: ${alert.seuil})</p>
            </div>
        `;
        
        alertsContainer.appendChild(alertItem);
    });
    
    // Produits populaires
    const productsContainer = document.getElementById('top-products');
    productsContainer.innerHTML = '';
    
    dashboardData.topProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.nom}">
            <div class="product-info">
                <h4>${product.nom}</h4>
                <p>${Math.floor(Math.random() * 50) + 50} ventes ce mois</p>
            </div>
            <div class="product-sales">${product.ventes}</div>
        `;
        
        productsContainer.appendChild(productItem);
    });
    
    // Statistiques
    document.getElementById('new-clients').textContent = dashboardData.stats.newClients;
    document.getElementById('total-clients').textContent = dashboardData.stats.totalClients;
    document.getElementById('avg-order').textContent = `${dashboardData.stats.avgOrder.toLocaleString()} Fcfa`;
    document.getElementById('total-sales').textContent = `${dashboardData.stats.totalSales.toLocaleString()} Fcfa`;
}

function displayMedicaments() {
    const tableBody = document.querySelector('#medicaments-table tbody');
    tableBody.innerHTML = '';
    
    dashboardData.medicaments.forEach(med => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${med.nom}</td>
            <td>${med.dosage}</td>
            <td>${med.forme}</td>
            <td>${med.stock}</td>
            <td>${med.prix.toLocaleString()} Fcfa</td>
            <td><span class="status ${med.statut === 'active' ? 'completed' : 'canceled'}">${med.statut === 'active' ? 'Actif' : 'Inactif'}</span></td>
            <td>
                <button class="action-btn edit-medicament" data-id="${med.id}" title="Modifier"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-medicament" data-id="${med.id}" title="Supprimer"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
}

function displayClients() {
    const tableBody = document.querySelector('#clients-table tbody');
    tableBody.innerHTML = '';
    
    dashboardData.clients.forEach(client => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${client.id}</td>
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td>${client.telephone}</td>
            <td>${client.email}</td>
            <td>${client.derniereCommande}</td>
            <td>
                <button class="action-btn edit-client" data-id="${client.id}" title="Modifier"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-client" data-id="${client.id}" title="Supprimer"><i class="fas fa-trash"></i></button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
}

function displayOrders() {
    const tableBody = document.querySelector('#orders-table tbody');
    tableBody.innerHTML = '';
    
    dashboardData.commandes.forEach(order => {
        const client = dashboardData.clients.find(c => c.id === order.clientId);
        const clientName = client ? `${client.prenom} ${client.nom}` : 'Client inconnu';
        
        let statusClass = '';
        let statusText = '';
        switch(order.statut) {
            case 'completed':
                statusClass = 'completed';
                statusText = 'Complétée';
                break;
            case 'pending':
                statusClass = 'pending';
                statusText = 'En attente';
                break;
            case 'canceled':
                statusClass = 'canceled';
                statusText = 'Annulée';
                break;
        }
        
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${order.id}</td>
            <td>${clientName}</td>
            <td>${order.date}</td>
            <td>${order.medicaments.join(', ')}</td>
            <td>${order.total.toLocaleString()} Fcfa</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>
                <button class="action-btn view-order" data-id="${order.id}" title="Voir"><i class="fas fa-eye"></i></button>
                <button class="action-btn update-order" data-id="${order.id}" title="Modifier"><i class="fas fa-edit"></i></button>
            </td>
        `;
        
        tableBody.appendChild(tr);
    });
}

function initCharts() {
    // Graphique des ventes
    const salesCtx = document.getElementById('sales-chart').getContext('2d');
    window.salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
            datasets: [{
                label: 'Ventes',
                data: dashboardData.salesData.week,
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { drawBorder: false }, ticks: { precision: 0 } },
                x: { grid: { display: false } }
            }
        }
    });
    
    // Graphique des produits populaires
    const topProductsCtx = document.getElementById('top-products-chart').getContext('2d');
    window.topProductsChart = new Chart(topProductsCtx, {
        type: 'bar',
        data: {
            labels: dashboardData.topProducts.map(p => p.nom),
            datasets: [{
                label: 'Ventes',
                data: dashboardData.topProducts.map(p => p.ventes),
                backgroundColor: [
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(30, 58, 138, 0.7)',
                    'rgba(124, 58, 237, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(30, 58, 138, 1)',
                    'rgba(124, 58, 237, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(245, 158, 11, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { mode: 'index', intersect: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { drawBorder: false }, ticks: { precision: 0 } },
                x: { grid: { display: false } }
            }
        }
    });
    
    // Gestion du changement de période
    document.getElementById('stats-period').addEventListener('change', function() {
        const period = this.value;
        let labels, data;
        
        if (period === 'week') {
            labels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
            data = dashboardData.salesData.week;
        } else if (period === 'month') {
            labels = Array.from({length: 12}, (_, i) => `Sem ${i+1}`);
            data = dashboardData.salesData.month;
        } else {
            labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
            data = dashboardData.salesData.year;
        }
        
        window.salesChart.data.labels = labels;
        window.salesChart.data.datasets[0].data = data;
        window.salesChart.update();
    });
}

function setupModals() {
    const modal = document.getElementById('medicament-modal');
    const addBtn = document.getElementById('add-medicament-btn');
    const closeBtn = document.querySelector('.close-modal');
    const cancelBtn = document.getElementById('cancel-medicament');
    
    // Ouvrir le modal pour ajouter un médicament
    addBtn.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = 'Ajouter un médicament';
        document.getElementById('medicament-form').reset();
        modal.classList.add('active');
    });
    
    // Fermer le modal
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
    
    // Fermer quand on clique en dehors du modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Gérer la soumission du formulaire
    document.getElementById('medicament-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ici vous ajouteriez la logique pour enregistrer le médicament
        console.log('Médicament enregistré');
        modal.classList.remove('active');
    });
    
    // Gérer l'édition des médicaments
    document.querySelector('#medicaments-table').addEventListener('click', function(e) {
        if (e.target.closest('.edit-medicament')) {
            const id = parseInt(e.target.closest('.edit-medicament').getAttribute('data-id'));
            const medicament = dashboardData.medicaments.find(m => m.id === id);
            
            if (medicament) {
                document.getElementById('modal-title').textContent = 'Modifier un médicament';
                document.getElementById('medicament-name').value = medicament.nom;
                document.getElementById('medicament-dosage').value = medicament.dosage;
                document.getElementById('medicament-form').value = medicament.forme;
                document.getElementById('medicament-stock').value = medicament.stock;
                document.getElementById('medicament-price').value = medicament.prix;
                
                modal.classList.add('active');
            }
        }
        
        if (e.target.closest('.delete-medicament')) {
            const id = parseInt(e.target.closest('.delete-medicament').getAttribute('data-id'));
            if (confirm('Voulez-vous vraiment supprimer ce médicament ?')) {
                // Ici vous ajouteriez la logique pour supprimer le médicament
                console.log(`Médicament ${id} supprimé`);
            }
        }
    });
}