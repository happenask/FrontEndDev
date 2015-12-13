function JSClock(){
	var today = new Date();

	var hour   = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	
	temp = "" + ((hour > 12) ? hour - 12 : hour);
	if(hour == 0){ //type coersion to Number primitive before comparison
		temp = "12"; 
	}
	
	temp += ((minute < 10) ? ":0"    : ":"    ) + minute;
	temp += ((second < 10) ? ":0"    : ":"    ) + second;
	temp += ((hour >= 12)   ? " P.M." : " A.M.") 
	
	return temp;
 }