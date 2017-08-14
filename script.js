








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
	//Check if numPeople input is empty or less than or equal to one
	if ( numPeople == "" || numPeople <= 1 ) {
		numPeople = 1;
		document.getElementById("each").style.display = 'none';

	} else {
		document.getElementById("each").style.display = 'block';
	}

	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total.toFixed(2);

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

}


//Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none';

//Add Event listener to the button
var calculate = document.getElementById('calculate');
calculate.addEventListener("click", function() {
	calculateTip();
});