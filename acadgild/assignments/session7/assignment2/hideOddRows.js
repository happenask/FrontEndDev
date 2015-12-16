/* hideOddRows.js */
document.querySelector('[name=HideRows]').onclick = hideRows;

function hideRows(){
	var elements = document.getElementsByClassName('hide');
	Array.prototype.forEach.call(elements, function(element){
	    element.style.display = "none";
	});
	return true;
}