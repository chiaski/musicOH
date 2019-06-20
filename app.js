/ Fetch data test

fetch('https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=2fd3bf50e7a74d91d84e9a0a816153f2&artist=cher&track=believe&format=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });
