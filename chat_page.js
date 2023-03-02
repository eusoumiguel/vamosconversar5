const firebaseConfig = {
    apiKey: "AIzaSyA6lGvKKfWBDFEWDZ6ivMopiKkslfyCHDA",
    authDomain: "xatkwitter.firebaseapp.com",
    projectId: "xatkwitter",
    storageBucket: "xatkwitter.appspot.com",
    messagingSenderId: "737022624856",
    appId: "1:737022624856:web:d91110b6e03c45a915762d"
  };
firebase.initializeApp(firebaseConfig);

  initialize()

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");

  location = "index.html"
}

function getData() {
   firebase.database().ref("/"+Room_name).on('value',function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey =childSnapshot.Key;childData = childSnapshot.val();
      if(childKey != "purpose") {
        firebase_menssage_id = childKey;
        menssage_data = childData;
            }
        });
    });
}
getData();
function UpdateLike(btnId) {
  let likes = Number(document.getElementById(btnId).value);
  likes++;
  firebase.database().ref('/' + Room_name).child(btnId).update({
      likes: likes
  })
}

