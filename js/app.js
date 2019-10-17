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

    function hideAlbum() {

    }

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

    $(".album-box[class*='alb-empty']").first().removeClass('alb-empty').css('background-image', 'url(' + album + ')').html("<p>" + albuminfo + "</p>").addClass("alb-item");

});



// Click to remove

$(document).on("click", ".alb-item", function () {
    if (window.outerWidth < 500) {
        $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
    }
    $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
});

/*

$(document).on("click", ".collage-wrapper", function () {
    if (window.outerWidth < 500) {
        $('.collage-wrapper').css('background-color', 'cyan');
        alert("Double clicked me!");
        $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
    }
});*/




/* Swappable Code */


const swappable = new Draggable.Swappable(document.querySelectorAll('.collage-wrapper'), {
        draggable: '.album-box, .album-box .album-item',

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

    /* save image */
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
