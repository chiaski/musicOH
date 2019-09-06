/* Display materials */

console.log("This is display.")

var artistSearch; // i.e. "Car Seat Headrest"
var artistQuery; // contains artist/album information

function convert(string) {
    return string.replace(/ /g, "+");
}


// Listen to keypress on main

$(".input-finder").keypress(function (event) {

    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayRender(); //displayRender fetches 
    }

});



// Called when user inputs an album name and hits Generate
function displayRender() {

    artistSearch = $('.input-finder').val();
    console.log(artistSearch); // log the results of the artist being searched, for reference
    artistSearch = convert(artistSearch);
    testFetch(artistSearch); // perform artist search

}



// testFetch(artistSearch);

function testFetch(artist) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
        .then(function (response) {
            return response.json();

        })
        .then(function (myJson) {

            //If artist query doesn't work
            if ("error" in myJson) {
                console.log("Doesn't exist!");
            } else {

                console.log(myJson.topalbums.album)

                // Display them on the entry areaß
                displayAlbums(myJson.topalbums);
                artistQuery = JSON.stringify(myJson.topalbums.album);
            }
            //console.log("Artist Query:" + artistQuery);
        });
}



// console.log("Artist Query:" + artistQuery);

// var artistQuery = testFetch(artistSearch);


function displayAlbums(artistQuery) {
    console.log('running!');
    console.log(artistQuery);

    $(".album-list").text(""); // Clera album listing

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
