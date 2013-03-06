var gpio = require("pi-gpio");

var pin = 12;

gpio.open(pin, "output", function(err) {
    gpio.write(pin, 1, function() {
        gpio.close(pin);
    });
});