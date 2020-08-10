const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i =0;
while (ingredients[i]<=8)
{
console.log(ingredients[i]);
i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let k =0; k < ingredients.length; k++)
{
console.log(ingredients[k]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let m = ingredients.length - 1; m >=0; m--)
{
console.log(ingredients[m]);
}

