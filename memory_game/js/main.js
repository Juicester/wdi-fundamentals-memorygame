// Main Javascript File
//console.log("Up and running!");

let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
	}
];
let cardsInPlay = [];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}	
};

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match.");
	} 
	else {
		alert("Sorry, try again.");
	}
};

function flipCard() {
	cardID = this.getAttribute("data-id");
	//console.log("User flipped " + cards[cardID].rank);
	//console.log(cards[cardID].suit);
	//console.log(cards[cardID].cardImage);
	this.setAttribute("src", cards[cardID].cardImage);

	cardsInPlay.push(cards[cardID].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

//flipCard(0);
//flipCard(2);
createBoard();