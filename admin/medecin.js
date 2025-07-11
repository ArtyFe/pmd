const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        auth.logout();
        // Redirection vers la page d'accueil principale après déconnexion
        window.location.href = '../index.html';
    });
}
function setupNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Get all content sections
    const sections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            
            // Show the target section
            document.getElementById(targetId).classList.add('active-section');
            
            // Add active class to clicked nav link
            this.parentElement.classList.add('active');
            
            // Special handling for dashboard section
            if (targetId === 'dashboard') {
                initDashboard();
            }
        });
    });
}

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 1000; // Animation duration in ms
    const start = 0;
    const increment = target / (duration / 16); // Roughly 60fps
    
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// New prescription button functionality
document.getElementById('new-prescription-btn').addEventListener('click', function() {
    // In a real app, this would open a modal or redirect to a prescription creation page
    console.log('Creating new prescription...');
    alert('Fonctionnalité de nouvelle prescription sera implémentée ici');
});

// Language selector functionality
document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    console.log('Language changed to:', selectedLanguage);
    // In a real app, this would trigger language change
    alert(`Langue changée en ${selectedLanguage}. Cette fonctionnalité sera complètement implémentée dans la version finale.`);
});

// Quick action buttons
document.querySelectorAll('.action-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
        console.log('Action:', action);
        
        if (action.includes('Recherche rapide')) {
            // Switch to search tab
            document.querySelector('.nav-menu a[href="#recherche"]').click();
        } else if (action.includes('Nouvelle prescription')) {
            // Switch to prescriptions tab and trigger new prescription
            document.querySelector('.nav-menu a[href="#prescriptions"]').click();
            document.getElementById('new-prescription-btn').click();
        } else if (action.includes('Assistance Arty')) {
            // Open chatbot
            document.getElementById('chatbot-container').classList.add('active');
        }
    });
});

// Chatbot functionality
function initChatbot() {
    const trigger = document.getElementById('chatbot-trigger');
    const container = document.getElementById('chatbot-container');
    const closeBtn = document.querySelector('.close-chatbot');
    const messageContainer = document.getElementById('chatbot-messages');
    const inputField = document.querySelector('.chatbot-input input');
    const sendBtn = document.querySelector('.chatbot-input button');
    
    // Toggle chatbot visibility
    trigger.addEventListener('click', function() {
        container.classList.toggle('active');
    });
    
    // Close chatbot
    closeBtn.addEventListener('click', function() {
        container.classList.remove('active');
    });
    
    // Send message
    function sendMessage() {
        const messageText = inputField.value.trim();
        if (messageText) {
            // Add user message
            addMessage(messageText, 'user');
            
            // Clear input
            inputField.value = '';
            
            // Simulate bot response after a delay
            setTimeout(() => {
                const botResponse = getBotResponse(messageText);
                addMessage(botResponse, 'bot');
                
                // Scroll to bottom
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }, 1000);
        }
    }
    
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add initial bot message
    addMessage("Bonjour Dr. Kouassi! Je suis Arty, votre assistant virtuel. Comment puis-je vous aider aujourd'hui?", 'bot');
}

function addMessage(text, sender) {
    const messageContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    messageContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
        return "Bonjour Docteur! Comment puis-je vous aider?";
    } else if (lowerMessage.includes('aide') || lowerMessage.includes('problème')) {
        return "Je peux vous aider avec la recherche de médicaments, la gestion des prescriptions ou répondre à vos questions sur les interactions médicamenteuses.";
    } else if (lowerMessage.includes('recherche') || lowerMessage.includes('médicament')) {
        return "Vous pouvez utiliser la fonction de recherche dans l'onglet 'Recherche Médicaments'. Voulez-vous que je vous y redirige?";
    } else if (lowerMessage.includes('prescription') || lowerMessage.includes('ordonnance')) {
        return "Vous pouvez créer et gérer vos prescriptions dans l'onglet 'Mes Prescriptions'. Voulez-vous créer une nouvelle prescription?";
    } else if (lowerMessage.includes('merci')) {
        return "Je vous en prie Docteur! N'hésitez pas si vous avez d'autres questions.";
    } else {
        return "Je n'ai pas bien compris votre question. Pourriez-vous la reformuler? Je peux vous aider avec les médicaments, les prescriptions et les pharmacies disponibles.";
    }
}

// Initialize map when pharmacies button is clicked
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-pharmacies') || e.target.closest('.view-pharmacies')) {
        const button = e.target.classList.contains('view-pharmacies') ? e.target : e.target.closest('.view-pharmacies');
        const medicament = button.getAttribute('data-medicament');
        showPharmaciesMap(medicament);
    }
});

// Initialisation du tableau de bord médecin
function initDashboard() {
    // Compteurs
    if (dashboardData && dashboardData.medecin && dashboardData.medecin.stats) {
        animateCounter('prescriptions-count', dashboardData.medecin.stats.prescriptions);
        animateCounter('recherches-count', dashboardData.medecin.stats.recherches);
        animateCounter('alertes-count', dashboardData.medecin.stats.alertes);
    }
    // Activité récente
    const activityContainer = document.getElementById('activity-items');
    if (activityContainer && dashboardData.medecin && dashboardData.medecin.activity) {
        activityContainer.innerHTML = '';
        dashboardData.medecin.activity.forEach(item => {
            const div = document.createElement('div');
            div.className = 'activity-item';
            div.innerHTML = `<span class="activity-type">${item.type}</span> <span class="activity-desc">${item.description}</span> <span class="activity-date">${item.date}</span>`;
            activityContainer.appendChild(div);
        });
    }
    // Alertes médicaments
    const alertsContainer = document.getElementById('medicament-alerts');
    if (alertsContainer && dashboardData.medecin && dashboardData.medecin.medicamentAlerts) {
        alertsContainer.innerHTML = '';
        dashboardData.medecin.medicamentAlerts.forEach(alert => {
            const div = document.createElement('div');
            div.className = 'alert-item';
            div.innerHTML = `<strong>${alert.medicament}</strong> <span class="alert-type">${alert.type}</span> <span class="alert-date">${alert.date}</span> <span class="alert-pharmacies">Pharmacies: ${alert.pharmacies}</span>`;
            alertsContainer.appendChild(div);
        });
    }
    // Historique de recherche
    const searchHistoryList = document.getElementById('search-history-list');
    if (searchHistoryList && dashboardData.medecin && dashboardData.medecin.searchHistory) {
        searchHistoryList.innerHTML = '';
        dashboardData.medecin.searchHistory.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.date}</td><td>${item.medicament}</td><td>${item.categorie}</td><td>${item.results}</td>`;
            searchHistoryList.appendChild(tr);
        });
    }
    // Prescriptions
    const prescriptionsList = document.getElementById('prescriptions-list');
    if (prescriptionsList && dashboardData.medecin && dashboardData.medecin.prescriptions) {
        prescriptionsList.innerHTML = '';
        dashboardData.medecin.prescriptions.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item.id}</td><td>${item.date}</td><td>${item.patient}</td><td>${item.medicaments.join(', ')}</td><td>${item.statut}</td><td><button class='btn btn-outline'>Voir</button></td>`;
            prescriptionsList.appendChild(tr);
        });
    }
}

// Initialisation navigation et dashboard au chargement
window.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    initDashboard();
    initChatbot();
});