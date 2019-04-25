$(".handle").draggable({
  axis: "x",
  containment: "parent",
  drag: function() {
    var position = $(this).position();
    var positionExtra = position.left - 16;
    $(".cover").width(positionExtra + "px");
  }
});



"use strict";

$(function(){

	var getTextNodesIn = function(el) {
	    return $(el).find(":not(iframe,script)").addBack().contents().filter(function() {
	        return this.nodeType == 3;
	    });
	};

	// var textNodes = getTextNodesIn($("p, h1, h2, h3"));
	var textNodes = getTextNodesIn($("span, .poem"));



	function isLetter(char) {
		return /^[\d]$/.test(char);
	}





	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {

		return Math.floor(Math.random() * (max - min + 1) + min);
	}


	setInterval(messUpWords, 50);
});/* end */


//
// Nota al margen:
//
// La unica aplicación practica que se me ocurre de esta libreria es en un articulo para este poema, quedo bastante bien, aunque lo diga yo.
//
