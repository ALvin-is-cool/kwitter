//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyClpa5gcBwf0DIW3TLviWQ9NAe5YacUjJs",
      authDomain: "kwitter-fe342.firebaseapp.com",
      databaseURL: "https://kwitter-fe342-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe342",
      storageBucket: "kwitter-fe342.appspot.com",
      messagingSenderId: "506211618786",
      appId: "1:506211618786:web:980f9b6ad87a7765b033bb",
      measurementId: "G-4WC4QJE4YP"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
user_name = localStorage.getItem("user name");
room_name = localStorage.getItem("room_name");
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name: user_name,//this is adding username to the firebase
                  message: msg,
                  like: 0
            });
document.getElementById("msg").value="";//for clearing out the meassage box after sending a massage.



}