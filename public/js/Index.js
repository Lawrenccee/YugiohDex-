// Initialize Firebase
var config = {
    apiKey: "AIzaSyAhFzSCuiSRmc7VuRehBgtJqvHCow643Gc",
    authDomain: "yugiohdex-74469.firebaseapp.com",
    databaseURL: "https://yugiohdex-74469.firebaseio.com",
    storageBucket: "yugiohdex-74469.appspot.com",
    messagingSenderId: "928690224323"
};
firebase.initializeApp(config);


/* create the mouseover listener for the modal function  */
const modalImage = document.getElementById("modalImage");
const attackValue = document.getElementById("attackValue");
const defenseValue = document.getElementById("defenseValue");
const descriptionValue = document.getElementById("descriptionValue");
const nameValue = document.getElementById("nameValue");
function setListener(imgInCol) {
    imgInCol.addEventListener("mouseover", function() {
        modalImage.setAttribute("src", imgInCol.getAttribute("src"));
        attackValue.innerHTML = imgInCol.getAttribute("attack");
        defenseValue.innerHTML = imgInCol.getAttribute("defense");
        descriptionValue.innerHTML = imgInCol.getAttribute("description");
        nameValue.innerHTML = imgInCol.getAttribute("name");
    });
}


//load the initial monster card gallery
const galleryRow = document.getElementById("cardGallery");
const dbCardsRef = firebase.database().ref().child('cards');
/* This will load the initial selection of the cards, from the database.
 * Note that we only have so many in the DB that no limit is currently
 * placed on the object.
 * */
dbCardsRef.on('child_added', function(data) {
    var cardInfo = data.val();
    if (cardInfo["isMonster"] == null || cardInfo["isMonster"] == true) {
        const divForCol = document.createElement("div");
        divForCol.className = "col-sm-3";
        const buttonInCol = document.createElement("button");
        buttonInCol.className = "btn btn-link";
        buttonInCol.setAttribute("data-target", "#card_detail_modal");
        buttonInCol.setAttribute("data-toggle", "modal");
        divForCol.appendChild(buttonInCol);
        const imgInCol = document.createElement("img");
        imgInCol.className = "img-responsive";
        var imgURL = cardInfo["storageURL"];
        var cardName = cardInfo["name"];
        imgInCol.setAttribute("name", cardName);
        imgInCol.setAttribute("attack", cardInfo["attack"]);
        imgInCol.setAttribute("defense", cardInfo["defense"]);
        imgInCol.setAttribute("description",cardInfo["description"]);
        imgInCol.setAttribute("src", imgURL);
        imgInCol.setAttribute("alt", cardName);
        setListener(imgInCol);
        buttonInCol.appendChild(imgInCol);
        galleryRow.appendChild(divForCol);
    }
});






