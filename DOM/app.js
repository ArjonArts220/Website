
/* get element */
var a = document.getElementById('header'); //return de element (dus ook alle elementen die erin zitten) 
var b = document.getElementsByClassName('header'); //zelfde als ById, maar hier return hij alle elementen met die class-name en stops ze in een HTML-collection (soort array)
var c = document.getElementsByTagName('li'); //return alle ul-elementen en stopt ze in een HTML-collection (soort array)
var qs = document.querySelector('#page-banner h2 other-thing');

	/* loop thro every element in HTML-collection */
for(var i = 0 ; i < c.length ; i++){
	console.log(c[i]);
}

/* get attribute of element */
var d = a.textContent;//return alle 'normale text' van een element, dus ook de elementen in die element
var e = a.innerHTML; //return alle text in die element (dus ook bv. <h2> ... </h2>)

	/* nodes, een node is bv een tag (<body>, <div>, etc) of een commend of een attribute van een element, etc. */
var f = a.nodeType; //return wat voor node het is (dus een tag of attribute, etc), hij return een nummer en dit nummer staat voor het type
var g = a.nodeName; //zelfde als nodeType, alleen return hij nu de hele naam, bv 'DIV'
var h = a.hasChildNodes();//return true als hij elementen in zich heeft, bv de div footer heeft een andere div in zich	
var i = a.cloneNode(true);//hiermee clone je en node, true -> clone de hele node, dus ook de elementen in die node false-> cloned alleen de div tag met bijbehorende attribute

/* set attribute of element */
d.textContent = 'test';
d.innerHTML = "<h2>Hallo</h2>";

/* traversing (van child node naar parent node en visa versa) */
var j = document.getElementById('page-banner');
var k = j.parentNode; //return heel de parent node
var l = j.parentElement; //doet hetzelfde als parentNode
var m = j.children; //return alle children nodes 
var n = j.nextElementSibling; //return de next node
var o = j.previousElementSibling; //return de previous node

/* DOM events */
var p = document.getElementById('page-banner');
p.addEventListener('click', function(e){ //addEventListener('event-name', callbackfunction(event))
	var q = e.target; //return de node waarop, in dit geval, geklikt is
	console.log(e); //in e staan allemaal attribute van jouw event, bv de x en y coordinaotren van muis, of de shift key is ingedrukt, etc. 
	e.preventDefault(); //hiermeer zorg je ervoor dat de standaart event niet plaatsvind, bv als dit bij een link doet gaat hij niet naar de website.
});

	/* Event bubbling, dit is als een event in een element gebeurt maakt hij deze af, als deze is afgemaakt gaat hij naar zijn directe parent en vuurt daar (als hij een event heeft) zijn callback functie af, dit herhaalt zich totdat hij bij de html tag is, dus het einde */
	


/* delete node */
parent.removeChild(child);

/* create een element */
var li = document.createElement('li');
var bookname = document.createElement('span');

/* element toevoegen aan andere element */
li.appendChild(bookname);

/* change style, dit kan door node.style.iets */
li.style.color = 'red';

	/* add a class to node */
li.classList.add('classname');