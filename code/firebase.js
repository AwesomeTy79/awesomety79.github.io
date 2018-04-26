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
