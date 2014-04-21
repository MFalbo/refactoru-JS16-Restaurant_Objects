// $(document).on('ready', function() {
  
// });


// ---------------------------------PART1---------------------------
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	this.toString = function(){
		var message = '';

		for (key in this){
			if(typeof(this[key]) === 'string' || typeof(this[key]) === 'number' ){

				message += key + ': ' + this[key] + '\n';
			}
		}

			this.vegan ? message += 'This is vegan\n' : message +='This is not vegan\n';
			this.glutenFree ? message += 'This is gluten free\n' : message += 'This contains gluten\n';
			this.citrusFree ? message += 'This is citrus free\n' : message += 'This contains citrus\n';
				
			return message;
	};
};


var pizza = new FoodItem('Pizza', 700, false, false, true);
var sandwich = new FoodItem('Sandwich', 350, true, false, true);
var soup = new FoodItem('Soup', 225, true, true, false);

console.log(pizza.toString());
console.log(sandwich.toString());
console.log(soup.toString());


// -----------------------------------PART2---------------------------------
var Drink = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
	this.toString = toString;
};

var Plate = function(name, description, price) {
	this.name = name;
	this.price = price;
	this.description = description;
	this.ingredients = [];
	this.toString = toString;
};

var Order = function() {
	this.plates = [];
	this.toString = toString;
};

var Menu = function() {
	this.plates = [];
	this.toString = toString;
};

var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
	this.toString = toString;
};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
	this.toString = toString;
};


function toString() {
	var message = '';
	for (key in this){
		if(typeof(this[key]) === 'string' || typeof(this[key]) === 'number' ){
			message += key + ': ' + this[key] + '\n';
		}
	}
	return message;
}



var beer = new Drink('beer', 'alcohol', 3);







