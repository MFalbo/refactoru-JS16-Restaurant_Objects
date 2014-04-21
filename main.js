// $(document).on('ready', function() {
  
// });

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