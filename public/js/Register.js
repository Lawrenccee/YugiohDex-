
/* Google regiseration as a authentication option for our webapp */
function googleSignInRegister(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        firebase.auth().onAuthStateChanged(function(user) {
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
        window.location = "./Register.html"; // If fail refresh
    });
    return;
}


/* Register the user using the Firbase API */
function validateRegister() {
    // Set return location
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    if(!email.includes("@")) {
        alert("Needs to be a valid email address!");
        window.location = "./Register.html"; // If fail refresh
         return;
    }
    if(password.length < 8) {
         alert("Password needs to be at least 8 characters!");
        window.location = "./Register.html"; // If fail refresh
         return;
    }
    if(password !== confirm) {
        alert("Passwords do not match!");
        window.location = "./Register.html"; // If fail refresh
         return;
    }

    // Sign out if user is currently logged in
    var user = firebase.auth().currentUser;
    if(user) {
        firebase.auth().signOut();
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(response){
        alert("account created successfully!");

        firebase.auth().onAuthStateChanged(function(user) {
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
        alert(errorMessage);
        window.location = "./Register.html"; // If fail refresh
    });
}
