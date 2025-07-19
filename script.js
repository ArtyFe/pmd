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
        // Version démo intelligente personnalisée pour la santé
        // Le chatbot comprend les symptômes courants, donne des conseils simples, oriente vers des médicaments en vente libre, invite à consulter si besoin, et reste bienveillant sans poser de diagnostic.
        // Vous pouvez enrichir la liste des symptômes, les conseils, ou connecter à votre base de pharmacies/médicaments pour une intégration encore plus personnalisée.
        if (
            message.includes("qui es-tu") ||
            message.includes("que sais-tu faire") ||
            message.includes("présente-toi") ||
            message.includes("assistant médical") ||
            message.includes("démo intelligente")
        ) {
            return "Je suis une version démo intelligente et personnalisée : je comprends les symptômes courants, je donne des conseils simples, j'oriente vers des médicaments en vente libre, j'invite à consulter si besoin, et je reste bienveillant sans poser de diagnostic. Vous pouvez enrichir la liste des symptômes, les conseils, ou connecter à votre base de pharmacies/médicaments pour une intégration encore plus personnalisée.";
        }
        message = message.toLowerCase();
        // Table de symptômes enrichie (exemples, extensible)
        const symptomes = [
            {
                mots: ["gorge", "toux", "tousser", "enroué", "mal à la gorge"],
                conseil: "Un mal de gorge accompagné d'une toux légère peut être dû à un rhume ou à une irritation.<br>Voici quelques solutions disponibles sans ordonnance :<ul><li>Pastilles à base de menthol ou d’eucalyptus pour soulager la gorge.</li><li>Sirop contre la toux sèche si la toux est irritante.</li><li>Boire beaucoup d’eau tiède et éviter les boissons glacées.</li></ul>👉 Vous pouvez vérifier la disponibilité de ces produits dans les pharmacies proches via AKiba.<br>⚠️ Si les symptômes durent plus de 3 jours, s’aggravent ou s’accompagnent de fièvre élevée, consultez un médecin."
            },
            {
                mots: ["fièvre", "fievre", "température", "thermomètre", "frissons"],
                conseil: "Pour une fièvre légère, il est conseillé de bien s’hydrater et de se reposer.<br>Le paracétamol est généralement utilisé pour faire baisser la fièvre.<br>👉 Vérifiez la disponibilité du paracétamol dans les pharmacies proches via AKiba.<br>⚠️ Consultez un médecin si la fièvre dépasse 39°C, dure plus de 3 jours ou s’accompagne de maux inhabituels."
            },
            {
                mots: ["mal de tête", "migraine", "céphalée", "tête", "maux de tête"],
                conseil: "Pour un mal de tête léger, le paracétamol ou l’ibuprofène peuvent aider à soulager la douleur.<br>Essayez de vous reposer dans un endroit calme et de bien vous hydrater.<br>👉 Ces médicaments sont disponibles sans ordonnance dans la plupart des pharmacies.<br>⚠️ Si le mal de tête est intense, inhabituel ou accompagné d’autres symptômes (fièvre, troubles de la vision), consultez un professionnel de santé."
            },
            {
                mots: ["ventre", "douleur abdominale", "crampe", "mal au ventre", "diarrhée", "constipation", "nausée", "vomir"],
                conseil: "Pour des douleurs abdominales légères, privilégiez une alimentation légère et buvez de l’eau.<br>Des antispasmodiques ou du paracétamol peuvent être utilisés pour soulager la douleur.<br>En cas de diarrhée, pensez à la réhydratation orale.<br>👉 Demandez conseil à votre pharmacien pour le choix du médicament.<br>⚠️ Consultez un médecin si la douleur est intense, persistante ou accompagnée de fièvre/vomissements."
            },
            {
                mots: ["mal aux dents", "mal de dent", "douleur dentaire", "rage de dent", "dents", "dent"],
                conseil: "Pour un mal de dents, il est conseillé de prendre un antalgique comme le paracétamol (sauf contre-indication) et d’éviter les aliments trop chauds ou trop froids.<br>👉 Consultez rapidement un dentiste, surtout si la douleur est intense, persistante, ou accompagnée de fièvre ou de gonflement.<br>⚠️ En cas de gonflement important du visage ou de difficulté à ouvrir la bouche, rendez-vous aux urgences ou contactez un professionnel de santé sans attendre."
            },
            {
                mots: ["allergie", "allergique", "éternuement", "nez qui coule", "rhume des foins"],
                conseil: "Pour les symptômes d’allergie (éternuements, nez qui coule), des antihistaminiques en vente libre peuvent aider.<br>👉 Demandez conseil à votre pharmacien et vérifiez la disponibilité sur AKiba.<br>⚠️ Consultez un médecin si les symptômes sont sévères ou s’aggravent."
            },
            {
                mots: ["brûlure", "brulure", "coupure", "plaie", "blessure"],
                conseil: "Pour une petite brûlure ou coupure, rincez à l’eau claire, désinfectez et protégez avec un pansement.<br>Des crèmes cicatrisantes sont disponibles en pharmacie.<br>⚠️ Consultez un professionnel si la blessure est profonde, étendue ou s’infecte."
            }
        ];
        // Recherche de symptôme dans le message (tolérance aux fautes et langage simple)
        for (const symptome of symptomes) {
            for (const mot of symptome.mots) {
                if (message.includes(mot)) {
                    return symptome.conseil;
                }
            }
        }
        // Réponses génériques personnalisées
        if (message.includes("bonjour") || message.includes("salut")) {
            return "Bonjour ! Je suis Arty, votre assistant santé. Décrivez-moi vos symptômes ou votre question médicale, je vous oriente avec bienveillance.";
        }
        if (message.includes("merci") || message.includes("thanks")) {
            return "Avec plaisir ! N’hésitez pas si vous avez d’autres questions santé.";
        }
        if (message.includes("pharmacie") || message.includes("pharmacies")) {
            return "Voici quelques pharmacies partenaires à Port-Gentil :<br>- Pharmacie Banco<br>- Pharmacie Cap<br>- Pharmacie Grand Village<br>Vous pouvez vérifier la disponibilité des médicaments sur AKiba.";
        }
        if (message.includes("urgence") || message.includes("urgent")) {
            return "En cas d’urgence médicale, contactez immédiatement le SAMU au 1300 ou rendez-vous à la pharmacie de garde la plus proche.";
        }
        if (message.includes("médicament") || message.includes("medicament") || message.includes("médicaments")) {
            return "Quel médicament recherchez-vous ? Je peux vous indiquer les usages courants et la disponibilité en pharmacie.";
        }
        // Réponse par défaut bienveillante
        return "Je suis Arty, assistant santé AKiba. Décrivez-moi vos symptômes ou votre question, je vous oriente avec des conseils simples et des solutions en pharmacie. Si vos symptômes sont graves ou inhabituels, consultez un professionnel de santé.";
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
    
    // Affichage du champ DUNS/NIF selon le rôle sélectionné
    // Correction : le script doit s'exécuter après le DOM chargé
    function initDunsNifToggle() {
        var rolePatient = document.getElementById('role-patient');
        var roleDoctor = document.getElementById('role-doctor');
        var rolePharmacist = document.getElementById('role-pharmacist');
        var dunsNifGroup = document.getElementById('duns-nif-group');

        if (!rolePatient || !roleDoctor || !rolePharmacist || !dunsNifGroup) return;

        function toggleDunsNif() {
            if (roleDoctor.checked || rolePharmacist.checked) {
                dunsNifGroup.style.display = 'block';
            } else {
                dunsNifGroup.style.display = 'none';
            }
        }

        rolePatient.addEventListener('change', toggleDunsNif);
        roleDoctor.addEventListener('change', toggleDunsNif);
        rolePharmacist.addEventListener('change', toggleDunsNif);

        toggleDunsNif();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDunsNifToggle);
    } else {
        initDunsNifToggle();
    }
});