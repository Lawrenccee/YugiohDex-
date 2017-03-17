function googleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                firebase.database().ref('users/' + user.uid).set({
                     email: user.email,
                     uid: user.uid
                }).then(function() {
                    window.location = "./index.html"; //After successful login, user will be redirected to index.html
                });
            }
        });

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage);
        window.location = "./login.html"; // If fail refresh
    });
    return;
}

function validateSignIn() {
    // Set return location
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(!email.includes("@")) {
        alert("Needs to be a valid email address!");
        window.location = "./login.html"; // If fail refresh
        return;
    }

    // Sign out if user is currently logged in
    var user = firebase.auth().currentUser;
    if(user) {
        firebase.auth().signOut();
    }

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(response){
        alert("sign in successful!");

        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                window.location = "./index.html"; //After successful login, user will be redirected to index.html
            }
        });
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        window.location = "./login.html"; // If fail refresh
    });
}
