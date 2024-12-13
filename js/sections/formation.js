function createFormationSection(formationData) {
  const ul = document.createElement("ul");
  Object.keys(formationData).forEach((key) => {
    const formation = formationData[key];
    const li = document.createElement("li");
    li.innerHTML = `${formation.dates_fin || ""} : <strong>${
      formation.diplome
    }</strong> - ${formation.etablissement}`;
    ul.appendChild(li);
  });
  createSection("Diplômes et Formations", ul, "formation");
}
