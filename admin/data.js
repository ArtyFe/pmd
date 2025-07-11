// Données simulées pour l'application
const dashboardData = {
    counts: {
        medicaments: 1245,
        clients: 568,
        commandes: 89,
        alertes: 7
    },
    recentOrders: [
        { id: "#ORD-001", client: "Jean Dupont", date: "10/07/2023", montant: "1200 Fcfa", statut: "completed" },
        { id: "#ORD-002", client: "Marie Lambert", date: "09/07/2023", montant: "2150 Fcfa", statut: "completed" },
        { id: "#ORD-003", client: "Pierre Durand", date: "09/07/2023", montant: "4500 Fcfa", statut: "pending" },
        { id: "#ORD-004", client: "Sophie Martin", date: "08/07/2023", montant: "850 Fcfa", statut: "completed" },
        { id: "#ORD-005", client: "Lucie Petit", date: "07/07/2023", montant: "3500 Fcfa", statut: "canceled" }
    ],
    stockAlerts: [
        { medicament: "Paracétamol 500mg", stock: 5, seuil: 10 },
        { medicament: "Ibuprofène 200mg", stock: 3, seuil: 15 },
        { medicament: "Amoxicilline 500mg", stock: 2, seuil: 5 },
        { medicament: "Vitamine C 500mg", stock: 0, seuil: 10 }
    ],
    topProducts: [
        { nom: "Paracétamol 500mg", ventes: 245, image: "https://via.placeholder.com/40" },
        { nom: "Ibuprofène 200mg", ventes: 189, image: "https://via.placeholder.com/40" },
        { nom: "Doliprane 1000mg", ventes: 156, image: "https://via.placeholder.com/40" },
        { nom: "Spasfon Lyoc", ventes: 132, image: "https://via.placeholder.com/40" },
        { nom: "Smecta", ventes: 98, image: "https://via.placeholder.com/40" }
    ],
    salesData: {
        week: [120, 190, 150, 210, 180, 250, 300],
        month: [850, 920, 780, 1100, 980, 1200, 1050, 1150, 1300, 1250, 1400, 1500],
        year: [4500, 5200, 4800, 6000, 5800, 6500, 7000, 6800, 7500, 8000, 8500, 9000]
    },
    medicaments: [
        { id: 1, nom: "Paracétamol", dosage: "500mg", forme: "comprime", stock: 45, prix: 500, statut: "active" },
        { id: 2, nom: "Ibuprofène", dosage: "200mg", forme: "comprime", stock: 3, prix: 800, statut: "active" },
        { id: 3, nom: "Amoxicilline", dosage: "500mg", forme: "capsule", stock: 2, prix: 2500, statut: "active" },
        { id: 4, nom: "Doliprane", dosage: "1000mg", forme: "comprime", stock: 28, prix: 600, statut: "active" },
        { id: 5, nom: "Spasfon", dosage: "80mg", forme: "lyoc", stock: 15, prix: 1200, statut: "active" },
        { id: 6, nom: "Smecta", dosage: "3g", forme: "poudre", stock: 32, prix: 1500, statut: "active" }
    ],
    clients: [
        { id: 1, nom: "Dupont", prenom: "Jean", telephone: "07 12 34 56 78", email: "jean.dupont@example.com", derniereCommande: "10/07/2023", statut: "active" },
        { id: 2, nom: "Lambert", prenom: "Marie", telephone: "05 23 45 67 89", email: "marie.lambert@example.com", derniereCommande: "09/07/2023", statut: "active" },
        { id: 3, nom: "Durand", prenom: "Pierre", telephone: "01 34 56 78 90", email: "pierre.durand@example.com", derniereCommande: "09/07/2023", statut: "active" },
        { id: 4, nom: "Martin", prenom: "Sophie", telephone: "07 45 67 89 01", email: "sophie.martin@example.com", derniereCommande: "08/07/2023", statut: "active" },
        { id: 5, nom: "Petit", prenom: "Lucie", telephone: "05 56 78 90 12", email: "lucie.petit@example.com", derniereCommande: "07/07/2023", statut: "inactive" }
    ],
    commandes: [
        { id: "#ORD-001", clientId: 1, date: "10/07/2023", medicaments: ["Paracétamol 500mg", "Vitamine C"], total: 1200, statut: "completed" },
        { id: "#ORD-002", clientId: 2, date: "09/07/2023", medicaments: ["Ibuprofène 200mg", "Doliprane 1000mg"], total: 2150, statut: "completed" },
        { id: "#ORD-003", clientId: 3, date: "09/07/2023", medicaments: ["Amoxicilline 500mg", "Spasfon Lyoc"], total: 4500, statut: "pending" },
        { id: "#ORD-004", clientId: 4, date: "08/07/2023", medicaments: ["Paracétamol 500mg"], total: 850, statut: "completed" },
        { id: "#ORD-005", clientId: 5, date: "07/07/2023", medicaments: ["Smecta", "Vitamine C"], total: 3500, statut: "canceled" }
    ],
    stats: {
        newClients: 12,
        totalClients: 568,
        avgOrder: 2850,
        totalSales: 1250000
    }
};

// Extend the existing data object
dashboardData.medecin = {
    prescriptions: [
        { id: "#PRS-001", date: "10/07/2023", patient: "Marie Akissi", medicaments: ["Paracétamol 500mg", "Ibuprofène 200mg"], statut: "active" },
        { id: "#PRS-002", date: "08/07/2023", patient: "Jean Dupont", medicaments: ["Amoxicilline 500mg"], statut: "active" },
        { id: "#PRS-003", date: "05/07/2023", patient: "Sophie Martin", medicaments: ["Doliprane 1000mg", "Vitamine C"], statut: "archived" }
    ],
    searchHistory: [
        { date: "10/07/2023 09:15", medicament: "Paracétamol", categorie: "Antalgique", results: 12 },
        { date: "09/07/2023 14:30", medicament: "Amoxicilline", categorie: "Antibiotique", results: 8 },
        { date: "08/07/2023 11:20", medicament: "Ibuprofène", categorie: "Anti-inflammatoire", results: 15 }
    ],
    medicamentAlerts: [
        { medicament: "Paracétamol 500mg", type: "rupture", date: "10/07/2023", pharmacies: 2 },
        { medicament: "Amoxicilline 500mg", type: "stock-faible", date: "09/07/2023", pharmacies: 5 }
    ],
    activity: [
        { type: "prescription", description: "Nouvelle prescription pour Marie Akissi", date: "10/07/2023 09:15" },
        { type: "recherche", description: "Recherche de Paracétamol", date: "10/07/2023 09:10" },
        { type: "consultation", description: "Consultation avec Jean Dupont", date: "09/07/2023 14:30" }
    ],
    pharmacies: [
        { id: 1, name: "Pharmacie du Plateau", address: "Rue des Jardins, Plateau", stock: 15, lat: 5.3167, lng: -4.0333, open: "08:00-20:00", garde: true },
        { id: 2, name: "Pharmacie des Deux Plateaux", address: "Avenue Jean-Paul II, Deux Plateaux", stock: 8, lat: 5.3267, lng: -4.0233, open: "08:00-22:00", garde: false },
        { id: 3, name: "Pharmacie Yopougon", address: "Angle Rue 12, Yopougon", stock: 3, lat: 5.3367, lng: -4.0133, open: "07:00-21:00", garde: true }
    ],
    stats: {
        prescriptions: 24,
        recherches: 56,
        alertes: 3
    }
};