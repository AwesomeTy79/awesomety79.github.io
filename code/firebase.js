 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvyGrbzYUGaTDOIQ8vCAz_dlPHFqLKM14",
    authDomain: "mygithubpageapp.firebaseapp.com",
    databaseURL: "https://mygithubpageapp.firebaseio.com",
    projectId: "mygithubpageapp",
    storageBucket: "",
    messagingSenderId: "670341749302"
  };
  var app = firebase.initializeApp(config);
  var db = firebase.firestore(app);
 function saveSuggestion(email, suggestion) {
var docData = {
    suggestion: suggestion
};
db.collection("Suggestions").doc(email).set(docData).then(function() {
    alert("Document successfully written!");
});

}
    function saveIssue(email, issue) {
    var docData = {
    issue: issue
};
db.collection("Issues").doc(email).set(docData).then(function() {
    alert("Document successfully written!");
});
}
  
  function suggest() {
  var email = prompt('Enter your email');
  var suggestion = prompt('What is your suggestion?')
  saveSuggestion(email, suggestion);
  
  
  
  }
  function issue() {
  var email = prompt('Enter your email');
  var issue = prompt('What is your issue?')
  saveIssue(email, issue);
  
  
  
  }
function entryValidate() {
// This is not yet done - it will make sure the entries are fine.
}

function signIn() {
 var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...}
});
