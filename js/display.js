/* Display materials */

var artistQuery;
var artistSearch;

function convert(string) {
    return string.replace(/ /g, "+");
}

artistSearch = "The Hotelier";
artistSearch = convert(artistSearch);


function testFetch() {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=The+Hotelier&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
        .then(function (response) {
            return response.json();

        })
        .then(function (myJson) {
            console.log(myJson.topalbums)
            artistQuery = myJson.topalbums;
        });
}


testFetch()

function displayAlbums() {
    for (var i = 0; i < arr.length; i++) {

        var albumContent;

        albumContent = "<div class='album-type'><img src='" +
            $(".album-list").append()

    }
}


/* 
jQuery('<div/>', {
    id: 'some-id',
    "class": 'some-class',
    title: 'now this div has a title!'
}).appendTo('#mySelector');
*/
