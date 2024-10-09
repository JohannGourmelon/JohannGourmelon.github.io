function enableDragAndDrop(container) {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const draggingSection = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement == null) {
            container.appendChild(draggingSection);
        } else {
            container.insertBefore(draggingSection, afterElement);
        }
    });
}

function makeSectionDraggable(section) {
    section.setAttribute("draggable", true);

    section.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", section.id);
        section.classList.add("dragging");
    });

    section.addEventListener("dragend", () => {
        section.classList.remove("dragging");
    });
}

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
function setupDragAndDrop() {
    const cvContainer = document.querySelector(".cv-sections");
    enableDragAndDrop(cvContainer);
}
