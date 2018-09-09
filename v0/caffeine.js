var caffeineIntake = 0;

function caffeineCheck(caffeineIntake){
	if(caffeineIntake >= 10000){
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed...how are you not dead?";
    	$("#count").css("color", "red");
		
	} else if(caffeineIntake >= 1000){
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed...no seriously stop";
    	$("#count").css("color", "red");
	} else if(caffeineIntake >= 400){
    	document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed...but you should stop now";
    	$("#count").css("color", "red");
    } else {
		document.getElementById("count").innerHTML= caffeineIntake + " mg of caffeine was consumed";
		}
}


function incrementCaffeine (){

	$("#keurig").click(function () {
		caffeineIntake = caffeineIntake + 150;
		caffeineCheck(caffeineIntake);
		
	});
    
    $("#sbucks").click(function () {
    caffeineIntake = caffeineIntake + 146;
    caffeineCheck(caffeineIntake);
    
    });
    
    $("#mountaindew").click(function () {
    caffeineIntake = caffeineIntake + 54;
    caffeineCheck(caffeineIntake);
    });
    
    $("#pepsi").click(function () {
    caffeineIntake = caffeineIntake + 38;
	caffeineCheck(caffeineIntake);

	});
    
    $("#coke").click(function () {
    caffeineIntake = caffeineIntake + 35;
    caffeineCheck(caffeineIntake);
    });
    
    $("#five").click(function () {
    caffeineIntake = caffeineIntake + 208;
   caffeineCheck(caffeineIntake); 
   });
    
    $("#monster").click(function () {
    caffeineIntake = caffeineIntake + 160;
   	caffeineCheck(caffeineIntake); 
   	});
    
    $("#redbull").click(function () {
    caffeineIntake = caffeineIntake + 80;
    
    caffeineCheck(caffeineIntake);
     });
    
}