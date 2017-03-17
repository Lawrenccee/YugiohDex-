function addCardListener(a){a.addEventListener("mouseover",function(){featuredCard.setAttribute("src",a.getAttribute("src")),featuredCard.setAttribute("attack",a.getAttribute("attack")),featuredCard.setAttribute("defense",a.getAttribute("defense")),featuredCard.setAttribute("description",a.getAttribute("description")),featuredCard.setAttribute("name",a.getAttribute("alt"))})}function guid(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function setListenerDD(a){a.addEventListener("mouseover",function(){modalImageDD.setAttribute("src",a.getAttribute("src")),attackValueDD.innerHTML=a.getAttribute("attack"),defenseValueDD.innerHTML=a.getAttribute("defense"),descriptionValueDD.innerHTML=a.getAttribute("description"),nameValueDD.innerHTML=a.getAttribute("name")})}function createCardViewDD(a){const b=document.createElement("div");b.className="col-sm-2 col-xs-6";const c=document.createElement("button");c.className="btn btn-link",c.setAttribute("data-target","#card_detail_modal"),c.setAttribute("data-toggle","modal"),b.appendChild(c);const d=document.createElement("img");d.className="img-responsive";var e=a.storageURL,f=a.name;return d.setAttribute("name",f),d.setAttribute("attack",a.attack),d.setAttribute("defense",a.defense),d.setAttribute("description",a.description),d.setAttribute("src",e),d.setAttribute("alt",f),setListenerDD(d),c.appendChild(d),b}function uid(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function setEditListener(){editButton.addEventListener("mouseover",function(){localStorage.setItem("cardLength",Object.keys(userCards).length);var a=-1;for(var b in userCards)a++,localStorage.setItem(""+a,userCards[b]);var c=""+a;localStorage.setItem("index",c),localStorage.setItem("willEdit",!0),localStorage.setItem("editDeckName",editDeckName),localStorage.setItem("editDeckID",editID)})}function displayCardGrid(a){const b=document.createElement("div");b.className="col-sm-3";const c=document.createElement("button");c.className="btn btn-link",c.setAttribute("data-target","#card_detail_modal"),c.setAttribute("data-toggle","modal"),b.appendChild(c);const d=document.createElement("img");d.className="img-responsive";var e=a.storageURL,f=a.name;d.setAttribute("src",e),d.setAttribute("alt",f),c.appendChild(d),galleryRow.appendChild(b)}function displaySearchCardGrid(a){const b=document.createElement("div");b.className="col-sm-3";const c=document.createElement("button");c.className="btn btn-link",b.appendChild(c);const d=document.createElement("img");d.className="img-responsive";var e=a.storageURL,f=a.name;d.setAttribute("attack",a.attack),d.setAttribute("defense",a.defense),d.setAttribute("description",a.description),d.setAttribute("name",f),d.setAttribute("src",e),d.setAttribute("alt",f),addCardListener(d),c.appendChild(d),searchRow.appendChild(b)}function setListener(a){a.addEventListener("mouseover",function(){modalImage.setAttribute("src",a.getAttribute("src")),attackValue.innerHTML=a.getAttribute("attack"),defenseValue.innerHTML=a.getAttribute("defense"),descriptionValue.innerHTML=a.getAttribute("description"),nameValue.innerHTML=a.getAttribute("name")})}function googleSignIn(){var a=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(a).then(function(a){a.credential.accessToken,a.user;firebase.auth().onAuthStateChanged(function(a){a&&firebase.database().ref("users/"+a.uid).set({email:a.email,uid:a.uid}).then(function(){window.location="./index.html"})})}).catch(function(a){var c=(a.code,a.message);a.email,a.credential;alert(c),window.location="./login.html"})}function validateSignIn(){var a=document.getElementById("email").value,b=document.getElementById("password").value;if(!a.includes("@"))return alert("Needs to be a valid email address!"),void(window.location="./login.html");var c=firebase.auth().currentUser;c&&firebase.auth().signOut(),firebase.auth().signInWithEmailAndPassword(a,b).then(function(a){alert("sign in successful!"),firebase.auth().onAuthStateChanged(function(a){a&&(window.location="./index.html")})}).catch(function(a){var c=(a.code,a.message);alert(c),window.location="./Login.html"})}function signOut(){firebase.auth().signOut().then(function(){alert("You have successfully logged out."),document.getElementById("login").style.display="initial",document.getElementById("logout").style.display="none",document.getElementById("homeLogo").dispatchEvent(new Event("click"))},function(a){console.error("Sign Out Error",a)})}function googleSignIn(){var a=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(a).then(function(a){a.credential.accessToken,a.user;firebase.auth().onAuthStateChanged(function(a){a&&firebase.database().ref("users/"+a.uid).set({email:a.email,uid:a.uid}).then(function(){window.location="./index.html"})})}).catch(function(a){var c=(a.code,a.message);a.email,a.credential;alert(c),window.location="./register.html"})}function validateRegister(){var a=document.getElementById("email").value,b=document.getElementById("password").value,c=document.getElementById("confirm").value;if(!a.includes("@"))return alert("Needs to be a valid email address!"),void(window.location="./register.html");if(b.length<8)return alert("Password needs to be at least 8 characters!"),void(window.location="./register.html");if(b!==c)return alert("Passwords do not match!"),void(window.location="./register.html");var d=firebase.auth().currentUser;d&&firebase.auth().signOut(),firebase.auth().createUserWithEmailAndPassword(a,b).then(function(a){alert("account created successfully!"),firebase.auth().onAuthStateChanged(function(a){a&&firebase.database().ref("users/"+a.uid).set({email:a.email,uid:a.uid}).then(function(){window.location="./index.html"})})}).catch(function(a){var c=(a.code,a.message);alert(c),window.location="./register.html"})}function createDeckView(a,b){const c=document.createElement("div");c.className="col-sm-3 col-xs-6";const d=document.createElement("div");d.className="thumbnail";const e=document.createElement("a");e.setAttribute("href","./deck_details.html");const f=document.createElement("img");f.setAttribute("src","../images/yugioh.png"),f.setAttribute("alt","deckImage"),f.setAttribute("style","width:100%");const g=document.createElement("div");g.className="caption";const h=document.createElement("p");h.innerHTML="<b>Player: </b> "+a.email;const i=document.createElement("p");return i.innerHTML="<b>Deck Name: </b>"+a.deckName,e.addEventListener("mouseover",function(){window.localStorage.getItem("deckName")!=a.deckName&&(console.log(a.deckName),window.localStorage.setItem("deckName",a.deckName),localStorage.setItem("viewDeckID",b));var c=!1;firebase.auth().currentUser&&(c=a.user==firebase.auth().currentUser.uid),console.log(c),window.localStorage.setItem("isUser",c),1!=c&&"true"!=c||(window.localStorage.setItem("deckID",b),console.log(b))}),g.appendChild(h),g.appendChild(i),e.appendChild(f),e.appendChild(g),d.appendChild(e),c.appendChild(d),c}function uid(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function prepForDetails(a,b){}var config={apiKey:"AIzaSyAhFzSCuiSRmc7VuRehBgtJqvHCow643Gc",authDomain:"yugiohdex-74469.firebaseapp.com",databaseURL:"https://yugiohdex-74469.firebaseio.com",storageBucket:"yugiohdex-74469.appspot.com",messagingSenderId:"928690224323"};firebase.initializeApp(config),dbDeckRef=firebase.database().ref().child("decks");const searchRow=document.getElementById("createDeckRow"),deckRow=document.getElementById("currentDeck"),dbCardsRef=firebase.database().ref().child("cards"),featuredCard=document.getElementById("featuredCard"),modalImageCD=document.getElementById("modalImageCD"),attackValueCD=document.getElementById("attackValueCD"),defenseValueCD=document.getElementById("defenseValueCD"),descriptionValueCD=document.getElementById("descriptionValueCD"),nameValueCD=document.getElementById("nameValueCD"),addButton=document.getElementById("deckAddButton"),removeButton=document.getElementById("deckRemoveButton"),saveButton=document.getElementById("saveBtn"),deckName=document.getElementById("deckName");var searchCards=[],deckCards=[],willEdit=localStorage.getItem("willEdit"),editDeckName=localStorage.getItem("editDeckName"),editDeckID=localStorage.getItem("editDeckID"),index=parseInt(localStorage.getItem("index"));if(null!=willEdit||""!=willEdit)for(i=0;i<=index;i++){var idx=""+i,cname=localStorage.getItem(idx);deckCards.push(cname)}if(dbCardsRef.limitToFirst(6).on("child_added",function(a){var b=a.val();const c=document.createElement("div");c.className="col-sm-2 col-xs-2";const d=document.createElement("button");d.className="btn btn-link",c.appendChild(d);var e=document.createElement("img");e.className="img-responsive searchCardImg";var f=b.storageURL,g=b.name;e.setAttribute("name",g),e.setAttribute("attack",b.attack),e.setAttribute("defense",b.defense),e.setAttribute("description",b.description),e.setAttribute("src",f),e.setAttribute("alt",b.name),addCardListener(e),d.appendChild(e),searchRow.appendChild(c)}),null!=featuredCard&&featuredCard.addEventListener("mouseover",function(){modalImageCD.setAttribute("src",featuredCard.getAttribute("src")),attackValueCD.innerHTML=featuredCard.getAttribute("attack"),defenseValueCD.innerHTML=featuredCard.getAttribute("defense"),descriptionValueCD.innerHTML=featuredCard.getAttribute("description"),nameValueCD.innerHTML=featuredCard.getAttribute("name")}),1==willEdit||"true"==willEdit){var deckNameField=document.getElementById("deckName");deckNameField.setAttribute("disabled",!0),saveButton.innerHTML="Update Deck";var len=localStorage.getItem("cardLength"),stri,prevCard="";for(i=0;i<len;i++)stri=""+i,prevCard=localStorage.getItem(stri),firebase.database().ref().child("/cards/"+prevCard).once("value",function(a){var b=a.val();const c=document.createElement("div");c.className="col-sm-2 col-xs-2";const d=document.createElement("button");d.className="btn btn-link",c.appendChild(d);var e=document.createElement("img");e.className="img-responsive",e.setAttribute("name",b.name),e.setAttribute("attack",b.attack),e.setAttribute("defense",b.defense),e.setAttribute("description",b.description),e.setAttribute("src",b.storageURL),e.setAttribute("alt",b.name),imgArray.push(e),deckCards.push(featuredCard.getAttribute("name")),addCardListener(e),d.appendChild(e),deckRow.appendChild(c)});localStorage.setItem("willEdit",!1)}var imgArray=[];addButton.addEventListener("click",function(){null==featuredCard.getAttribute("name")&&(featuredCard.setAttribute("src","../images/red.jpg"),featuredCard.setAttribute("attack",2400),featuredCard.setAttribute("defense",2e3),featuredCard.setAttribute("description","A ferocious Dragon with a deadly attack"),featuredCard.setAttribute("name","Red Eyes B Dragon"));const a=document.createElement("div");a.className="col-sm-2 col-xs-2";const b=document.createElement("button");b.className="btn btn-link",a.appendChild(b);var c=document.createElement("img");c.className="img-responsive";var d=featuredCard.getAttribute("src");c.setAttribute("src",d),c.setAttribute("alt",featuredCard.getAttribute("name")),c.setAttribute("attack",featuredCard.getAttribute("attack")),c.setAttribute("defense",featuredCard.getAttribute("defense")),c.setAttribute("description",featuredCard.getAttribute("description")),imgArray.push(c),deckCards.push(featuredCard.getAttribute("name")),addCardListener(c),b.appendChild(c),deckRow.appendChild(a)}),removeButton.addEventListener("click",function(){localStorage.getItem("index");for(i=0;i<imgArray.length;i++)if(imgArray[i].getAttribute("alt")==featuredCard.getAttribute("name")){deckRow.removeChild(imgArray[i].parentNode.parentNode),imgArray.splice(i,1);var b=deckCards.indexOf(featuredCard.getAttribute("name"));console.log("Before: "+deckCards.length),b!=-1&&(console.log("Slide Successful!"),deckCards.splice(b,1)),console.log("After: "+deckCards.length);break}}),saveButton.addEventListener("click",function(){if(!firebase.auth().currentUser)return void alert("Account requried to save deck. Please create account or log in.");if(""==deckName.value&&null==editDeckName)return void alert("Please enter a deck name before saving");var a=deckName.value.replace(/\s+/,""),b={},c={};parseInt(localStorage.getItem("index"));for(i=0;i<deckCards.length;i++)c[i]=deckCards[i];b.cards=c;var e=guid(),f={};b.deckName=a,1!=willEdit&&"true"!=willEdit||(b.deckName=editDeckName,e=editDeckID),b.user=firebase.auth().currentUser.uid,b.email=firebase.auth().currentUser.email,f["/decks/"+e]=b,f["/users/"+firebase.auth().currentUser.uid+"/decks/"+e]=b,firebase.database().ref().update(f,function(a){if(null!=a)alert("Whoops! An error occured when saving your deck.");else{for(;deckRow.firstChild;)deckRow.removeChild(deckRow.firstChild);const b=document.createElement("h4");b.className="text-center",b.innerHTML="Current Deck",deckRow.appendChild(b),deckName.value="",deckName.setAttribute("placeHolder","Enter your new deck name"),alert("Your deck was succefully saved!"),document.getElementById("goBack").dispatchEvent(new Event("click"));var c=parseInt(localStorage.getItem("index"));for(i=0;i<=c;i++){var d=""+i;localStorage.removeItem(d)}localStorage.removeItem("deckName"),localStorage.removeItem("editDeckID"),localStorage.removeItem("editDeckName"),localStorage.removeItem("willEdit"),console.log("Cleared Data")}})});const dbCardsRef=firebase.database().ref().child("cards");var dbDeckRef=firebase.database().ref().child("decks"),dbCardsRef=firebase.database().ref().child("cards");const modalImageDD=document.getElementById("modalImageDD"),attackValueDD=document.getElementById("attackValueDD"),defenseValueDD=document.getElementById("defenseValueDD"),descriptionValueDD=document.getElementById("descriptionValueDD"),nameValueDD=document.getElementById("nameValueDD");var isUser=localStorage.getItem("isUser");const editButton=document.getElementById("editButton"),deleteButton=document.getElementById("deleteButton");1!=isUser&&"true"!=isUser||(editButton.setAttribute("style","visibility:visible"),deleteButton.setAttribute("style","visibility:visible"));const deckID=document.getElementById("deckID");deckID.innerHTML=localStorage.getItem("deckName");var editDeckName=localStorage.getItem("deckName"),editID=localStorage.getItem("deckID"),viewID=localStorage.getItem("viewDeckID");const cardGalleryRow=document.getElementById("cardGalleryRow"),userCards={};firebase.database().ref("/decks/").once("value").then(function(a){var b=a.val();for(var c in b){var d=b[c];if(d.deckName==deckID.textContent){var e=d.cards;for(var f in e)userCards[f]=e[f],firebase.database().ref("/cards/"+e[f]).once("value").then(function(a){var b=a.val();cardGalleryRow.appendChild(createCardViewDD(b))})}}setEditListener()});const commentBtn=document.getElementById("commentBtn"),commentsList=document.getElementById("commentList"),commentsRef=firebase.database().ref().child("/decks/"+viewID+"/comments/");commentsRef.on("child_added",function(a){var b=a.val();const c=document.createElement("li");c.className="list-group-item";const d=document.createElement("blockquote");d.innerHTML=b.content;const e=document.createElement("cite");e.innerHTML=b.email;const f=document.createElement("p");f.innerHTML=b.date,c.setAttribute("email",b.email),c.appendChild(d),c.appendChild(e),c.appendChild(f);const g=document.createElement("input");g.setAttribute("type","button"),g.setAttribute("class","btn btn-danger"),g.setAttribute("value","delete"),g.addEventListener("click",function(){var b={},c=a.key+"";b["/decks/"+viewID+"/comments/"+c]=null,firebase.database().ref().update(b)}),c.appendChild(g),commentsList.appendChild(c)}),commentsRef.on("child_removed",function(a){console.log("Removing from commentsList");for(var b=a.val().email,c=0;c<commentsList.childNodes.length;c++)"li"==commentsList.childNodes[c].nodeName.toLowerCase()&&commentsList.childNodes[c].getAttribute("email")==b&&commentsList.removeChild(commentsList.childNodes[c])}),deleteButton.addEventListener("click",function(){if(null!=editID){var a=editID,b={};b["/decks/"+a]=null,b["/users/"+firebase.auth().currentUser.uid+"/decks/"+a]=null,firebase.database().ref().update(b),alert("Your deck was successfully deleted")}}),commentBtn.addEventListener("click",function(){if(!firebase.auth().currentUser)return void alert("Account requried to post content. Please create account or log in.");var a=uid(),b="",c="",d=document.getElementById("comments");null!=firebase.auth().currentUser&&(b=firebase.auth().currentUser.email,c=firebase.auth().currentUser.uid);var e=d.value,f=new Date,g=f.getDate(),h=f.getMonth()+1,i=f.getFullYear();g<10&&(g="0"+g),h<10&&(h="0"+h),f=h+"/"+g+"/"+i;var j={content:e,date:f,email:b,uid:c};commentsRef.child(a).set(j),d.value=""});var isTCG=!0,isMonster=!0,isMagic=!1;const cardSelect=document.getElementById("card_type");cardSelect.addEventListener("change",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;if("Spell"==cardSelect.value){if(isMagic=!0,isMonster=!1,""!=a||""!=b||""!=c)return;for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();1==b.isMagic&&b.isTCG==isTCG&&displaySearchCardGrid(b)})})}else if("Trap"==cardSelect.value){if(isMagic=!1,isMonster=!1,""!=a||""!=b||""!=c)return;for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();0==b.isMagic&&0==b.isMonster&&b.isTCG==isTCG&&displaySearchCardGrid(b)})})}else{if(isMagic=!1,isMonster=!0,""!=a||""!=b||""!=c)return;for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();1==b.isMonster&&b.isTCG==isTCG&&displaySearchCardGrid(b)})})}});const formatSelect=document.getElementById("card_format");formatSelect.addEventListener("change",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;if("TCG"==formatSelect.value){if(isTCG=!0,""!=a||""!=b||""!=c)return;for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);cardSelect.dispatchEvent(new Event("change"))}else if("OCG"==formatSelect.value){if(isTCG=!1,""!=a||""!=b||""!=c)return;for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);cardSelect.dispatchEvent(new Event("change"))}});const searchButton=document.getElementById("search_btn");searchButton.addEventListener("click",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;dbCardsRef.once("value",function(d){for(;searchRow.firstChild;)searchRow.removeChild(searchRow.firstChild);d.forEach(function(d){var e=d.val();""!=a&&""!=b&&""!=c?e.name.toLowerCase().includes(a.toLowerCase())&&parseInt(e.attack)==b&&parseInt(e.defense)==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""!=a&&""!=b&&""==c?e.name.toLowerCase().includes(a.toLowerCase())&&e.attack==b&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""!=a&&""==b&&""!=c?e.name.toLowerCase().includes(a.toLowerCase())&&e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""!=a&&""==b&&""==c?e.name.toLowerCase().includes(a.toLowerCase())&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""==a&&""!=b&&""!=c?e.attack==b&&e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""==a&&""!=b&&""==c?e.attack==b&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e):""==a&&""==b&&""!=c&&e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displaySearchCardGrid(e)})})});const cardNameInput=document.getElementById("card_name");cardNameInput.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))});const attackInput=document.getElementById("attack_pt");attackInput.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))});const defenseInput=document.getElementById("defense_pt");defenseInput.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))});var config={apiKey:"AIzaSyAhFzSCuiSRmc7VuRehBgtJqvHCow643Gc",authDomain:"yugiohdex-74469.firebaseapp.com",databaseURL:"https://yugiohdex-74469.firebaseio.com",storageBucket:"yugiohdex-74469.appspot.com",messagingSenderId:"928690224323"};firebase.initializeApp(config);const modalImage=document.getElementById("modalImage"),attackValue=document.getElementById("attackValue"),defenseValue=document.getElementById("defenseValue"),descriptionValue=document.getElementById("descriptionValue"),nameValue=document.getElementById("nameValue"),galleryRow=document.getElementById("cardGallery"),dbCardsRef=firebase.database().ref().child("cards");dbCardsRef.on("child_added",function(a){var b=a.val();if(null==b.isMonster||1==b.isMonster){const c=document.createElement("div");c.className="col-sm-3";const d=document.createElement("button");d.className="btn btn-link",d.setAttribute("data-target","#card_detail_modal"),d.setAttribute("data-toggle","modal"),c.appendChild(d);const e=document.createElement("img");e.className="img-responsive";var f=b.storageURL,g=b.name;e.setAttribute("name",g),e.setAttribute("attack",b.attack),e.setAttribute("defense",b.defense),e.setAttribute("description",b.description),e.setAttribute("src",f),e.setAttribute("alt",g),setListener(e),d.appendChild(e),galleryRow.appendChild(c)}});var config={apiKey:"AIzaSyAhFzSCuiSRmc7VuRehBgtJqvHCow643Gc",authDomain:"yugiohdex-74469.firebaseapp.com",databaseURL:"https://yugiohdex-74469.firebaseio.com",storageBucket:"yugiohdex-74469.appspot.com",messagingSenderId:"928690224323"};firebase.initializeApp(config);var user=firebase.auth().currentUser;if(user){document.getElementById("login").style.display="none",document.getElementById("logout").style.display="initial";const userGreetingTag=document.getElementById("userGreeting");userGreetingTag.innerHTML="Signed in as "+user.email}else document.getElementById("login").style.display="initial",document.getElementById("logout").style.display="none";firebase.auth().onAuthStateChanged(function(a){if(a){document.getElementById("login").style.display="none",document.getElementById("logout").style.display="initial";const b=document.getElementById("userGreeting");b.innerHTML="Signed in as "+a.email}else document.getElementById("login").style.display="initial",document.getElementById("logout").style.display="none"});var isTCG=!0,isMonster=!0,isMagic=!1;const cardSelect=document.getElementById("card_type");cardSelect.addEventListener("change",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;if("Spell"==cardSelect.value){if(isMagic=!0,isMonster=!1,""!=a||""!=b||""!=c)return;for(;galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();1==b.isMagic&&b.isTCG==isTCG&&displayCardGrid(b)})})}else if("Trap"==cardSelect.value){if(isMagic=!1,isMonster=!1,""!=a||""!=b||""!=c)return;for(;galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();0==b.isMagic&&0==b.isMonster&&b.isTCG==isTCG&&displayCardGrid(b)})})}else{if(isMagic=!1,isMonster=!0,""!=a||""!=b||""!=c)return;for(;galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);dbCardsRef.once("value",function(a){a.forEach(function(a){const b=a.val();1==b.isMonster&&b.isTCG==isTCG&&displayCardGrid(b)})})}});const formatSelect=document.getElementById("card_format");formatSelect.addEventListener("change",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;if("TCG"==formatSelect.value){if(isTCG=!0,""!=a||""!=b||""!=c)return;for(;galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);cardSelect.dispatchEvent(new Event("change"))}else if("OCG"==formatSelect.value){if(isTCG=!1,""!=a||""!=b||""!=c)return;for(;galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);cardSelect.dispatchEvent(new Event("change"))}});const cardNameField=document.getElementById("card_name"),attackField=document.getElementById("attack_pt"),defenseField=document.getElementById("defense_pt");cardNameField.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))}),attackField.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))}),defenseField.addEventListener("keyup",function(a){13==a.keyCode&&searchButton.dispatchEvent(new Event("click"))});const searchButton=document.getElementById("search_btn");searchButton.addEventListener("click",function(){var a=document.getElementById("card_name").value,b=document.getElementById("attack_pt").value,c=document.getElementById("defense_pt").value;dbCardsRef.once("value",function(d){for(console.log("Name: "+a+"Attack: "+b+"Defense: "+c+"isMonster: "+isMonster+"isMagic: "+isMagic);galleryRow.firstChild;)galleryRow.removeChild(galleryRow.firstChild);d.forEach(function(d){var e=d.val();""!=a&&""!=b&&""!=c?e.name.toLowerCase().includes(a.toLowerCase())&&parseInt(e.attack)==b&&parseInt(e.defense)==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""!=a&&""!=b&&""==c?e.name.toLowerCase().includes(a.toLowerCase())&&e.attack==b&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""!=a&&""==b&&""!=c?e.name.toLowerCase().includes(a.toLowerCase())&&e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""!=a&&""==b&&""==c?e.name.toLowerCase().includes(a.toLowerCase())&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""==a&&""!=b&&""!=c?e.attack==b&&e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""==a&&""!=b&&""==c?e.attack==b&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""==a&&""==b&&""!=c?e.defense==c&&(isMonster&&1==e.isMonster||!isMonster&&0==e.isMonster)&&(isMagic&&1==e.isMagic||!isMagic&&0==e.isMagic)&&displayCardGrid(e):""==a&&""==b&&""==c&&cardSelect.dispatchEvent(new Event("change"))})})});var config={apiKey:"AIzaSyAhFzSCuiSRmc7VuRehBgtJqvHCow643Gc",authDomain:"yugiohdex-74469.firebaseapp.com",databaseURL:"https://yugiohdex-74469.firebaseio.com",storageBucket:"yugiohdex-74469.appspot.com",messagingSenderId:"928690224323"};firebase.initializeApp(config);const dbDecksRef=firebase.database().ref().child("decks"),topDecskRow=document.getElementById("topDecksRow"),userDecksRow=document.getElementById("userDecks");dbDecksRef.limitToFirst(5).on("child_added",function(a,b){const c=a.val();return firebase.auth().currentUser?void(c.user!=firebase.auth().currentUser.uid?topDecskRow.appendChild(createDeckView(c,a.key)):userDecksRow.appendChild(createDeckView(c,a.key))):void topDecskRow.appendChild(createDeckView(c),a.key)});const deckNameInput=document.getElementById("searchDeck"),deckSave=document.getElementById("deckSearchButton");deckSave.addEventListener("click",function(){for(;topDecskRow.firstChild;)topDecskRow.removeChild(topDecskRow.firstChild);dbDecksRef.limitToFirst(5).once("value",function(a){var b;a.forEach(function(a){b=a.val(),b.deckName.toLowerCase().includes(deckNameInput.value.toLowerCase())&&topDecskRow.appendChild(createDeckView(b,a.key))})})}),deckNameInput.addEventListener("keyup",function(a){13==a.keyCode&&deckSave.dispatchEvent(new Event("click"))});const commentsList=document.getElementById("commentList"),commentsRef=firebase.database().ref().child("/public_comments/");commentsRef.on("child_added",function(a){var b=a.val();const c=document.createElement("li");c.className="list-group-item";const d=document.createElement("blockquote");d.innerHTML=b.content;const e=document.createElement("cite");e.innerHTML=b.email;const f=document.createElement("p");f.innerHTML=b.date,c.setAttribute("email",b.email),c.appendChild(d),c.appendChild(e),c.appendChild(f);const g=document.createElement("input");g.setAttribute("type","button"),g.setAttribute("class","btn btn-danger"),g.setAttribute("value","delete"),g.addEventListener("click",function(){var b={},c=a.key+"";console.log("Delete Key: "+c),b["/public_comments/"+c]=null,firebase.database().ref().update(b)}),c.appendChild(g),commentsList.appendChild(c)}),commentsRef.on("child_removed",function(a){console.log("Removing from commentsList");for(var b=a.val().email,c=0;c<commentsList.childNodes.length;c++)"li"==commentsList.childNodes[c].nodeName.toLowerCase()&&commentsList.childNodes[c].getAttribute("email")==b&&commentsList.removeChild(commentsList.childNodes[c])});const commentBtnVD=document.getElementById("commentBtn");commentBtnVD.addEventListener("click",function(){var a=uid(),b="",c="",d=document.getElementById("comments");null!=firebase.auth().currentUser&&(b=firebase.auth().currentUser.email,c=firebase.auth().currentUser.uid);var e=d.value,f=new Date,g=f.getDate(),h=f.getMonth()+1,i=f.getFullYear();g<10&&(g="0"+g),h<10&&(h="0"+h),f=h+"/"+g+"/"+i;var j={content:e,date:f,email:b,uid:c};commentsRef.child(a).set(j),d.value=""});
