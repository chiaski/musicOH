
// Handles display calls
var displayQuery = (function(){
    console.log("This is display.");

    var artistSearch; // e.g. "Car Seat Headrest"
    var artistQuery; // contains artist/album information
    
    function convert(string) {
    return string.replace(/ /g, "+");
    }

    // Called when user inputs an album name and hits Generate
    function render() {
        artistSearch = $('.input-finder').val();
        console.log(artistSearch); // log the results of the artist being searched, for reference
        artistSearch = convert(artistSearch);
        getArtist(artistSearch); // perform artist search
    }

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
                    displayAlbums(artistQuery);
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
                displayAlbums(artistQuery);
                console.log(myJson.results);

            })
    }


    function displayAlbums(artistQuery) {
        console.log(artistQuery);

        $(".album-list").text(""); // clear album listing
        var badsearch = 0;

        for (var i = 0; i < artistQuery.album.length; i++) {

            let albumContent;
            let albumTitle;

            if (artistQuery.album[i].artist.name == undefined) {
                //Query through direct artist tag
                let albumContent = "<div class='album-type album-box'><img src='" + artistQuery.album[i].image[2]['#text'] + "' data-artist='" + artistQuery.album[i].artist + "' data-album='" + artistQuery.album[i].name + "'></div>";
                
                let albumTitle = "<div class='album-title' data-artist='" + artistQuery.album[i].artist + "  data-album='" + artistQuery.album[i].name + "'><strong>" + artistQuery.album[i].artist + "</strong>&mdash;" + artistQuery.album[i].name + "</div>";
                
                
            } else {
                // Query artist name regularly
                let albumContent = "<div class='album-type album-box'><img src='" + artistQuery.album[i].image[2]['#text'] + "' data-artist='" + artistQuery.album[i].artist.name + "' data-album='" + artistQuery.album[i].name + "'></div>";
                
                
                let albumTitle = "<div class='album-title' data-artist='" + artistQuery.album[i].artist.name + "  data-album='" + artistQuery.album[i].name + "'><strong>" + artistQuery.album[i].artist.name + "</strong>&mdash;" + artistQuery.album[i].name + "</div>";

            }

            // Only append the album image to the album selector if there exists an URL for it

            /* TODO: Consider cookies to save selection on browser reload later on */
            if (artistQuery.album[i].image[2]['#text'].length !== 0) {
                
                $(".album-list").append(albumContent);
                $(".album-titles").append(albumTitle);
                
            } else {
                badsearch++;
            }


            // If lots of bad searches, retry with albums
            if (badsearch >= artistQuery.album.length) {

                var getqueryagain = convert($('.input-finder').val());

                // let's try the after
                getAlbum(getqueryagain);

            }

        }
    }
    
    
    /* Save */

    function _saveImage() {
        domtoimage.toBlob(document.getElementById('collage'))
            .then(function (blob) {
                window.saveAs(blob, 'collageOH.png');

            });

        /* Append image to a div */
        domtoimage.toPng(document.getElementById('collage')).then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            $("#image-test").append(img);
        }).catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

    }
    
    
    /* Resize options */

    function _resizeImage(method){
        switch(method){
            case "3x3": 
                $(".collage-wrapper").html(" "); // reset
                for(let i=0;i<9;i++){
                    $(".collage-wrapper").append('<div class="album-box alb-empty"></div>');
                }
                console.log("LOL");
                break;


            case "5x5": 
                $(".collage-wrapper").html(" "); // reset
                for(let i=0;i<25;i++){
                    $(".collage-wrapper").append('<div class="album-box alb-empty alb-size-two"></div>');
                }
                console.log("LOL");
                break;
        }

    }

    return {
        displayAlbums: displayAlbums,
        render: render,
        getArtist: getArtist,
        getAlbum: getAlbum,
        _saveImage: _saveImage,
        _resizeImage: _resizeImage
    };


})();

