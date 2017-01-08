// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Created an array of objects. Each object has quote, source, citation, and year. 6 total quotes.
var quotes = [
				{
					quote: 'He is Bob, eager for fun. He wears a smile. Everybody run!',
					source: 'The One-Armed Man',
					citation: 'Twin Peaks',
					year: 1991
				},
				{
					quote: 'Jelly donuts?',
					source: 'Sheriff Truman',
					citation: 'Twin Peaks',
					year: 1991
				},
				{
					quote: "How's Annie?",
					source: 'Cooper',
					citation: 'Twin Peaks',
					year: 1991
				},
				{
					quote: 'That gum you like is going to come back in style.',
					source: 'The Man from Another Place',
					citation: 'Twin Peaks',
					year: 1991
				},
				{
					quote: 'A circle of pain, a circle of suffering.',
					source: 'The Log Lady',
					citation: 'Twin Peaks',
					year: 1991
				},
				{
					quote: 'Are you still seeing this … Dick?',
					source: 'Cooper',
					citation: 'Twin Peaks',
					year: 1991
				}
];
//the index is any number between 0 and (quotes.length - 1) using the floor method
//the function yields the object form of the quote
function getRandomQuote() {
	var index = Math.floor(Math.random()*quotes.length);
	return quotes[index];
}
//assign selectedQuote to output of getRandomQuote() 
function printQuote() {
	var selectedQuote = getRandomQuote();
//these conditional statements handle scenarios where either citation, year, or both are missing. 
	if(selectedQuote.citation && selectedQuote.year){
		var html = '<p class="quote">' + selectedQuote.quote + '</p>' +
		'<p class="source">' + selectedQuote.source +
	  	'<span class="citation">' + selectedQuote.citation + '</span>' +
	  	'<span class="year">' + selectedQuote.year + '</span>' + '</p>';
	  	document.getElementById('quote-box').innerHTML = html;
	} else if(selectedQuote.citation){
		var html = '<p class="quote">' + selectedQuote.quote + '</p>' +
		'<p class="source">' + selectedQuote.source +
	  	'<span class="citation">' + selectedQuote.citation + '</span>' +
	  	'</p>';
	  	document.getElementById('quote-box').innerHTML = html;
	} else if (selectedQuote.year){
		var html = '<p class="quote">' + selectedQuote.quote + '</p>' +
		'<p class="source">' + selectedQuote.source + '<span class="year">' + 
		selectedQuote.year + '</span>' + '</p>';
		document.getElementById('quote-box').innerHTML = html;
	} else {
		var html = '<p class="quote">' + selectedQuote.quote + '</p>' +
		'<p class="source">' + selectedQuote.source + '</p>';
	  	document.getElementById('quote-box').innerHTML = html;
	}
}
//thanks for taking the time to review my project! I did not go for any extra credit 