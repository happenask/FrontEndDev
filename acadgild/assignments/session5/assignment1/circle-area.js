function calcCircleArea(r){
	if(isNaN(r) || r < 0){
		throw new RangeError('Radius cannot be negative');
	}
	return window['Math']['PI'] * r * r;	
}