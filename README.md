# YugiohDex!
# Available at: https://yugiohdex-74469.firebaseapp.com/bootstrap/html/index.html
YugiohDex is a mobile application where users can create an account in order to create decks for the card game Yugioh. Users can also use the site to see news about Yugioh, rules of the game, as well as see other decks that users have made in addition to commenting and rating those decks.

![App Example](/public/img/add-card.png)

## Application Overview
* Frontend: HTML / CSS (Twitter Bootstrap) / JS
* Backend: Firebase
* Packaging/Porting: / OS X / Windows / Linux

## Minification & Bundling

###### CSS

###### JavaScript
With CodeKit, we were able to concatenate all of our JS files into a single, minified file (with a few exceptions). Like with our CSS files, this vastly improved our performance and decreased the size of the request contents as well. Again, this limited the number of HTTP requests we had to make to retrieve our necessary files. With our CSS and JS bundling/minification, we only needed to make two primary requests for our primary files. However, with some of the services we used, we had to include inline scripts in order to load them immediately.

## Images 

## Testing & Usability
We used an Android Tablet (Samsung Galaxy Tab 3) to test the load times of our website after minification using a 3G network throttle. On our laptops we have also viewed the website on Firefox and Google Chrome to make sure basic functionality was correct. Since there are differences with the aesthetics of browsers appearances might slightly vary.

## Performance & Design
* Used minified our CSS/JS
* Simple design for user to easily distinguish buttons and unpressable elements.

## Known Issues, Bugs, & Limitations
* Images are not compressed: Pages can take a long time to load because the images on the database are not compressed.
* Limited amount of cards on database: Not all cards are listed on our site. This limits the user to the cards that can be view and the decks that can be made.
* Descriptions: Descriptions for each card has not been fully updated, as each one would have to be manually updated by one of us over time as cards come out or are added by us to the site.
* Edge cases: There can be cases our team was not able to find or cover that could harm our application.
