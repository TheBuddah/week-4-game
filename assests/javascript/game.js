 var random_result;
 var win;
 var loss;

 for(var i = 0; i < 4; i++) {
 	var crystal = $("<div>");
 	crystal.attr("class", "crystal");
 	$(."crystals").append(crystal);
 }
 // a game with 4 cyrstals
 // every crystal needs random number
 // a new random number should generate every time we win or lose
 // when click any crystal it should add with the previous result till score is reached
 // until equals the random result
 // if greater than random result, we decrement a loss counter
 // if it is equal, then we increment a win counter
