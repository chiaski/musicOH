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


/* Save */
// var saveimage = $('.saveimage');

function saveImage() {

    domtoimage.toBlob(document.getElementById('collage'))
        .then(function (blob) {
            window.saveAs(blob, 'my-node.png');

        });


    domtoimage.toPng(document.getElementById('collage')).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        $("#image-test").append(img);
    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

    /*
    domtoimage
        .toBlob(document.getElementById("collage"))
        .then(function (blob) {
            saveBlobAsFile(blob, "XX.png");
        });
    // this function is to convert blob to base64 img
    function saveBlobAsFile(blob, fileName) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64 = reader.result;
            var img = document.createElement("img");
            img.classList.add("me-img");
            img.setAttribute("src", base64);
            // insert the img to dom
            document.getElementById("image-test").appendChild(img);
        };
        reader.readAsDataURL(blob);
    }*/

    /*
    var target = $('#collage-wrapper');

    html2canvas(target.get(0)).then(function (canvas) {
        console.log(canvas);
    });*/

}
/*
function PrintDiv() {
    var saveimage = $('.saveimage');
    html2canvas((document.body), {
        onrendered: function (canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "MaSimulation.png");
        }
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}*/




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
