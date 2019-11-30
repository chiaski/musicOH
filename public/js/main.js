/* Listeners */

$(document).on("click", ".album-list img", function () {
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
        draggable: '.album-box .album-item',

        mirror: {
            constrainDimensions: false,
        },
        plugins: [Plugins.ResizeMirror]
    })
    .on('swappable:start', () => console.log('swappable:start'))
    .on('swappable:swapped', () => console.log('swappable:swapped'))
    .on('swappable:stop', () => console.log('swappable:stop'));



/* BUTTON LISTENERS */


// On enter, run search query
$(".input-finder").keypress(function (event) {
    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayQuery.render(); //displayRender fetches 
    }
});



$('.options-area *[data-id="3x3"]').click(function(){
    console.log("fuck u");
    optionResize("3x3");
});

$('.options-area *[data-id="5x5"]').click(function(){
    console.log("fuck u");
    optionResize("5x5");
});


$('.btn-saveimage').click(function(){
    saveImage();
});


$('.pop-up').click(function(){
    $(this).fadeOut();
});


