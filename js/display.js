/* Display materials */

console.log("This is display.")

var artistQuery;
var artistSearch;

function convert(string) {
    return string.replace(/ /g, "+");
}

artistSearch = "The Hotelier";
artistSearch = convert(artistSearch);


function testFetch(artist) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
        .then(function (response) {
            return response.json();

        })
        .then(function (myJson) {
            console.log(myJson.topalbums)
            artistQuery = JSON.stringify(myJson.topalbums.album);
            console.log("Artist Query:" + artistQuery);
        });
}



console.log("Artist Query:" + artistQuery);

var artistQuery = testFetch(artistSearch);
displayAlbums();


function displayAlbums() {
    for (var i = 0; i < artistQuery.length; i++) {

        var albumContent;

        albumContent = "<div class='album-type'><img src='" + artistQuery.album[i].image[2]['#text'] + "'></div>";

        $(".album-list").append(albumContent);

    }
}


/* 
jQuery('<div/>', {
    id: 'some-id',
    "class": 'some-class',
    title: 'now this div has a title!'
}).appendTo('#mySelector');
*/
