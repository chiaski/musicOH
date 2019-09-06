function convert(string) {
    return string.replace(/ /g, "+");
}




// Handles display calls
var displayQuery = function () {
    console.log("This is display.");

    var artistSearch; // i.e. "Car Seat Headrest"
    var artistQuery; // contains artist/album information

    // Called when user inputs an album name and hits Generate
    function render() {
        artistSearch = $('.input-finder').val();
        console.log(artistSearch); // log the results of the artist being searched, for reference
        artistSearch = convert(artistSearch);
        displayQuery.fetchMusic(artistSearch); // perform artist search
    }

    // fetchMusic(artist or album)

    function fetchMusic(artist) {
        fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + artist + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                //If artist query doesn't work
                if ("error" in myJson) {
                    console.log("Doesn't exist!");
                } else {
                    // Display sample
                    console.log(myJson.topalbums.album)

                    // Display them on the entry area
                    displayQuery.displayAlbums(myJson.topalbums);
                    artistQuery = JSON.stringify(myJson.topalbums.album);
                }
                //console.log("Artist Query:" + artistQuery);
            });
    }


    function displayAlbums(artistQuery) {
        console.log('running!');
        console.log(artistQuery);

        $(".album-list").text(""); // Clera album listing

        for (var i = 0; i < artistQuery.album.length; i++) {

            var albumContent = "<div class='album-type'><img src='" + artistQuery.album[i].image[2]['#text'] + "'></div>";
            console.log(albumContent);

            // Only append the album image to the album selector if there exists an URL for it
            if (artistQuery.album[i].image[2]['#text'].length !== 0) {
                $(".album-list").append(albumContent);
            }
        }
    }

    return {
        displayAlbums: displayAlbums,
        render: render,
        fetchMusic: fetchMusic
    }



}();



// Listen to keypress on main

$(".input-finder").keypress(function (event) {

    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayQuery.render(); //displayRender fetches 
    }

});





/* 
jQuery('<div/>', {
    id: 'some-id',
    "class": 'some-class',
    title: 'now this div has a title!'
}).appendTo('#mySelector');
*/
