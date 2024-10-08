// Fonction pour créer une section HTML avec un titre, du contenu, et une classe spécifique
function createSection(title, content, className) {
  const section = document.createElement("section");
  const h4 = document.createElement("h4");
  h4.textContent = title;
  section.classList.add(className); // Ajout de la classe spécifique
  section.appendChild(h4);
  section.appendChild(content);
  document.querySelector(".cv-sections").appendChild(section);
}

// Fonction pour créer la section des informations personnelles
function createPersonalInfoSection(cvData) {
  const div = document.createElement("div");
  div.classList.add("text-center");
  div.innerHTML = `
        <h1>${cvData.nom || "Nom non disponible"}</h1>
        <p>${cvData.adresse || "Adresse non disponible"} | ${
    cvData.email || "Email non disponible"
  } | ${cvData.telephone || "Téléphone non disponible"}</p>
        <h3>${cvData.profession || "Profession non disponible"}</h3>
    `;
  createSection("Informations personnelles", div, "personal-info");
}

// Fonctions pour créer les différentes sections du CV
function createTechnicalSkillsSection(competenceData) {
  const ul = document.createElement("ul");
  Object.keys(competenceData).forEach((key) => {
    const competence = competenceData[key];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${
      competence.intitule || "Intitulé non disponible"
    } :</strong>`;
    if (
      Array.isArray(competence.description) &&
      typeof competence.description[0] === "object"
    ) {
      const innerUl = document.createElement("ul");
      competence.description.forEach((item) => {
        const subLi = document.createElement("li");
        const subKey = Object.keys(item)[0];
        subLi.textContent = `${subKey} : ${item[subKey]}`;
        innerUl.appendChild(subLi);
      });
      li.appendChild(innerUl);
    } else {
      li.innerHTML += ` ${
        competence.description || "Description non disponible"
      }`;
    }
    ul.appendChild(li);
  });
  createSection("Compétences Techniques", ul, "technical-skills");
}

function createFunctionalSkillsSection(competenceFonctionnelleData) {
  const ul = document.createElement("ul");
  Object.keys(competenceFonctionnelleData).forEach((key) => {
    const competence = competenceFonctionnelleData[key];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${
      competence.intitule || "Intitulé non disponible"
    } :</strong> ${competence.description || "Description non disponible"}`;
    ul.appendChild(li);
  });
  createSection("Compétences Fonctionnelles", ul, "functional-skills");
}

function createFormationSection(formationData) {
  const ul = document.createElement("ul");
  Object.keys(formationData).forEach((key) => {
    const formation = formationData[key];
    const li = document.createElement("li");
    li.innerHTML = `${formation.dates_debut || ""} : <strong>${
      formation.diplome
    }</strong> - ${formation.etablissement}`;
    ul.appendChild(li);
  });
  createSection("Diplômes et Formations", ul, "formation");
}

function createExperiencesSection(experienceData) {
  const ul = document.createElement("ul");
  Object.keys(experienceData).forEach((key) => {
    const experience = experienceData[key];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${experience.dates_debut || ""} – ${
      experience.dates_fin || ""
    } : ${experience.poste} – ${experience.entreprise}</strong>`;
    const innerUl = document.createElement("ul");
    experience.description.forEach((desc) => {
      const subLi = document.createElement("li");
      subLi.textContent = desc;
      innerUl.appendChild(subLi);
    });
    li.appendChild(innerUl);
    ul.appendChild(li);
  });
  createSection("Expériences", ul, "experiences");
}

function createInterestsSection(centresInteretData) {
  const ul = document.createElement("ul");
  Object.keys(centresInteretData).forEach((key) => {
    const centre = centresInteretData[key];
    const li = document.createElement("li");
    li.textContent = `${centre.titre} : ${centre.description}`;
    ul.appendChild(li);
  });
  createSection("Centres d'intérêt", ul, "interests");
}

// Fonction pour créer dynamiquement le bouton de Dark Mode avec un curseur
function createDarkModeButton() {
  const button = document.createElement("div");
  button.id = "toggle-darkmode";
  button.classList.add("toggle-darkmode");

  // Ajouter le bouton dans un endroit spécifique du DOM, par exemple dans le container
  const container = document.querySelector(".container");
  container.insertBefore(button, container.firstChild);
}
