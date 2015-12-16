/* hideOddRows.js */
document.getElementbyId('HideRows').onclick = hideRows;

function hideRows(){
	var elements = document.getElementsByClassName('hide');
	document.getElementsbyTagName('table').item(0).className = "odd-rows-hidden";
	return true;
}