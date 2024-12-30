function createPersonalInfoSection(cvData) {
  const div = document.createElement("div");
  div.classList.add("text-center");
  div.innerHTML = `
    <h1>${cvData.nom || "Nom non disponible"}</h1>
    <p>${cvData.adresse || "Adresse non disponible"} | ${cvData.email || "Email non disponible"} | ${cvData.telephone || "Téléphone non disponible"} | ${cvData.age|| "Age non disponible"}</p>
    <h3>${cvData.profession || "Profession non disponible"}</h3>`;
  
  createSection("Informations personnelles", div, "personal-info");
}
