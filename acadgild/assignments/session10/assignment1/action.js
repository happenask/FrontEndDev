window.onload = function(){


	employees= [
						"ELVIA J", 
						"JEFFERY M", 
						"AARON",
						"KARINA", 
						"KIMBERLEI R", 
						"ABAD JR",  
						"VICENTE M", 
						"ABARCA",  
						"ANABEL", 
						"ABDELHADI",  
						"ABDALMAHD", 
						"ABDELMAJEID",  
						"AZIZ"
						"ashutoshmanohar"
						"nirav277"
						"tiffany123"
						"Sita1987"
						"saskmydream"
						"sharonroselevykristina"
						"PN2511"
						"Tishfaith",
						"hidemyass",
						"wifiwifey"
						"juls78"
						"RinRin"
						"Aren3074"
						"Dobas"
						"fswaspirant"
				];
	var options = '';
	for(var i = 0; i < employees.length; i++){
		options += '<option value=\"' + employees[i] + '\" >' + employees[i] + "</option>";
	}
	document.getElementById('employees').innerHTML = options;



}