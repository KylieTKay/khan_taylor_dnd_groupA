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

	puzzleImageTL = document.querySelector("#puzzle-image-tl"),
	puzzleImageTR = document.querySelector("#puzzle-image-tr"),
	puzzleImageBL = document.querySelector("#puzzle-image-bl"),
	puzzleImageBR = document.querySelector("#puzzle-image-br"),

	restart = document.querySelectorAll("#replay"),
	
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
		// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	restart.href = `index.html `;
	// bug fix #2 should go here. it's at most 3 lines of JS code.
	


	theBoard.style.backgroundImage = `url("images/backGround${this.id}.jpg")`;
	
	console.log("new puzzle selected")
}

function changeImage() {
	puzzleImageTL.src = `images/topLeft${this.id}.jpg`;
	puzzleImageTR.src = `images/topRight${this.id}.jpg`;
	puzzleImageBL.src = `images/bottomLeft${this.id}.jpg`;
	puzzleImageBR.src = `images/bottomRight${this.id}.jpg`;
}


function handleStartDrag() {
	console.log("started dragging this piece:", this);

	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault()
	console.log("dragged piece over:");
}

function handleDrop(e) {
	e.preventDefault()
	console.log("dropped piece:");
	// bug fix #1 should go here, and it's at most 3 lines of JS code

	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"

	// 	// Select first child element:
	// const pieces = document.getElementById(".puzzle-pieces").children[0, 1, 2, 3];
		


	this.appendChild(draggedPiece);		
	// Replace the text node:
	// pieces.replaceChild(draggedPiece, pieces.childNodes[0, 1, 2, 3]);
	// draggedPiece.replaceChild(puzzlePieces);
}




// function removeThenAdd() {      
// 	puzzlePieces.find("div").empty().append();
//   }

  

// Step2
// event handling always goes at the bottom =>
// how do we want users to interact with our app

// TL to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

theButtons.forEach(button => button.addEventListener("click", changeImage));

// add drag event handling to puzzle pieces

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// puzzlePieces.forEach(piece => piece.addEventListener("replace", removeThenAdd));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));


// puzzlePieces.forEach(piece=>piece.addEventListener("dragstart", handleStartDrag))