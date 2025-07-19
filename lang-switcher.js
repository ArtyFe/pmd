// Traduction simple du site (exemple, sans API externe)
const translations = {
  en: {
    'Accueil': 'Home',
    'Pharmacies': 'Pharmacies',
    'Médicaments': 'Medicines',
    'Urgence': 'Emergency',
    'Connexion': 'Login',
    'Inscription': 'Register',
    'Votre santé, notre priorité': 'Your health, our priority',
    'Trouvez les médicaments disponibles en temps réel dans les pharmacies de Port-Gentil': 'Find available medicines in real time in Port-Gentil pharmacies',
    'Nos services': 'Our services',
    'Pharmacies géolocalisées': 'Geolocated pharmacies',
    'Trouvez les pharmacies les plus proches avec leurs stocks en temps réel': 'Find the nearest pharmacies with real-time stock',
    'Alertes disponibilité': 'Availability alerts',
    "Soyez alerté dès qu'un médicament recherché est disponible": 'Get notified as soon as a searched medicine is available',
    'Paiement mobile': 'Mobile payment',
    'Payez vos médicaments via Airtel Money ou Moov Money': 'Pay for your medicines via Airtel Money or Moov Money',
    'Pharmacies de garde': 'On-call pharmacies',
    "Retrouvez les pharmacies ouvertes 24h/24 en cas d'urgence": 'Find pharmacies open 24/7 in case of emergency',
    'Voir les pharmacies': 'See pharmacies',
    'Recherche de médicaments': 'Medicine search',
    'Trier par': 'Sort by',
    'Proximité': 'Proximity',
    'Disponibilité': 'Availability',
    'Note': 'Rating',
    'Résultats de recherche': 'Search results',
    'Pertinence': 'Relevance',
    'Prix croissant': 'Price ascending',
    'Prix décroissant': 'Price descending',
    'Disponible': 'Available',
    'Stock faible': 'Low stock',
    'À partir de': 'From',
    'Urgence médicale': 'Medical emergency',
    'En cas d\'urgence vitale, contactez immédiatement les services d\'urgence': 'In case of vital emergency, contact emergency services immediately',
    'Pharmacies de garde aujourd\'hui': 'On-call pharmacies today',
    'Appeler': 'Call',
    'La plateforme digitale qui révolutionne l\'accès aux médicaments à Port-Gentil': 'The digital platform revolutionizing access to medicines in Port-Gentil',
    'Liens utiles': 'Useful links',
    'Contact': 'Contact',
    'Politique de confidentialité': 'Privacy Policy',
    "Conditions d'utilisation": 'Terms of Use',
    'Se connecter': 'Sign in',
    "Pas encore de compte ?": "Don't have an account yet?",
    "S'inscrire": "Sign up",
    'Déjà un compte ?': 'Already have an account?',
    'Mot de passe oublié ?': 'Forgot password?',
    'Patient': 'Patient',
    'Médecin': 'Doctor',
    'Pharmacien': 'Pharmacist',
    'Prénom': 'First name',
    'Nom': 'Last name',
    'Email': 'Email',
    'Rôle': 'Role',
    'Mot de passe': 'Password',
    'Confirmation': 'Confirmation',
    'Se souvenir de moi': 'Remember me',
    'Connexion': 'Login',
    'Inscription': 'Register',
    'Rechercher un médicament...': 'Search for a medicine...',
    'Rechercher une pharmacie...': 'Search for a pharmacy...',
    'Rechercher un médicament par nom, symptôme ou molécule...': 'Search for a medicine by name, symptom or molecule...'
  },
  es: {
    'Accueil': 'Inicio',
    'Pharmacies': 'Farmacias',
    'Médicaments': 'Medicamentos',
    'Urgence': 'Urgencia',
    'Connexion': 'Iniciar sesión',
    'Inscription': 'Registrarse',
    'Votre santé, notre priorité': 'Su salud, nuestra prioridad',
    'Trouvez les médicaments disponibles en temps réel dans les pharmacies de Port-Gentil': 'Encuentre medicamentos disponibles en tiempo real en las farmacias de Port-Gentil',
    'Nos services': 'Nuestros servicios',
    'Pharmacies géolocalisées': 'Farmacias geolocalizadas',
    'Trouvez les pharmacies les plus proches avec leurs stocks en temps réel': 'Encuentre las farmacias más cercanas con stock en tiempo real',
    'Alertes disponibilité': 'Alertas de disponibilidad',
    "Soyez alerté dès qu'un médicament recherché est disponible": 'Reciba una alerta tan pronto como un medicamento buscado esté disponible',
    'Paiement mobile': 'Pago móvil',
    'Payez vos médicaments via Airtel Money ou Moov Money': 'Pague sus medicamentos a través de Airtel Money o Moov Money',
    'Pharmacies de garde': 'Farmacias de guardia',
    "Retrouvez les pharmacies ouvertes 24h/24 en cas d'urgence": 'Encuentre farmacias abiertas las 24 horas en caso de emergencia',
    'Voir les pharmacies': 'Ver farmacias',
    'Recherche de médicaments': 'Búsqueda de medicamentos',
    'Trier par': 'Ordenar por',
    'Proximité': 'Proximidad',
    'Disponibilité': 'Disponibilidad',
    'Note': 'Nota',
    'Résultats de recherche': 'Resultados de búsqueda',
    'Pertinence': 'Relevancia',
    'Prix croissant': 'Precio ascendente',
    'Prix décroissant': 'Precio descendente',
    'Disponible': 'Disponible',
    'Stock faible': 'Stock bajo',
    'À partir de': 'Desde',
    'Urgence médicale': 'Emergencia médica',
    'En cas d\'urgence vitale, contactez immédiatement les services d\'urgence': 'En caso de emergencia vital, contacte inmediatamente a los servicios de emergencia',
    'Pharmacies de garde aujourd\'hui': 'Farmacias de guardia hoy',
    'Appeler': 'Llamar',
    'La plateforme digitale qui révolutionne l\'accès aux médicaments à Port-Gentil': 'La plataforma digital que revoluciona el acceso a los medicamentos en Port-Gentil',
    'Liens utiles': 'Enlaces útiles',
    'Contact': 'Contacto',
    'Politique de confidentialité': 'Política de privacidad',
    "Conditions d'utilisation": 'Términos de uso',
    'Se connecter': 'Iniciar sesión',
    "Pas encore de compte ?": "¿Aún no tienes una cuenta?",
    "S'inscrire": "Registrarse",
    'Déjà un compte ?': '¿Ya tienes una cuenta?',
    'Mot de passe oublié ?': '¿Olvidaste tu contraseña?',
    'Patient': 'Paciente',
    'Médecin': 'Médico',
    'Pharmacien': 'Farmacéutico',
    'Prénom': 'Nombre',
    'Nom': 'Apellido',
    'Email': 'Correo electrónico',
    'Rôle': 'Rol',
    'Mot de passe': 'Contraseña',
    'Confirmation': 'Confirmación',
    'Se souvenir de moi': 'Recuérdame',
    'Connexion': 'Iniciar sesión',
    'Inscription': 'Registrarse',
    'Rechercher un médicament...': 'Buscar un medicamento...',
    'Rechercher une pharmacie...': 'Buscar una farmacia...',
    'Rechercher un médicament par nom, symptôme ou molécule...': 'Buscar un medicamento por nombre, síntoma o molécula...'
  },
  pt: {
    'Accueil': 'Início',
    'Pharmacies': 'Farmácias',
    'Médicaments': 'Medicamentos',
    'Urgence': 'Urgência',
    'Connexion': 'Entrar',
    'Inscription': 'Registrar',
    'Votre santé, notre priorité': 'Sua saúde, nossa prioridade',
    'Trouvez les médicaments disponibles en temps réel dans les pharmacies de Port-Gentil': 'Encontre medicamentos disponíveis em tempo real nas farmácias de Port-Gentil',
    'Nos services': 'Nossos serviços',
    'Pharmacies géolocalisées': 'Farmácias geolocalizadas',
    'Trouvez les pharmacies les plus proches avec leurs stocks en temps réel': 'Encontre as farmácias mais próximas com estoque em tempo real',
    'Alertes disponibilité': 'Alertas de disponibilidade',
    "Soyez alerté dès qu'un médicament recherché est disponible": 'Seja alertado assim que um medicamento procurado estiver disponível',
    'Paiement mobile': 'Pagamento móvel',
    'Payez vos médicaments via Airtel Money ou Moov Money': 'Pague seus medicamentos via Airtel Money ou Moov Money',
    'Pharmacies de garde': 'Farmácias de plantão',
    "Retrouvez les pharmacies ouvertes 24h/24 en cas d'urgence": 'Encontre farmácias abertas 24h em caso de emergência',
    'Voir les pharmacies': 'Ver farmácias',
    'Recherche de médicaments': 'Busca de medicamentos',
    'Trier par': 'Ordenar por',
    'Proximité': 'Proximidade',
    'Disponibilité': 'Disponibilidade',
    'Note': 'Nota',
    'Résultats de recherche': 'Resultados da busca',
    'Pertinence': 'Relevância',
    'Prix croissant': 'Preço crescente',
    'Prix décroissant': 'Preço decrescente',
    'Disponible': 'Disponível',
    'Stock faible': 'Estoque baixo',
    'À partir de': 'A partir de',
    'Urgence médicale': 'Emergência médica',
    'En cas d\'urgence vitale, contactez immédiatement les services d\'urgence': 'Em caso de emergência vital, contate imediatamente os serviços de emergência',
    'Pharmacies de garde aujourd\'hui': 'Farmácias de plantão hoje',
    'Appeler': 'Ligar',
    'La plateforme digitale qui révolutionne l\'accès aux médicaments à Port-Gentil': 'A plataforma digital que revoluciona o acesso a medicamentos em Port-Gentil',
    'Liens utiles': 'Links úteis',
    'Contact': 'Contato',
    'Politique de confidentialité': 'Política de privacidade',
    "Conditions d'utilisation": 'Termos de uso',
    'Se connecter': 'Entrar',
    "Pas encore de compte ?": "Ainda não tem uma conta?",
    "S'inscrire": "Registrar",
    'Déjà un compte ?': 'Já tem uma conta?',
    'Mot de passe oublié ?': 'Esqueceu a senha?',
    'Patient': 'Paciente',
    'Médecin': 'Médico',
    'Pharmacien': 'Farmacêutico',
    'Prénom': 'Nome',
    'Nom': 'Sobrenome',
    'Email': 'Email',
    'Rôle': 'Função',
    'Mot de passe': 'Senha',
    'Confirmation': 'Confirmação',
    'Se souvenir de moi': 'Lembrar de mim',
    'Connexion': 'Entrar',
    'Inscription': 'Registrar',
    'Rechercher un médicament...': 'Buscar um medicamento...',
    'Rechercher une pharmacie...': 'Buscar uma farmácia...',
    'Rechercher un médicament par nom, symptôme ou molécule...': 'Buscar um medicamento por nome, sintoma ou molécula...'
  },
  zh: {
    'Accueil': '首页',
    'Pharmacies': '药房',
    'Médicaments': '药品',
    'Urgence': '紧急',
    'Connexion': '登录',
    'Inscription': '注册',
    'Votre santé, notre priorité': '您的健康，我们的首要任务',
    'Trouvez les médicaments disponibles en temps réel dans les pharmacies de Port-Gentil': '在Port-Gentil的药房实时查找可用药品',
    'Nos services': '我们的服务',
    'Pharmacies géolocalisées': '定位药房',
    'Trouvez les pharmacies les plus proches avec leurs stocks en temps réel': '查找最近的药房和实时库存',
    'Alertes disponibilité': '可用性提醒',
    "Soyez alerté dès qu'un médicament recherché est disponible": '一旦所需药品有货即提醒',
    'Paiement mobile': '移动支付',
    'Payez vos médicaments via Airtel Money ou Moov Money': '通过Airtel Money或Moov Money支付药品',
    'Pharmacies de garde': '值班药房',
    "Retrouvez les pharmacies ouvertes 24h/24 en cas d'urgence": '在紧急情况下查找24小时营业的药房',
    'Voir les pharmacies': '查看药房',
    'Recherche de médicaments': '药品搜索',
    'Trier par': '排序方式',
    'Proximité': '距离',
    'Disponibilité': '可用性',
    'Note': '评分',
    'Résultats de recherche': '搜索结果',
    'Pertinence': '相关性',
    'Prix croissant': '价格升序',
    'Prix décroissant': '价格降序',
    'Disponible': '有货',
    'Stock faible': '库存低',
    'À partir de': '起价',
    'Urgence médicale': '医疗急救',
    'En cas d\'urgence vitale, contactez immédiatement les services d\'urgence': '如遇生命危险，请立即联系急救服务',
    'Pharmacies de garde aujourd\'hui': '今日值班药房',
    'Appeler': '呼叫',
    'La plateforme digitale qui révolutionne l\'accès aux médicaments à Port-Gentil': '革新Port-Gentil药品获取方式的数字平台',
    'Liens utiles': '实用链接',
    'Contact': '联系方式',
    'Politique de confidentialité': '隐私政策',
    "Conditions d'utilisation": '使用条款',
    'Se connecter': '登录',
    "Pas encore de compte ?": "还没有账户？",
    "S'inscrire": "注册",
    'Déjà un compte ?': '已有账户？',
    'Mot de passe oublié ?': '忘记密码？',
    'Patient': '患者',
    'Médecin': '医生',
    'Pharmacien': '药剂师',
    'Prénom': '名',
    'Nom': '姓',
    'Email': '邮箱',
    'Rôle': '角色',
    'Mot de passe': '密码',
    'Confirmation': '确认',
    'Se souvenir de moi': '记住我',
    'Connexion': '登录',
    'Inscription': '注册',
    'Rechercher un médicament...': '搜索药品...',
    'Rechercher une pharmacie...': '搜索药房...',
    'Rechercher un médicament par nom, symptôme ou molécule...': '按名称、症状或成分搜索药品...'
  }
};


