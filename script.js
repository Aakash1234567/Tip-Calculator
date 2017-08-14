








function calculateTip() {

	//Store data
	var billAmount = document.getElementById('billAmount').value;
	var serviceQuality = document.getElementById('serviceQuality').value;
	var numPeople = document.getElementById('totalPeople').value;

	//Quick validation
	if (billAmount === "" || serviceQuality == 0) {
		window.alert("Please enter some values to get this baby up and running!!");
		return;

}


//Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none'

//Add Event listener to the button
document.getElementById('calculate').addEventListener("click", function () {
	calculateTip();
});