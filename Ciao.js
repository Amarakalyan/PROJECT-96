
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCVui4ruyv7F8reIzXFsHcknwiFJj3oXpE",
    authDomain: "hola-68515.firebaseapp.com",
    databaseURL: "https://hola-68515-default-rtdb.firebaseio.com",
    projectId: "hola-68515",
    storageBucket: "hola-68515.appspot.com",
    messagingSenderId: "220325860964",
    appId: "1:220325860964:web:6fde87c548a92b65703171"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "adding user folder"
      });
  }