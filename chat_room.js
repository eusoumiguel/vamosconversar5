const firebaseConfig = {
  apiKey: "AIzaSyA6lGvKKfWBDFEWDZ6ivMopiKkslfyCHDA",
  authDomain: "xatkwitter.firebaseapp.com",
  projectId: "xatkwitter",
  storageBucket: "xatkwitter.appspot.com",
  messagingSenderId: "737022624856",
  appId: "1:737022624856:web:d91110b6e03c45a915762d"
};

firebase.initializeApp(firebaseConfig);

  function addRoom() {
    const Room_name = document.getElementById("Room_name").value;
    console.log(Room_name);
    if (Room_name) {
        firebase.database().ref('/').child(Room_name).set({
            purpose: "sala criada"
        });
  
        carregaSala(Room_name);
    }
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
  
      location = "index.html"
  }
  }
  function getData() { firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("outout").innetHTML = ""; 
  snapchot.forEach(function(childrenNapshot) {ChilldKey = childNsapshot.key; 
    Room_name = childKey; 
  }); 
}); 
getData(); 

}


function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name);
 window.location = "chat_page.html"; }


function carregaSala(sala) {
    localStorage.setItem("Room_name", Room_name);
    location = "chat.html";
}
  
  localStorage.setItem("user_name", user_name);

  document.getElementById("user_name").innerHTML = "bem-vindo(a)" + user_name + "!";