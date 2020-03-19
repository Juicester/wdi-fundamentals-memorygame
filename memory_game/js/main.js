// Main Javascript File
//console.log("Up and running!");
let score = 0;
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
		//added score logic
		score += 1;
		document.getElementById("score").textContent = "Score: " + score;
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

function reset() {
	//i needed it to be <= because when i pop it shortens the length by 1
	// i think i just hacked that and it wont work for things greater than 2
	for (let i = 0; i <= cardsInPlay.length; i++){
		cardsInPlay.pop();
	}
	//createBoard() didn't work because it just made a new board underneath

	let gameBoard = document.getElementById("game-board").childNodes;
	
	for (let j = 0; j < gameBoard.length; j++){
		gameBoard[j].setAttribute("src", "images/back.png");
	}
}

createBoard();
document.querySelector("button").addEventListener("click", reset);




