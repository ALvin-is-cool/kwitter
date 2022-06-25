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

function login(){
    user_name=document.getElementById("username").value;
    localStorage.setItem("user name",user_name );
    //it is used for saveing data in local storge  
    //data is stored in local storage in key value format here key is " user name"
    //value is the variabke user_name which we will get from the input biox
    window.location = "kwitter_room.html";  //to move from one page to another
    
}












