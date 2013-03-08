var gpio = require("pi-gpio");
var pin = 12;
var pin2 = 11;

function lightLed(pinNo, func){
    gpio.open(pinNo, "output", function(err) {
	gpio.write(pinNo, 1, function() {

	    setTimeout(function(){
		gpio.write(pinNo, 0);
		gpio.close(pinNo);
		if(typeof func !== 'undefined'){
		    func();
		}
            },1000);
	});
    });
}

function readPin(pinNo, func){
    gpio.open(pinNo, "input", function(err){
	gpio.read(pinNo, function(err, val){
	    gpio.close(pinNo);
	    func(val);
	});
    });
}

function doLights(lastVal){
    lightLed(pin);
    setTimeout(function(){
	lightLed(pin2, function(){
	    timer(lastVal);
	});}, 1200);
}

function timer(lastVal){
    setTimeout(function(){
	readPin(16, function(val){
	    if(val===lastVal){
		timer(val);
	    } else {
		doLights(1);
	    }
	});
    }, 100);
}

timer(1);