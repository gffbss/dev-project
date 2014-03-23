
// This JS code comes from Charlie Loyd [ @vruba ], who wrote a wonderful little
// missive here: http://basecase.org/2012/11/diadem/
// He's given me permission to pilfer his codes. Thank you, Charlie.

// BEGIN COLOR-SCHNAZZIE-IFIER.

var pi = Math.PI;
var sin = Math.sin;
var floor = Math.floor;
var abs = Math.abs;
var pow = Math.pow;

// Today in Bad Variable Names, we visit something I chose to call “epoch”…
var epoch = function() { return new Date().getTime()/2000; }
// The last number in that line controls color cycle speed.

function clip(min, n, max) {
	if (min > n) { return min; }
	if (max < n) { return max; }
	return n;
}

// This is an adaptation of the rainbow function described at
// http://basecase.org/env/on-rainbows (K is for @skimbrel, my
// buddy who had the central insight that sines work for this).
// We lighten and desaturate it a little.
function K(h) {
	h *= -1;
	var r = sin(pi * h);
	var g = sin(pi * (h + 1/3));
	var b = sin(pi * (h + 2/3));
	return [r, g, b].map(function (c) {
		c = c*c;
		c = 0.85 + (c*0.15); // HURRRR
		return floor(c * 255);
	});
}

function recolor(plus) {
	var cycle = ((epoch()/75) + plus) % 1;
	var color = K(cycle);
	color = 'rgb(' + color.join(',') + ')';
	$('body').css({'background-color': color});
}

$(document).ready(function(){
	recolor(0);
	// The last number in this line is the update interval (in ms):
	a = function() { setInterval(function() { recolor(0) }, 100); }
	a();
});