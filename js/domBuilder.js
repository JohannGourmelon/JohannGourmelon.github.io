// Fonction pour rendre les sections déplaçables
function makeSectionDraggable(section) {
    section.setAttribute("draggable", true);

    // Événements pour le drag
    section.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", section.id);
        section.classList.add("dragging");
    });

    section.addEventListener("dragend", () => {
        section.classList.remove("dragging");
    });
}

// Permettre de déposer les sections dans un conteneur
function enableDragAndDrop(container) {
    container.addEventListener("dragover", (e) => {
        e.preventDefault(); // Nécessaire pour permettre le drop
        const draggingSection = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement == null) {
            container.appendChild(draggingSection);
        } else {
            container.insertBefore(draggingSection, afterElement);
        }
    });
}

// Fonction utilitaire pour trouver la position de drop
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll("section:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Mettre à jour la fonction createSection pour ajouter le drag and drop
function createSection(title, content, className) {
    const section = document.createElement("section");
    section.id = title.toLowerCase().replace(/\s+/g, "-");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    section.classList.add(className);
    section.appendChild(h4);
    section.appendChild(content);
    document.querySelector(".cv-sections").appendChild(section);

    // Rendre la section draggable
    makeSectionDraggable(section);
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
