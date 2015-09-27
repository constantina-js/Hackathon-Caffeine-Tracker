var caffeineIntake = 0;

function incrementCaffeine (){



	$("#keurig").click(function () {
		caffeineIntake = caffeineIntake + 150;
		
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
	
	});
    
    $("#sbucks").click(function () {
    caffeineIntake = caffeineIntake + 146;
    
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
		
		console.log("SBUX!");
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";
     }
    
    });
    
    $("#mountaindew").click(function () {
    caffeineIntake = caffeineIntake + 54;
    
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
		
		console.log("DO THE DEW");
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

   } });
    
    $("#pepsi").click(function () {
    caffeineIntake = caffeineIntake + 38;

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
		
		console.log("PEPSI");
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

    }});
    
    $("#coke").click(function () {
    caffeineIntake = caffeineIntake + 35;
    
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
		
		console.log("COKE");
		document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

   } });
    
    $("#five").click(function () {
    caffeineIntake = caffeineIntake + 208;
   
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
		
		console.log("%!");
	    document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

   } });
    
    $("#monster").click(function () {
    caffeineIntake = caffeineIntake + 160;
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
		
		console.log("everybody know im a muthafckin monster!");
	    document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

   } });
    
    $("#redbull").click(function () {
    caffeineIntake = caffeineIntake + 80;
    
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
		
		console.log("it gives you wings!!");
	    document.getElementById("count").innerHTML= caffeineIntake + "mg of caffeine was consumed";

   } });
    
}