/* Display materials */

console.log("This is display.")

var artistQuery;
var artistSearch;

function convert(string) {
    return string.replace(/ /g, "+");
}


// Called when user inputs an album name and hits Generate
function displayRender() {
    // artistSearch = "Snail Mail";

    artistSearch = $('.input-finder').val();
    console.log(artistSearch);
    artistSearch = convert(artistSearch);
    testFetch(artistSearch);

}



// testFetch(artistSearch);

function testFetch(artist) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
        .then(function (response) {
            return response.json();

        })
        .then(function (myJson) {
            console.log(myJson.topalbums.album)

            displayAlbums(myJson.topalbums);

            artistQuery = JSON.stringify(myJson.topalbums.album);
            //console.log("Artist Query:" + artistQuery);
        });
}



// console.log("Artist Query:" + artistQuery);

// var artistQuery = testFetch(artistSearch);


function displayAlbums(artistQuery) {
    console.log('running!');
    console.log(artistQuery);
    for (var i = 0; i < artistQuery.album.length; i++) {

        var albumContent;


        albumContent = "<div class='album-type'><img src='" + artistQuery.album[i].image[2]['#text'] + "'></div>";
        console.log(albumContent);

        // Only append the album image to the album selector if there exists an URL for it
        if (artistQuery.album[i].image[2]['#text'].length !== 0) {
            $(".album-list").append(albumContent);
        }

    }
}


/* 
jQuery('<div/>', {
    id: 'some-id',
    "class": 'some-class',
    title: 'now this div has a title!'
}).appendTo('#mySelector');
*/
