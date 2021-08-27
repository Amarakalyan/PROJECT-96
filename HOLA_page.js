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
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value = "";
  }

  function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }