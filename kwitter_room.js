// firebase is a database. databse is where all datas are stored.
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
//ADD YOUR FIREBASE LINKS HERE
userName = localStorage.getItem("user name");
document.getElementById("username").innerHTML = "Welcome " + userName + " !";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;//document means html page,"."means inside
                  //End code
            });
      });
}
getData();
function logout() {
      window.location = "index.html";
}
function addroom() {
      // funtion should allways have ()
      room_name = document.getElementById("room_name").value;//we are storing room name that we have enterd in the input box in a variable called room_name 
      localStorage.setItem("room_name", room_name);//we are storing data in local storage so that other pages can use this room name
      firebase.database().ref("/").child(room_name).update({ //we are creating a child(sub folder) in database
            purpose: "adding room name"//data is stored in database in key : value format
      });//here key is purpose and value is adding room name

}
 function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


















