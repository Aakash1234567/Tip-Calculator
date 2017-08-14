//Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none'

//Add Event listener to the button
document.getElementById('calculate').addEventListener("click", function () {
	calculateTip();
});