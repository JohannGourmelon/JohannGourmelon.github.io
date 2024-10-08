// Configuration et initialisation de Firebase
function configureFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDXzCWirrVZFEQB_-25mzokLmrIJO0dshA",
    authDomain: "moncv-66020.firebaseapp.com",
    projectId: "moncv-66020",
    storageBucket: "moncv-66020.appspot.com",
    messagingSenderId: "307188990779",
    appId: "1:307188990779:web:391dc209f8a658007f2d1e",
    measurementId: "G-TKRK1HPSXC",
  };
  firebase.initializeApp(firebaseConfig);
  return firebase.firestore();
}
