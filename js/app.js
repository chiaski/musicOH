/* Main App Module
to be fixed later */

console.log("app.js is loaded");


/*
var key = '602cdfee63f450d681a00c86afca33c5';

fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + key + '&artist=The+Hotelier&album=Home,+Like+Noplace+Is+There&format=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });*/


var main = function () {


}();


/* Listeners */


//album type means it's loaded into the selection area


$(".album-type").click(function () {
    console.log("You clicked me!");
});


$(document).on("click", ".album-type img", function () {
    console.log("bro");

    var album = $(this).attr('src'); // Gets image source of selected thing
    var albuminfo = $(this).data('artist') + ' ' + $(this).data('album');

    console.log(albuminfo);
    console.log(album);

    $(".album-box[class*='alb-empty']").first().removeClass('alb-empty').css('background-image', 'url(' + album + ')').html("<p>" + albuminfo + "</p>");

});


/*
const swappable = new Swappable(document.querySelectorAll('.album-box'), {
    draggable: '.album-box'
});

swappable.on('swappable:start', () => console.log('swappable:start'));
swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
swappable.on('swappable:stop', () => console.log('swappable:stop'));
*/



const swappable = new Draggable.Swappable(document.querySelectorAll('.collage-wrapper'), {
        draggable: '.album-box',

        mirror: {
            constrainDimensions: true,
        },
        plugins: [Plugins.ResizeMirror]
    })
    .on('swappable:start', () => console.log('swappable:start'))
    .on('swappable:swapped', () => console.log('swappable:swapped'))
    .on('swappable:stop', () => console.log('swappable:stop'));



/*
$('.album-type .album-box').click(function (event) {
    alert('Text');
});*/


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



/*
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
*/
