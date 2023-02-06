// variables always go at the top
// these are connections that you're makeing on the elements page
// use CSS selectors to make connections to elements with JavaScript
// create a 1 to 1 connection with a variable - querySelector ("queryString")
// let theButton = document.querySelector("#0");

// create a 1 to many connection with a variable - querySelectorAll ("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	theBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll(".drop-zone"),
	
	draggedPiece;

// Step3
// functionality always goes in the middle -> how do we want the app to behave?

// debugger;
	
	// start with the object, then change a property 
	// or run a method

	// theHeading.textContent = "Drag and Drop: The Cabin";	
	// theHeading.classList.add("green-headLine");
	
	// let theNewSource = "images/backGround" + this.id + ".jpg";

	// console.log(theNewSource);


function changeBGImage() {
	theBoard.style.backgroundImage = `url("images/backGround${this.id}.jpg")`;
}
// function changeImage
// 	puzzlePieces.so= `url("topLeft${this.id}.jpg")`;
// }

function handleStartDrag() {
	console.log("started dragging this piece:", this);

	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault()
	console.log("dragged piece over:");
}

function handleDrop(e) {
	e.preventDefault()
	console.log("dropped piece:");

	this.appendChild(draggedPiece)
}

// Step2
// event handling always goes at the bottom =>
// how do we want users to interact with our app

// 1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// puzzlePieces.forEach(button => button.addEventListener("click", changeImage));

// add drag event handling to puzzle pieces

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// puzzlePieces.forEach(piece=>piece.addEventListener("dragstart", handleStartDrag))