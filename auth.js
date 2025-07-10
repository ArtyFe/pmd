// auth.js - Gestion de l'authentification avec localStorage

class Auth {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = this.getCurrentUser();
    }

    loadUsers() {
        const users = localStorage.getItem('akibaMedicalUsers');
        return users ? JSON.parse(users) : [];
    }

    saveUsers() {
        localStorage.setItem('akibaMedicalUsers', JSON.stringify(this.users));
    }

    register(userData) {
        if (this.users.some(user => user.email === userData.email)) {
            return { success: false, message: 'Cet email est déjà utilisé.' };
        }

        const newUser = {
            id: Date.now().toString(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            role: userData.role,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        this.saveUsers();
        
        // Redirection après inscription réussie
        this.redirectAfterRegistration(newUser.role);
        
        return { success: true, user: newUser };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user) {
            return { success: false, message: 'Email ou mot de passe incorrect.' };
        }

        localStorage.setItem('akibaMedicalCurrentUser', JSON.stringify(user));
        this.currentUser = user;
        
        // Redirection après connexion réussie
        this.redirectAfterLogin(user.role);
        
        return { success: true, user };
    }

    redirectAfterRegistration(role) {
        let redirectUrl;
        switch(role) {
            case 'pharmacist':
                redirectUrl = 'admin-pharmacie.html';
                break;
            case 'doctor':
                redirectUrl = 'medecin.html';
                break;
            default:
                redirectUrl = 'index.html';
        }
        
        // Petite temporisation avant redirection pour voir le message de succès
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1500);
    }

    redirectAfterLogin(role) {
        let redirectUrl;
        switch(role) {
            case 'pharmacist':
                redirectUrl = 'admin/admin-pharmacie.html';
                break;
            case 'doctor':
                redirectUrl = 'admin/medecin.html';
                break;
            default:
                redirectUrl = 'index.html';
        }
        window.location.href = redirectUrl;
    }

    logout() {
        localStorage.removeItem('akibaMedicalCurrentUser');
        this.currentUser = null;
        window.location.href = 'index.html';
    }

    getCurrentUser() {
        const user = localStorage.getItem('akibaMedicalCurrentUser');
        return user ? JSON.parse(user) : null;
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    hasRole(role) {
        return this.isAuthenticated() && this.currentUser.role === role;
    }
}

const auth = new Auth();

// Gestion du formulaire d'inscription
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registration-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userData = {
                firstName: document.getElementById('firstname').value.trim(),
                lastName: document.getElementById('lastname').value.trim(),
                email: document.getElementById('email').value.trim(),
                password: document.getElementById('password').value,
                role: document.querySelector('input[name="role"]:checked').value
            };
            
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (userData.password !== confirmPassword) {
                showAlert('Les mots de passe ne correspondent pas.', 'error');
                return;
            }
            
            if (userData.password.length < 6) {
                showAlert('Le mot de passe doit contenir au moins 6 caractères.', 'error');
                return;
            }
            
            const result = auth.register(userData);
            if (result.success) {
                showAlert('Inscription réussie ! Redirection en cours...', 'success');
            } else {
                showAlert(result.message, 'error');
            }
        });
    }

    // Gestion du formulaire de connexion
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="text"]').value.trim();
            const password = this.querySelector('input[type="password"]').value;
            
            const result = auth.login(email, password);
            if (result.success) {
                showAlert('Connexion réussie ! Redirection en cours...', 'success');
            } else {
                showAlert(result.message, 'error');
            }
        });
    }
});

// Fonctions utilitaires (peuvent être partagées avec script.js)
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
}