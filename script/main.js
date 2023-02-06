// variables always go at the top
// these are connections that you're makeing on the elements page
// use CSS selectors to make connections to elements with JavaScript
// create a 1 to 1 connection with a variable - querySelector ("queryString")
// let theButton = document.querySelector("#0");

// create a 1 to many connection with a variable - querySelectorAll ("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	theBoard = document.querySelector(".puzzle-board");
// Step3
// functionality always goes in the middle -> how do we want the app to behave?
function changeBGImage() {
	// debugger;
	
	// start with the object, then change a property 
	// or run a method

	// theHeading.textContent = "Drag and Drop: The Cabin";	
	// theHeading.classList.add("green-headLine");
	
// 	let theNewSource = "images/backGround" + this.id + ".jpg";

// 	console.log(theNewSource);//

	theBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
}

// Step2
// event handling always goes at the bottom =>
// how do we want users to interact with our app

// 1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));