








function calculateTip() {
	var billAmount = document.getElementById('billAmount').value;
	var serviceQuality = document.getElementById('serviceQuality').value;
	var numPeople = document.getElementById('totalPeople').value;
}


//Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none'

//Add Event listener to the button
document.getElementById('calculate').addEventListener("click", function () {
	calculateTip();
});