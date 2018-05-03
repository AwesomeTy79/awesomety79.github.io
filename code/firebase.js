// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvyGrbzYUGaTDOIQ8vCAz_dlPHFqLKM14",
    authDomain: "mygithubpageapp.firebaseapp.com",
    databaseURL: "https://mygithubpageapp.firebaseio.com",
    projectId: "mygithubpageapp",
    storageBucket: "",
    messagingSenderId: "670341749302"
  };
  firebase.initializeApp(config);
 function saveSuggestion(email, suggestion) {
    var dataObject = {
        email: email,
        suggestion: suggestion
    };
    firebase.database().ref('suggestion-entries').push().set(dataObject)
        .then(function(snapshot) {
            alert('Thank you, it has been prosseced succesfuly.')
        }, function(error) {
            alert('error: ' + error);
        });
}
    function saveIssue(email, issue) {
    var dataObject = {
        email: email,
        issue: issue
    };
    firebase.database().ref('issue-entries').push().set(dataObject)
        .then(function(snapshot) {
            alert('Thank you, it has been prosseced succesfuly.')
        }, function(error) {
            alert('error: ' + error);
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
