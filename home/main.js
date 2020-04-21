var dates = [
 {

"day": "04.12.20",
"description": "So today my sister came over ent me some groceries. It's so sad that we can't be in close contact because we don't want to give the coronavirus to the other person if we have it ourselves.",
"observations": "feelings"

},


{
"day": "04.18.20",
"description": "jkjskjkjkj",
"observations": "feel"
}

]



for(var i=0; i<dates.length; i++){
	var dates = $('<div/>', {
			'class': 'box'
		})
	    .data('date', dates[i])
		.data('clicked', false)
		.html(dates[i].day)
		.css({'background-color': dates[i].observations})
			.click(function(){
			if($(this).data('clicked') ===  false){
				$(this).append( '<span> is ' +  $(this).data("date").description+ '</span>')
				$(this).data('clicked', true)
			}
			else{
				$(this).find('span').remove()
				$(this).data('clicked', false)
			}
		})

	$('#text').append(dates)
}


