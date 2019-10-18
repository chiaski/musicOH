/* Main App Module
to be fixed later */

console.log("app.js is loaded");

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
