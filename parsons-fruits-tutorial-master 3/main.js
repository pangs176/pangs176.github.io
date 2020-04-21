var fruits = [
	{
		"name": "blueberry",
		"color": "blue",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🔵"
	},

	{
		"name": "banana",
		"color": "yellow",
		"flavor": "sweet",
		"shape": "curved",
		"emoji": "🍌"
	},

	{
		"name": "orange",
		"color": "orange",
		"flavor": "zingy",
		"shape": "round",
		"emoji": "🍊"
	},

	{
		"name": "apple",
		"color": "red",
		"flavor": "fresh",
		"shape": "round",
		"emoji": "🍎"
	},

	{
		"name": "kiwi",
		"color": "green",
		"flavor": "tart",
		"shape": "oval",
		"emoji": "🥝"
	},

	{
		"name": "melon",
		"color": "pink",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🍉"
	},

	{
		"name": "grape",
		"color": "purple",
		"flavor": "sweet",
		"shape": "round",
		"emoji": "🍇"
	},

	{
		"name": "strawberry",
		"color": "red",
		"flavor": "sweet",
		"shape": "diamond",
		"emoji": "🍓"
	},

	{
		"name": "pear",
		"color": "green",
		"flavor": "delicate",
		"shape": "pear shape",
		"emoji": "🍐"
	},

	{
		"name": "cherry",
		"color": "red",
		"flavor": "tart",
		"shape": "round",
		"emoji": "🍒"
	},

	{
		"name": "peach",
		"color": "peachpuff",
		"flavor": "delicate",
		"shape": "round",
		"emoji": "🍑"
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
				$(this).append( '<span> is ' +  $(this).data("fruit").shape + '</span>')
				$(this).data('clicked', true)
			}
			else{
				$(this).find('span').remove()
				$(this).data('clicked', false)
			}
		})

	$('#ingredients').append(fruitDiv)
}
