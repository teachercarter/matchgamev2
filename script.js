let showButton = document.querySelector(".show");
let doubleButton = document.querySelector(".double");
let shuffleButton = document.querySelector(".shuffle");
let flipButton = document.querySelector(".flip");
let game = document.querySelector(".game");
let clickedIds = [];
let body =document.querySelector("body");
let grey = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEWAgIB7e3vCwsLIyMjPz8/V1dV4eHjc3Nzj4+PMzMzt7e1zc3O/v7/////39/fx8fHg4ODJbms7AAABaElEQVR4nO3dSWrDABBFQcm2PMkZ7n/aaJFNiCEmZOBJVSf4b9/Qw9Pzy/V8Pp8W0+Lw7rL/YPd9+y9dDo+YHnH65DpM8/Ge8S/dXfAz5tswHYc1G3cK65bCg8I2hX0K+xT2KexT2LcUXsb/HvGrlsK9wjaFfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9h3yYKdwrbFPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2LeJiyGFcQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2baJw/T9K1v9nRmGcwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8K+pXBS2KawT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insG8ThSeFbQr7FPYp7FPYp7BPYZ/Cvm0UzuOazbfhetut2e31DZx9EnazzT4gAAAAAElFTkSuQmCC";

///1. Add image urls for each of your cards. You should have at least 4 different images for your cards.  
let cardImages = ["https://static.wixstatic.com/media/65b918_eac9fb5b85d14808b47c68e72c668faa~mv2.jpeg/v1/fill/w_287,h_415,al_c,lg_1,q_80,enc_auto/7_%20La%20Escalera%20Loteria.jpeg","https://static.wixstatic.com/media/65b918_c85ac1c61b5c4fb1a908632ddd37290c~mv2.jpeg/v1/fill/w_288,h_417,al_c,lg_1,q_80,enc_auto/14_%20La%20Muerte%20Loteria.jpeg", "https://static.wixstatic.com/media/65b918_ec07ac151f3949b8af6a9ef331696a65~mv2.jpeg/v1/fill/w_288,h_417,al_c,lg_1,q_80,enc_auto/20_%20El%20Pajaro%20Loteria.jpeg", "https://static.wixstatic.com/media/65b918_d12282649f9c44538218643db5895201~mv2.jpeg/v1/fill/w_288,h_417,al_c,lg_1,q_80,enc_auto/23_%20La%20Luna%20Loteria.jpeg"];

//You will be creating a function called add cards. This will add every image in the deck you give it to a card. 
//1. On the line under "function addCards(deck)", Set the innerHTML of game to an empty string. 
//2. On the next line, add a forEach loop, so that it runs once for each card in the list 'deck'. Make sure you include index as one of the parameters in your forEach loop. 
//4. Inside your forEach loop, create a variable called temp. Create an image (img) element, and store it inside the variable temp. 
//5. Set the src of temp to the card's image url. 
//6. Add this line of code under it. This line puts the img in the class card, which makes it look like a card:  temp.classList.add("card"); Then add this line of code:      temp.id=index; This will set the id to the number it is on the list, so you can find the card later. For example, the first card's id is 1.  
//7. appendChild temp to game. This will add the card to the page.

function addCards(deck){
    game.innerHTML = "";
   deck.forEach(function(card, index){
    let temp = document.createElement("img");
     temp.src = card;
     temp.id=index;
     temp.classList.add("card");
     game.appendChild(temp);
    });
}
//8. Add an onclick function for your show button.
//9. Call the function addCards with your list of cardImages as the deck (the parameter). 
//10. Console.log "show the decked" on the next line. 
//11. Set the color of the showButton to silver. 
showButton.onclick = function() {
    addCards(cardImages);
    console.log("Showed the deck.");
    showButton.style.color = "silver";
};
//For the double button, you will double the number of cards you have. 
//9. Create an onclick for the doubleButton.
//12. Create a forEach loop so that it runs once for each card in cardImages. 
//13. Inside the loop, add the card to the list doubleCards twice. This will make sure that each card is in the list twice. 
//14.Outside of the loop, call the function addCards with doubleCards as your deck (the parameter).
//15. Set the color of the doubleButton to silver. 

let doubleCards =[];
doubleButton.onclick = function() {
    cardImages.forEach(function(card) {
		doubleCards.push(card);
        doubleCards.push(card);
    });
    addCards(doubleCards);
    doubleButton.style.color = "silver";
};

//16. Call the function shuffle (it is defined for you) with doubleCards as your array (the parameter) to shuffle the deck. 
//17. Now that the cards are shuffled, add the cards to your page again. 
shuffleButton.onclick = function() {
   shuffle(doubleCards);
   addCards(doubleCards);
    console.log("Shuffled the deck.");
   shuffleButton.style.color = "silver";
};

flipButton.onclick = function() {
    doubleCards.forEach(function(card, index){
    document.getElementById(index).src = grey;
    });
    flipButton.style.color = "silver";                  
};



//18. Create a variable called matches on line 1. What number should matches be set to at the beginning of the game? 
let matches = 0;
//19. Read the code below. Find which if statement deals with if a correct match is found. Inside that if statement, add 1 to the variable matches. 
//20. Create an if statment that would change the text of the game to say "you won" if every card is matched. 

body.onclick=function() {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId); //console logs the thing the user has clicked
    // If a card was clicked, show it, and add it to an array.
    if (clickedId !== "") {
        document.getElementById(clickedId).src =doubleCards[clickedId];
        clickedIds.push(clickedId);
        console.log(clickedIds);
        // if 1 card was clicked...
        if (clickedIds.length === 2) {
            // if 1 card was clicked...check for a match
            let card1picture = document.getElementById(clickedIds[0]).src;
            let card2picture = document.getElementById(clickedIds[1]).src;
            console.log(card1picture);
            console.log(card2picture);
            if (card1picture === card2picture) {
				matches += 1;
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = []; //empties list of things i've clicked if there's a match
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).src = grey;
            document.getElementById(clickedIds[1]).src = grey;
            clickedIds = []; //empties list of things i've clicked if there's more than 2 cards showing
            clickedIds.push(clickedId);
        }
        //type below for #20
        if (matches === 4){
            game.innerHTML="You won!";
            
        }
    }
};

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION ABOVE!
--------------------------------------------------- */

/*
Points:
- declare an array of strings for your image URLS
- Show Deck: use a for loop with `insertAdjacentHTML' to display cards on a screen
- Double Deck: use a for loop to double the cards in your array
- Shuffle Cards: use the shuffle() function to randomize the order of cards in your deck
- FlipCards: use a for loop with getElementById and .style to hide the background images on your cards
CSS:

Next level features:
- add two sound effects: one for card clicks; one for matches
- display how many matches a player has made
- display how many cards a player has tried
- replace the display of cards with a game-over screen if the player doesn't find all matches after trying some number of cards
- use input and .value to get the player's name
*/
