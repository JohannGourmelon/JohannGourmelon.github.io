// Fonction pour récupérer les données du CV depuis Firestore
async function fetchCVData(db) {
  const cvRef = db.collection("CV").doc("cv_id");
  const doc = await cvRef.get();

  if (doc.exists) {
    const competences = await cvRef.collection("competence").get();
    const experiences = await cvRef.collection("experience").get();
    const formations = await cvRef.collection("formation").get();
    const centresInteret = await cvRef.collection("centres_interet").get();
    const competencesFonctionnelles = await cvRef
      .collection("competence_fonctionnelle")
      .get();

    return {
      cvData: doc.data(),
      competenceData: mapFirestoreData(competences),
      experienceData: mapFirestoreData(experiences),
      formationData: mapFirestoreData(formations),
      centresInteretData: mapFirestoreData(centresInteret),
      competenceFonctionnelleData: mapFirestoreData(competencesFonctionnelles),
    };
  } else {
    throw new Error("Aucun CV trouvé.");
  }
}

// Fonction utilitaire pour convertir les documents Firestore en objets
function mapFirestoreData(collection) {
  const data = {};
  collection.forEach((doc) => (data[doc.id] = doc.data()));
  return data;
}
