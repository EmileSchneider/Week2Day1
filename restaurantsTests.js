var test = require("tape");
var varr = require("./restaurants.js");

var cheese = new varr.Ingredient("Cheese", 5);

var dish = new varr.Dish(cheese, 10, "Chesse with Chesse");

var client = new varr.Client("Goofy", 1);

test("test", function(t){
  t.test("", function(t){
    t.equal(typeof cheese.name, "string", "should be a string");
    t.equal(cheese.name, "Cheese", "should be Chesse");
    t.end();
  });
  t.test("", function(t){
    t.equal(typeof cheese.cost, "number", "should be a number");
    t.equal(cheese.cost, 5, "should be five");
    t.end();
  })

  t.test("", function(t){
    t.equal(dish.ingredients.name, "Cheese","should be cheese" );
    t.equal(dish.ingredients.cost, 5, "should be 5");
    t.equal(dish.price, 10, "should be 10");
    t.equal(typeof dish.name, "string", "should be a string");
    t.end();
  });

  t.test("", function(t){
    t.equal(client.name, "Goofy", "should be named goofy");
    t.equal(client.id, 1, "should be 1");
    t.end();
  })
})
