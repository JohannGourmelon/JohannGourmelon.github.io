// Fonction pour charger un script dynamiquement
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () =>
            reject(new Error(`Erreur lors du chargement du script ${src}`));
        document.head.appendChild(script);
    });
}

// Charger tous les scripts dynamiquement
async function loadAllScripts() {
    try {
        await loadScript("js/config/scripts.js"); // Charger le fichier de configuration des scripts

        for (const script of scripts) {
            await loadScript(script); // Charger chaque script du tableau
        }

        init();  // Initialiser l'application une fois tous les scripts chargés
    } catch (error) {
        console.error("Erreur lors du chargement des scripts :", error);
    }
}

// Charger les scripts lors du chargement de la page
loadAllScripts();
