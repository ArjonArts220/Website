//$('something') returnt een jquery object array, dit moet je zien als een wrapper. Dus hij pakt het elment in een jquery object. Hierdoor kan je geen normale javascript functies uitvoeren, als je dit toch wilt doen moet je hem unwrappen.
//var[0], hiermee pak je het eerste element en unwrap je de jquery object
var t_wrap   = $('#title'); 
var t_unwrap = t_wrap[0]; 
console.log(t_wrap[0]);

//change/get html
$('#main-content').html("Penis");
console.log($('#main-content').html());

//change attr
$('title').attr("class", "test");

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

//animate
$('#animate').click(function(){
	$(this).animate({
		width:"300px",
		height:"300px",
		margineft:"100px"
	}, 2000, function(){ //this function is optional, wordt uitgevoerd als hij klaar is met de animatie
		$(this).css("background-color", "red");
	});
});

/* practice 1 */
$('button').click(function(){
	if($('#hiddenText').css("display") == "none"){
		$('#hiddenText').css("display", "block");
	}else{
		$('#hiddenText').css("display", "none");
	}
	
});

/* JQuery UI -> http://jqueryui.com/
   Je moet 3 dingen doen op een jquery plugin te gebruiken:
     1. toevoegen: <link href="jqueryUiLibrary/jquery-ui.css" rel="stylesheet">
	 2. toevoegen: <script src="jqueryUiLibrary/jquery-ui.js"></script>
	 3. Stukje code in jouw jqueryUiLibrary/index.html file copieren en plakken, zowel de html code als jquery
*/
$( "#accordion" ).accordion();