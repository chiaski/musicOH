/* INTEGRATIONS */



var funcSpotify = (function(){

    // thank u to https://glitch.com/edit/#!/spotify-implicit-grant?path=script.js:1:26 
    // i am api noob but ill clean this later
    
    const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
    window.location.hash = '';

    // Set token
    let _token = hash.access_token;

    const authEndpoint = 'https://accounts.spotify.com/authorize';

    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = '4f64af93d86a47febcb27f17d20e4044';
    const redirectUri = 'https://chia.dev/musicOH/';
    const scopes = [
      'user-top-read'
    ];

    // If there is no token, redirect to Spotify authorization
    if (!_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }

    // Make a call using the token
    $.ajax({
       url: "https://api.spotify.com/v1/me/top/tracks",
       type: "GET",
       beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
       success: function(data) { 
         // Do something with the returned data
         data.items.map(function(track) {
             console.log(track.album.name);
           pasteTracks(track.album.name);
         });
       }
    });
    
    // inputs top tracks into the current chart
    function pasteTracks(track){
        fetch('https://ws.audioscrobbler.com/2.0/?method=album.search&album=' + track + '&api_key=602cdfee63f450d681a00c86afca33c5&format=json&limit=1')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                // retrieve album of track
                let item = myJson.results.albummatches.album[0];
            
                let album = item.image[2]['#text'];
                let albuminfo = item.artist + " - " + item.name

                $(".album-box[class*='alb-empty']").first().removeClass('alb-empty').css('background-image', 'url(' + album + ')').css('background-size', 'contain').html("<p>" + albuminfo + "</p>").addClass("alb-item");
            
            })
           
    }

    
});


$('.spotify-test').click(function(){
    
    // https://accounts.spotify.com/authorize?client_id=4f64af93d86a47febcb27f17d20e4044&redirect_uri=http:%2F%2Flocalhost:8080%2Fpublic%2F&scope=user-read-private%20user-read-email&response_type=token&state=123
    funcSpotify();
    
});