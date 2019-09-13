// Hello!

console.log("This is the main js");



console.log(convert("hello i am desperate"));


function convert(string) {
    return string.replace(/ /g, "+");
}


/* http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=602cdfee63f450d681a00c86afca33c5&artist=Cher&album=Believe&format=json */

var key = '602cdfee63f450d681a00c86afca33c5';


function getThing(artist, album) {

    fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + key + '&artist=The+Hotelier&album=Home,+Like+Noplace+Is+There&format=json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });

}


/* Notes */

/* 

GET JSON OBJECT FOR TOP ALBUM

fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Hotelier&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
  .then(function(response) {
    return response.json();

  })
  .then(function(myJson) {
	console.log(myJson.topalbums)
  });
  
*/
