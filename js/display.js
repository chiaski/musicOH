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


    function imgay() {
        console.log("Yes you are gay!");
    };


    function getArtist(music) {
        fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + music + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
            .then(function (response) {
                // return response.json();
                return response.json();
            })
            .then(function (myJson) {
                console.log("SEARCHING: Artist");
                if ("error" in myJson) {
                    console.log("Not found!");
                    // Try with album>
                    getAlbum(music);
                } else {
                    //return myJson.topalbums;
                    artistQuery = myJson.topalbums;
                    displayQuery.displayAlbums(artistQuery);
                    console.log(myJson.topalbums);
                }
            })
    }

    function getAlbum(music) {
        fetch('https://ws.audioscrobbler.com/2.0/?method=album.search&album=' + music + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json')
            .then(function (response) {
                // return response.json();
                return response.json();
            })
            .then(function (myJson) {
                console.log("SEARCHING: Album");

                artistQuery = myJson.results.albummatches;
                displayQuery.displayAlbums(artistQuery);
                console.log(myJson.results);

            })
    }

    function fetchMusic(music) {

        displayQuery.getArtist(music);
    }


    function displayAlbums(artistQuery) {
        console.log(artistQuery);

        $(".album-list").text(""); // Clera album listing
        var badsearch = 0;

        for (var i = 0; i < artistQuery.album.length; i++) {

            var albumContent;

            if (artistQuery.album[i].artist.name == undefined) {
                //Query through direct artist tag
                var albumContent = "<div class='album-type album-box'><img src='" + artistQuery.album[i].image[2]['#text'] + "' data-artist='" + artistQuery.album[i].artist + "' data-album='" + artistQuery.album[i].name + "'></div>";
            } else {
                // Query artist name regularly
                var albumContent = "<div class='album-type album-box'><img src='" + artistQuery.album[i].image[2]['#text'] + "' data-artist='" + artistQuery.album[i].artist.name + "' data-album='" + artistQuery.album[i].name + "'></div>";

            }

            // Only append the album image to the album selector if there exists an URL for it

            // Consider cookies to save selection on browser reload later on
            if (artistQuery.album[i].image[2]['#text'].length !== 0) {
                $(".album-list").append(albumContent);
            } else {
                badsearch++;
            }


            // If lots of bad searches, retry with albums
            if (badsearch >= artistQuery.album.length) {
                console.log("yo");

                var getqueryagain = convert($('.input-finder').val());

                // let's try the after
                displayQuery.getAlbum(getqueryagain);

            }

        }
    }

    return {
        displayAlbums: displayAlbums,
        render: render,
        fetchMusic: fetchMusic,
        imgay: imgay,
        getArtist: getArtist,
        getAlbum: getAlbum
    }


}();



// Listen to keypress on main

$(".input-finder").keypress(function (event) {

    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayQuery.render(); //displayRender fetches 
    }

});
