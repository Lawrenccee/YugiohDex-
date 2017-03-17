# YugiohDex!
# Available at: https://yugiohdex-74469.firebaseapp.com/bootstrap/html/index.html
YugiohDex is a mobile application where users can create an account in order to create decks for the card game Yugioh. Users can also use the site to see news about Yugioh, rules of the game, as well as see other decks that users have made in addition to commenting and rating those decks.

![App Example](/public/img/add-card.png)

## Application Overview
* Frontend: HTML / CSS (Twitter Bootstrap) / JS
* Backend: Firebase
* Packaging/Porting: / OS X / Windows / Linux

## Minification & Bundling
Our Twitter Bootstrap that was used was the minified version. For JS we used jscompress in order to minify and compress our JS files for faster loading.

###### CSS
Our CSS was all made by using a minified Twitter Bootstrap this increased performance by only having to request for one file for the CSS.

###### JavaScript
We ran into a problem with JS by trying to minify all of the files and bundle them into one JS file in order to increase performance. Instead, we minified each file itself and used those minified JS files to be referenced to. This means that our code still has to make a lot of network requests to get each of the JS files, but each of those files grabbed are minified/compressed.

## Images 
The images used were uniform images that all had the same aspect ratios to fit our display and make everything uniform.

![App Home](/public/img/home.png)

## Testing & Usability
We used an Android Tablet (Samsung Galaxy Tab 3) to test the load times of our website after minification using a 3G network throttle. On our laptops we have also viewed the website on Firefox and Google Chrome to make sure basic functionality was correct. Since there are differences with the aesthetics of browsers appearances might slightly vary.
On a 3G network we have 1006KB transferred on the load page with a Finish time of 8.29s, which is really high. We believe this could be from our images not being compressed. The DOMContentLoaded was in 2.82s and the Load was 2.81s. For the decks page 417KB was transferred with a finish time of 4.79s, DOMContentLoaded in 2.43s and a Load of 2.39s.
For the usability the user is able to login and logout just fine. When a user is logged in they are able to see an extra section in the decks with the decks that they have saved on their profile (decks they have created).

## Performance & Design
* Used minified our CSS/JS for faster loading
* Simple design for user to easily distinguish buttons and unpressable elements.

![App Decks](/public/img/decks.png)

## File Organization and Architecture
* Files were named using Pascal Case except for index.html, to be linked from the landing page
* Files were organized using by the type of file, separating HTML, JS, and CSS files in their respective folders. Any images were put into an image folder that was referenced to within the other files to grab and display those images. 

## Known Issues, Bugs, & Limitations
* Images are not compressed: Pages can take a long time to load because the images on the database are not compressed.
* Limited amount of cards on database: Not all cards are listed on our site. This limits the user to the cards that can be view and the decks that can be made.
* Descriptions: Descriptions for each card has not been fully updated, as each one would have to be manually updated by one of us over time as cards come out or are added by us to the site.
* Edge cases: There can be cases our team was not able to find or cover that could harm our application.
