window.onload=initialize;

function initialize() {
	console.log("mycode.js is loaded");
}

// This function is used to count total cells user has typed in.
function submitButton() {
	var totalFields = 4;
	if (document.getElementById("fname").value == ""){
		totalFields--;
	}
	if (document.getElementById("lname").value == ""){
		totalFields--;
	}
	if (document.getElementById("email").value == ""){
		totalFields--;
	}
	if (document.getElementById("reason").value == ""){
		totalFields--;
	}
	if ( totalFields == 4) {
		alert("The Form has been submitted.");
	}
	else{
		alert("Please fill out the whole form");
	}
}
