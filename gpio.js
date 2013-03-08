var gpio = require("gpio");

//var gpio11 = gpio.export(11, {direction:'out'});
//var gpio12 = gpio.export(12, {direction:'out'});
var gpio16 = gpio.export(16, {direction:'in',
			      ready: function(){
				  gpio16.on('change', function(val){
				      console.log(val);
				  });
}});