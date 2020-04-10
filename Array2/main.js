// var toppings = ["dragonfruit", "papaya", "mangoes", "Durian", "Lychee", "Pineapple", "Star Fruit", "Mangosteen", "Rambutans", "Jackfruit"]


// for(var i=0; i<toppings.length; i++){
// 	$('#ingredients').append("<div class='box'>" + toppings[i] + "</div>")
// }




// for(var i=2; i<toppings.length; i++){
// 	$('#ingredients').append("<div class='box1'>" + toppings[i] + "</div>")
// }





	//outer loop: repeats the inner loop 25 times
	for(var j=0; j<25; j++){

		//inner loop: for each element in 'fruits', append a div to the page
		for(var i=0; i<fruits.length; i++){
			
			//make the new div
			var fruitDiv = $('<div/>', {
					'class': 'clickBox'
				})
				.html(
					'<span class="name">' + fruits[i].name + `</span>
					<span class="emoji" style="display:none">` + fruits[i].emoji + '</span>')
				.css({'background-color': fruits[i].color})
				.click(function(){
					$(this).find('.emoji').toggle()
				})

			//append it to the page
			$('#fruits').append(fruitDiv)
		}
	}
	








