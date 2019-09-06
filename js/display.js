/* Display materials */

console.log("This is display.")

var artistQuery;
var artistSearch;

function convert(string) {
    return string.replace(/ /g, "+");
}

/*
$("#generateAlbums").keyup(function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        console.log("Pressed enter");
        // Cancel the default action, if needed
        // event.preventDefault();

        //   displayRender();

        // Trigger the button element with a click
        // document.getElementById("generateAlbums").click();
    }
});*/

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
