function createSection(title, content, className) {
    const section = document.createElement("section");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    section.classList.add(className); // Ajout de la classe spécifique
    section.appendChild(h4);
    section.appendChild(content);

    // Rendre la section déplaçable (draggable)
    makeSectionDraggable(section);

    document.querySelector(".cv-sections").appendChild(section);
}