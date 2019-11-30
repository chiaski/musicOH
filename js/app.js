/* Main App Module
to be fixed later */

console.log("app.js is loaded");

var main = function () {

    function hideAlbum() {

    }

}();


/* Listeners */


// album type means it's loaded into the selection area


$(document).on("click", ".album-type img", function () {
    console.log("bro");

    var album = $(this).attr('src'); // Gets image source of selected thing
    var albuminfo = $(this).data('artist') + '&mdash;' + $(this).data('album');

    console.log(albuminfo);
    console.log(album);

    $(".album-box[class*='alb-empty']").first().removeClass('alb-empty').css('background-image', 'url(' + album + ')').css('background-size', 'contain').html("<p>" + albuminfo + "</p>").addClass("alb-item");

});

// Click to remove

$(document).on("click", ".alb-item", function () {
    if (window.outerWidth < 500) {
        $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
    }
    $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
});



// Button attachments

$('.options-area *[data-id="3x3"]').click(function(){
    console.log("fuck u");
    optionResize("3x3");
});

$('.options-area *[data-id="5x5"]').click(function(){
    console.log("fuck u");
    optionResize("5x5");
});


$('.btn-saveimage').click(function(){
    displayQuery._saveImage();
});


$('.pop-up').click(function(){
    $(this).fadeOut();
});