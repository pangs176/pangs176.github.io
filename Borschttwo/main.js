var toppings = ["dragonfruit", "papaya", "mangoes", "Durian", "Lychee", "Pineapple", "Star Fruit", "Mangosteen", "Rambutans", "Jackfruit"]


for(var i=0; i<toppings.length; i++){
	$('#ingredients').append("<div class='box'>" + toppings[i] + "</div>")
}

for(var i=2; i<toppings.length; i++){
	$('#ingredients').append("<div class='box1'>" + toppings[i] + "</div>")
}








