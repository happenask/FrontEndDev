function init(){
	var h1Tags = window['document']['getElementsByTagName']('h1');
	h1Tags[0]['onclick'] = changeColor;
}

function changeColor(){
	this.innerHTML = "Click Again"

	/*en.wikipsedia.org/wiki/List_of_colors:_A_F */
	var randomColor = '#' + window['Math']['floor'](Math.random()*16777215)['toString'](16);
	//var randomColor = '#' + window.Math.floor(Math.random()*16777215).toString(16);

	this['style']['color'] = randomColor;
}


function toggleImage(){
	var img = document['getElementById']('danceImg');
	var isImgVisible = img['style']['visibility'] == 'visible';
	img['style']['visibility'] = isImgVisible ? "hidden" : "visible";
}

window['onload'] = init;