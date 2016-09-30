console.log("Some nonsense");

var timer = 0;
var counter = 0;

for (var i = 0; i < 1000; i++) {
    setTimeout(function() {
        var nonsense = "";
        for (var s = 0; s < 40; s++) {
            if (Math.random()*100 < 40) {
                nonsense += "blah blah";
            } else {
                nonsense += "";
            }
    
        }
        console.log(nonsense);
    }, timer);
    timer += 1000;
    counter++;
}