// Utilitaire pour stocker le texte d'origine
function storeOriginalText(el, attr = null) {
  if (attr) {
    if (!el.hasAttribute('data-orig-'+attr)) {
      el.setAttribute('data-orig-'+attr, el[attr]);
    }
  } else {
    if (!el.hasAttribute('data-orig-text')) {
      el.setAttribute('data-orig-text', el.textContent.trim());
    }
  }
}

function getOriginalText(el, attr = null) {
  if (attr) {
    return el.getAttribute('data-orig-'+attr) || el[attr];
  } else {
    return el.getAttribute('data-orig-text') || el.textContent.trim();
  }
}

function translatePage(lang) {
  // Traduction des textes visibles
  document.querySelectorAll('body *').forEach(el => {
    // Textes simples (pas d'enfants HTML)
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      storeOriginalText(el);
      const orig = getOriginalText(el);
      if (translations[lang] && translations[lang][orig]) {
        el.textContent = translations[lang][orig];
      } else {
        el.textContent = orig;
      }
    }
    // Placeholder
    if (el.placeholder !== undefined) {
      storeOriginalText(el, 'placeholder');
      const origPh = getOriginalText(el, 'placeholder');
      if (translations[lang] && translations[lang][origPh]) {
        el.placeholder = translations[lang][origPh];
      } else {
        el.placeholder = origPh;
      }
    }
    // value pour les boutons input
    if (el.tagName === 'INPUT' && el.type === 'submit') {
      storeOriginalText(el, 'value');
      const origVal = getOriginalText(el, 'value');
      if (translations[lang] && translations[lang][origVal]) {
        el.value = translations[lang][origVal];
      } else {
        el.value = origVal;
      }
    }
    // title
    if (el.title) {
      storeOriginalText(el, 'title');
      const origTitle = getOriginalText(el, 'title');
      if (translations[lang] && translations[lang][origTitle]) {
        el.title = translations[lang][origTitle];
      } else {
        el.title = origTitle;
      }
    }
    // alt pour images
    if (el.alt) {
      storeOriginalText(el, 'alt');
      const origAlt = getOriginalText(el, 'alt');
      if (translations[lang] && translations[lang][origAlt]) {
        el.alt = translations[lang][origAlt];
      } else {
        el.alt = origAlt;
      }
    }
  });
  // Traduction des options de select
  document.querySelectorAll('select option').forEach(opt => {
    storeOriginalText(opt);
    const orig = getOriginalText(opt);
    if (translations[lang] && translations[lang][orig]) {
      opt.textContent = translations[lang][orig];
    } else {
      opt.textContent = orig;
    }
  });
}

document.getElementById('lang-select').addEventListener('change', function() {
  translatePage(this.value);
});
