
var dates = [
 
{
"day": "04.9.20",
"description": "Outside the window, I see groups of people jogging with family but I'm concerned because at this special time of the coronavirus, we really should just stay at home" ,
"observations": "livingroom",
 "left" : "100px",
 "top" : "100px"
},


 {

"day": "04.12.20",
"description": "My sister came to visit me with some groceries and told me to cook and stay safe. Me and my sister are very close since we were young but after going off to college in the US, I don’t get to see her as often, probably only once or twice a year. It’s really sad at this special time, we can’t live together because my brother in law is still at work, and my family thinks that it would be dangerous for me to be living with them since there is a chance of getting infected. ",
"observations": "livingroom",
"left" : "200px",
"top" : "200px"

},


{

"day": "04.14.20",
"description": "I was on a Wechat call with my mom and I told her that I regret not listening to her for going back to China in March before the outbreak of the coronavirus",
"observations": "bedroom",
"left" : "300px",
"top" : "300px"

},

{

"day": "04.16.20",
"description": "After washing dishes from last night, I saw my Italian neighbour coming over to my backyard and started cutting down the tree branche. ",
"observations": "kitchen",
"left" : "400px",
"top" : "400px"

},


{

"day": "04.17.20",
"description": "I called tnt, a Chinese supermarket and asked for my online order I made on April 3rd. It was promised that it would be delivered to me by April 17th. Instead, they told me it was just packed up for Canada Post delivery.  ",
"observations": "kitchen",
"left" : "450px",
"top" : "450px"

},


{

"day": "04.18.20",
"description": "I migrate alot throughout the house. Since I have early morning classes,  I start my Zoom Call in my bedroom, half way through my Zoom call I go downstairs to work in the living room, then in the afternoon I go to the kitchen to work. Then in the afternoon I lay on the sofa to work. At dinner, I go upstairs to my bedroom until the next morning. ",
"observations": "kitchen",
"left" : "500px",
"top" : "500px"

},


{

"day": "04.20.20",
"description": "Recently I responded to an Instagram message my high school friend sent on Instagram. The post was about our Grade 11 art teacher who before teaching was a performance artist. We started talking about our school and got connected again after 2 years",
"observations": "livingroom",
"left" : "520px",
"top" : "520px"


},


{

"day": "04.22.20",
"description": "I was sitting in the living room and suddenly started smelling smoke. I ran to the kitchen and saw smoke coming out of the pot and then realized that I was cooking red bean soup on the stove. I ran and shut down the stove, moved the pot into the sink and sprinited to open all the windows. At this point, I could see clear smoke spreading in the hallway. I was looking at the fire alarm only realizing it didn't sound. ",
"observations": "livingroom",
"left" : "600px",
"top" : "600px"



}, 


{

"day": "04.23.20",
"description": "Then smoke smell that had spread into my bedroom was disturbing me from sleeping",
"observations": "livingroom",
"left" : "700px",
"top" : "750px"

},


{

"day": "04.27.20",
"description": "Ahhh My sister ditched my brother-in-law and came to live with me",
"observations": "bedroom",
"left" : "780px",
"top" : "700px"

},


{

"day": "04.29.20",
"description": "It's my sister's birthday today so she took me out (finally) to buy a cake",
"observations": "kitchen",
"left" : "800px",
"top" : "800px"

},

{

"day": "04.30.20",
"description": "My Chinese supermarket order finally arrived after waiting for one month",
"observations": "kitchen",
"left" : "820px",
"top" : "830px"

},

{

"day": "05.2.20",
"description": "It's so nice to have me sister gossip with me about our parents",
"observations": "kitchen",
"left" : "900px",
"top" : "900px"
},



{

"day": "05.5.20",
"description": "Is my mom's birthday today, so I asked her how did she celebrate and she said that she planned to have lunch with your aunt, and so I said is so nice that she still remembers your birthday and then she said oh no I told her is my birthday. This is so awkward",
"observations": "bedroom",
"left" : "910px",
"top" : "910px"
}

]


// for(var i=0; i<dates.length; i++){
// 	var date = $('<div/>', {
// 			'class': 'box'
// 		})
// 	    .data('date', dates[i])
// 		.data('clicked', false)
// 		.html(dates[i].day)
// 		.css({'background-color': dates[i].observations})
// 			.click(function(){
// 			if($(this).data('clicked') ===  false){
// 				$(this).append( '<span> ' +  $(this).data("date").description+ '</span>')
// 				$(this).data('clicked', true)
// 			}
// 			else{
// 				$(this).find('span').remove()
// 				$(this).data('clicked', false)
// 			}
// 		})

// 	$('#text').append(date)
// }







$(document).ready(function() {
for(var i = 0; i<dates.length; i++) {
    console.log(dates[i])
    var date = $('<div/>', {
  			'class': 'box'
  		  })
        .html( "<p>" + dates[i].day + "</p>")
        .css({ "position" : "absolute",
                 "left" : dates[i].left,
                 "top" : dates[i].top 
               })
    $('.house').append(date)
  }
})











	









