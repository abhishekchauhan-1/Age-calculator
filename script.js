function age() {  // Declare the function named "age".
	var d1 = document.getElementById('date').value; // Get the birth date input value from an element with an ID of "date" and store it in the variable "d1".
	var m1 = document.getElementById('month').value; // Get the birth month input value from an element with an ID of "month" and store it in the variable "m1".
	var y1 = document.getElementById('year').value; // Get the birth year input value from an element with an ID of "year" and store it in the variable "y1".
  
	var date = new Date(); // Create a new date object and store it in the variable "date".
	var d2 = date.getDate(); // Get the current date from the "date" object and store it in the variable "d2".
	var m2 = 1 + date.getMonth(); // Get the current month from the "date" object and store it in the variable "m2".
	var y2 = date.getFullYear(); // Get the current year from the "date" object and store it in the variable "y2".
	var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Create an array named "month" that contains the number of days in each month.
  
	if(d1 > d2){ // If the birth date is greater than the current date...
		d2 = d2 + month[m2 - 1]; // Add the number of days in the current month to the current date and store it in "d2".
		m2 = m2 - 1; // Subtract 1 from the current month and store it in "m2".
	}
	if(m1 > m2){ // If the birth month is greater than the current month...
		m2 = m2 + 12; // Add 12 to the current month and store it in "m2".
		y2 = y2 - 1; // Subtract 1 from the current year and store it in "y2".
	}
	var d = d2 - d1; // Subtract the birth date from the current date and store it in "d".
	var m = m2 - m1; // Subtract the birth month from the current month and store it in "m".
	var y = y2 - y1; // Subtract the birth year from the current year and store it in "y".
  
	document.getElementById('years').innerHTML = y; // Set the innerHTML of an element with an ID of "years" to the value of "y".
	document.getElementById('months').innerHTML = m; // Set the innerHTML of an element with an ID of "months" to the value of "m".
	document.getElementById('days').innerHTML = d; // Set the innerHTML of an element with an ID of "days" to the value of "d".
}
