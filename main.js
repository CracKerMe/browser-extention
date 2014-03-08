/* 
 *  On BitBucket on user: cyber778
 *  CREATED BY: Elad silberring
 *  Date: 08/03/14
 * 
 * */

function wikIt(){
	var selection = window.getSelection().toString();
	if(!selection | selection==""){
		console.warn('WikIt: no text selected');
		return false;
	};
	var url = 'http://en.wikipedia.org/wiki/' + selection;
	window.open(url, '_blank');
}


//jquery ready
$(function(){
	
	//define a generic event handler 
    var keyHandler = function( event ){
        var keyCode = event.which;
        // If the key "|" is aptured in the event data.
        if(keyCode==124){wikIt();}
    };
 
    // binding the key-press
    $( "body" ).on( "keydown keypress", keyHandler );
    
});
