var fruits = [
	{
		"name": "dragonfruit",
		"color": "pink",
		"flavor": "my favourite",
		"shape": "round",
	

	},

	{
		"name": "papaya",
		"color": "yellow",
		"flavor": "a fruit I ate yesterday",
		"shape": "curved",
	},

	{
		"name": "mangoes",
		"color": "orange",
		"flavor": "woooo is really sweet",
		"shape": "round",
	},

	{
		"name": "durian",
		"color": "red",
		"flavor": "i hate very m",
		"shape": "round",
		
	},

	{
		"name": "lychee",
		"color": "green",
		"flavor": "tart",
		"shape": "oval",
		
	},

	{
		"name": "pineapple",
		"color": "pink",
		"flavor": "sweet",
		"shape": "round",
		
	},

	{
		"name": "starfruit",
		"color": "purple",
		"flavor": "sweet",
		"shape": "round",
		
	},

	{
		"name": "strawberry",
		"color": "red",
		"flavor": "sweet",
		"shape": "diamond",
	
	},

	{
		"name": "mangosteen",
		"color": "white",
		"flavor": "delicate",
		"shape": "pear shape",
		
	},

	{
		"name": "rambutans",
		"color": "red",
		"flavor": "tart",
		"shape": "round",
		
	},

	{
		"name": "jackfruit",
		"color": "peachpuff",
		"flavor": "delicate",
		"shape": "round",
		
	}
]


for(var i=0; i<fruits.length; i++){
	var fruitDiv = $('<div/>', {
			'class': 'box'
		})
		.data('fruit', fruits[i])
		.data('clicked', false)
		.html(fruits[i].name)
		.css({'background-color': fruits[i].color})
		.click(function(){
			if($(this).data('clicked') ===  false){
				$(this).append( '<span> is ' +  $(this).data("fruit").flavor + '</span>')
				$(this).data('clicked', true)
			}
			else{
				$(this).find('span').remove()
				$(this).data('clicked', false)
			}

		})

	$('#ingredients').append(fruitDiv)
}
