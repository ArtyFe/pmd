document.addEventListener('DOMContentLoaded', function() {
    // Navigation entre les pages
    const navLinks = document.querySelectorAll('.main-nav a[data-page]');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            
            // Mettre à jour la navigation active
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Afficher la page correspondante
            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            // Faire défiler vers le haut
            window.scrollTo(0, 0);
        });
    });
    
    // Gestion du menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        authButtons.classList.toggle('show');
    });
    
    // Gestion du chatbot
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const closeChatbot = document.querySelector('.close-chatbot');
    
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    });
    
    closeChatbot.addEventListener('click', function() {
        chatbotWindow.style.display = 'none';
    });
    
    // Gestion de l'envoi de messages dans le chatbot
    const chatInput = document.querySelector('.chatbot-input input');
    const chatSendBtn = document.querySelector('.chatbot-input button');
    const chatMessages = document.querySelector('.chatbot-messages');
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Ajouter le message de l'utilisateur
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userMessage);
        
        // Vider le champ de saisie
        chatInput.value = '';
        
        // Réponse automatique du bot
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerHTML = `<p>${botResponse}</p>`;
            chatMessages.appendChild(botMessage);
            
            // Faire défiler vers le bas
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Faire défiler vers le bas
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    chatSendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Réponses du chatbot
    function getBotResponse(message) {
        const responses = {
            'bonjour': 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
            'salut': 'Salut ! Je suis Arty, votre assistant médical. Que puis-je faire pour vous ?',
            'aide': 'Je peux vous aider à :<br>- Trouver des médicaments<br>- Localiser des pharmacies<br>- Donner des informations sur les pharmacies de garde<br>- Vous orienter vers les numéros d\'urgence',
            'médicament': 'Quel médicament recherchez-vous ? Je peux vérifier sa disponibilité dans nos pharmacies partenaires.',
            'pharmacie': 'Voici nos pharmacies partenaires à Port-Gentil :<br>- Pharmacie Banco<br>- Pharmacie Cap<br>- Pharmacie Grand Village<br><br>Voulez-vous plus d\'informations sur une pharmacie en particulier ?',
            'urgence': 'En cas d\'urgence médicale, contactez immédiatement le SAMU au 1300 ou rendez-vous à la pharmacie de garde la plus proche.',
            'merci': 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions.',
            'au revoir': 'Au revoir ! Prenez soin de vous.',
            'prix': 'Les prix des médicaments varient selon les pharmacies. Vous pouvez consulter les prix approximatifs dans la section "Médicaments".',
            'disponibilité': 'Les stocks sont mis à jour en temps réel par nos pharmacies partenaires. Vous pouvez vérifier la disponibilité d\'un médicament spécifique en le recherchant.',
            'heure': 'Les horaires d\'ouverture varient selon les pharmacies. Les pharmacies de garde sont ouvertes 24h/24.'
        };
        
        // Recherche d'une correspondance dans le message
        message = message.toLowerCase();
        for (const [keyword, response] of Object.entries(responses)) {
            if (message.includes(keyword)) {
                return response;
            }
        }
        
        // Réponse par défaut
        return 'Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ? Voici ce que je peux faire :<br>- Vous aider à trouver un médicament<br>- Vous indiquer les pharmacies proches<br>- Vous donner les numéros d\'urgence<br>- Vous informer sur les pharmacies de garde';
    }
    
    // Gestion des modales de connexion/inscription
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const closeModals = document.querySelectorAll('.close-modal');
    
    function openModal(modal) {
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
    }
    
    function closeModal(modal) {
        document.body.style.overflow = '';
        modal.classList.remove('active');
    }
    
    loginBtn.addEventListener('click', () => openModal(loginModal));
    registerBtn.addEventListener('click', () => openModal(registerModal));
    
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });
    
    closeModals.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Fermer les modales en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Animation des éléments au défilement
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .pharmacy-card, .medicine-card, .number-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialiser les animations
    const animatedElements = document.querySelectorAll('.feature-card, .pharmacy-card, .medicine-card, .number-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter une première fois au chargement
    
    // Simulation de recherche de médicaments
    const searchButtons = document.querySelectorAll('.search-box button');
    
    searchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const searchBox = this.closest('.search-box');
            const input = searchBox.querySelector('input');
            const query = input.value.trim();
            
            if (query === '') {
                showAlert('Veuillez entrer un terme de recherche', 'error');
                return;
            }
            
            // Simulation de résultats
            showAlert(`Recherche effectuée pour "${query}"`, 'success');
        });
    });
    
    // Fonction pour afficher des alertes
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
    
    // Ajout du style pour les alertes
    const alertStyle = document.createElement('style');
    alertStyle.textContent = `
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .alert.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .alert.success {
            background-color: var(--success-color);
        }
        
        .alert.error {
            background-color: var(--error-color);
        }
    `;
    document.head.appendChild(alertStyle);
    
    // Initialisation de la page
    document.querySelector('.main-nav a[data-page="home"]').classList.add('active');
    document.getElementById('home').classList.add('active');
});