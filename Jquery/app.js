
/* get */

//$('something') returnt een jquery object array, dit moet je zien als een wrapper. Dus hij pakt het elment in een jquery object. Hierdoor kan je geen normale javascript functies uitvoeren, als je dit toch wilt doen moet je hem unwrappen.
//var[0], hiermee pak je het eerste element en unwrap je de jquery object
var t_wrap   = $('#title'); 
var t_unwrap = t_wrap[0]; 
console.log(t_wrap[0]);

//change/get html
$('#main-content').html("Penis");
console.log($('#main-content').html());

//change attr
$('iframe').attr("src", "http://www.google.com");

//change/get style
$('#title').css("backgroundColor","red");
console.log($('#title').css("backgroundColor"));

//this, this return de node waarom jij iets uitvoerd (bv bij een event)
$('#main-content').click(function(){
	$(this).css("backgroundColor", "green");
});

//events
$('#main-content').click(function(){
	alert("You just clicked biatch");
});
//$('#main-content').hover(function(){
//	alert("You just hovered biatch");
//});

/* practice 1 */
$('button').click(function(){
	if($('#hiddenText').css("display") == "none"){
		$('#hiddenText').css("display", "block");
	}else{
		$('#hiddenText').css("display", "none");
	}
	
});