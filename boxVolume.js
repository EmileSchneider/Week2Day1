var test = require("tape");

function boxVolume(a,b,c) {
  return(parseFloat(Number((a*b*c / 1000)).toFixed(4)));
}

test("is a box volume in liter", function(t) {
  t.test("when passed 3 numbers in centimeters should return volume in liter", function(t){
    t.equal(boxVolume(10,10,10), 1, "should return true");
    t.end();
  });

  t.test("when passed 3 numbers in centimeters should return the volume in liter", function(t){
    t.equal(boxVolume(5,5,5),0.125, "should return true");
    t.end();
  });

  t.test("when passed 3 numbers in centimeters should return the volume in liter", function(t){
    t.equal(boxVolume(5,5,5.1), 0.1275, "should return true");
    t.end();
  });
});
