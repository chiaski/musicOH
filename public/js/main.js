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


// Save


var saveImage = function() {
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


// Resize options

var optionResize = function(method){
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




/* BUTTON LISTENERS */


// On enter, run search query
$(".input-finder").keypress(function (event) {
    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayQuery.render(); //displayRender fetches 
    }
});


$('.btn-generateAlbums').click(function(){
    displayQuery.render();
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


