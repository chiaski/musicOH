/* Fetch Data Test */

console.log("app.js is loaded");

/*
fetch('https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=thaXuVdDamQySCOQEPHV&artist=cher&track=believe&format=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });


$.ajax({
    url: 'https://api.wit.ai/message?v=20140826&q=',
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
    },
    success: function (data) {
        alert(data);
        //process the JSON data etc
    }
})


$.getJSON('your-api-url/validate.php?' + $(this).serialize + 'callback=?', function (data) {
    if (data) console.log(data);
});*/




function getimage(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function show(response) {
    console.log(response);
}
