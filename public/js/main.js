/* Listeners */

$(document).on("click", ".album-list img", function () {
    console.log("bro");

    var album = $(this).attr('src'); // Gets image source of selected thing
    var albuminfo = $(this).data('artist') + ' ' + $(this).data('album');


    // first check if there is an empty album

    if ($(".album-box[class*='alb-empty']").first()[0]) {

        let albTitle = $(this).data('album');

        /* watch out for fiona apple
        but also fix this cause the cutoff is weird rn
        */
        if (albTitle.length > 40) {
            albTitle = albTitle.substr(0, 40) + "...";
        }

        // check whether we should display titles
        if (($("button").attr("data-id", "display")).attr("data-display") == "yes") {

            $(".album-box[class*='alb-empty']").first()
                .removeClass('alb-empty')
                .addClass("alb-item")
                .css('background-image', 'url(' + album + ')')
                .html("<p style='display:block;'>" + $(this).data('artist') + "&mdash;" + albTitle + "</p>")
                .attr("data-artist", $(this).data('artist'))
                .attr("data-album", $(this).data('album'));

        } else {

            $(".album-box[class*='alb-empty']").first()
                .removeClass('alb-empty')
                .addClass("alb-item")
                .css('background-image', 'url(' + album + ')')
                .html("<p>" + $(this).data('artist') + "&mdash;" + albTitle + "</p>")
                .attr("data-artist", $(this).data('artist'))
                .attr("data-album", $(this).data('album'));

        }



        let title = "<div class='album-title' data-artist='" + $(this).data('artist') + "'  data-album='" + $(this).data('album') + "'><strong>" + $(this).data('artist') + "</strong>&mdash;" + albTitle + "</div>";



        $(".album-titles").append(title);


    }


});

// Click to remove

$(document).on("click", ".alb-item", function () {


    let artTitle = $(this).attr('data-artist');
    let albTitle = $(this).attr('data-album');

    console.log(artTitle + albTitle);

    if (window.outerWidth < 500) {
        $(this).css('background-image', '').html('').removeClass('alb-item').addClass('alb-empty');
    }

    $(this)
        .css('background-image', '')
        .html('')
        .removeClass('alb-item')
        .addClass('alb-empty');


    // delete first copy on album list
    $(".album-titles")
        .find("[data-artist='" + artTitle + "'][data-album='" + albTitle + "']")[0]
        .remove();


});


// Save


var saveImage = function () {
    domtoimage.toBlob(document.getElementById('collage'))
        .then(function (blob) {
            window.saveAs(blob, 'collageOH.png');

        });

    /* Append image to a div */
   
    
   /* domtoimage.toPng(document.getElementById('collage')).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        $("#image-test").append(img);
    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    */

}


// Resize options

var optionResize = function (method) {

    switch (method) {
        case "3x3":
            $(".collage-wrapper").html(" "); // reset
            $(".album-titles").html(" ");
            for (let i = 0; i < 9; i++) {
                
                $(".collage-wrapper")
                    .append('<div class="album-box alb-empty"></div>');
            }

            break;


        case "5x5":
            $(".collage-wrapper").html(" "); // reset
            $(".album-titles").html(" ");
            for (let i = 0; i < 25; i++) {
                
                $(".collage-wrapper")
                    .append('<div class="album-box alb-empty alb-size-two"></div>');
            }

            break;
            
        case "top42":
            
            $(".collage-wrapper").html(" "); // reset
            $(".album-titles").html(" ");
              
            
            
             for (let i = 0; i < 10; i++) {
                
                $(".collage-wrapper")
                    .append('<div class="album-box alb-empty alb-size-two"></div>');
            }
            
             for (let i = 0; i < 12; i++) {
                
                $(".collage-wrapper")
                    .append('<div class="album-box alb-empty alb-sized-six"></div>');
            }
            
            
             for (let i = 0; i < 20; i++) {
                
                $(".collage-wrapper")
                    .append('<div class="album-box alb-empty alb-sized-ten"></div>');
            }
            
            break;


        case "display":

            if ($(".album-box p").css("display") == "none") {

                // fade in existing
                $(".album-box p")
                    .fadeIn("slow");

                ($("button")
                 .attr("data-id", "display"))
                    .attr("data-display", "yes");

            } else {

                $(".album-box p")
                    .fadeOut("slow");
                
                $("album-box p")
                    .css("display", "none");

                ($("button").attr("data-id", "display"))
                    .attr("data-display", "no");
            }

            //$(".album-box p").css("background", "yellow");

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



/* LISTENERS */


// On enter, run search query
$(".input-finder").keypress(function (event) {
    if (event.keyCode === 13) { // 13 is "enter"
        event.preventDefault(); // Cancel page reloed
        displayQuery.render(); //displayRender fetches 
    }
});


$('.btn-generateAlbums').click(function () {
    displayQuery.render();
});


$('.options-area *[data-id="3x3"]').click(function () {
    optionResize("3x3");
});

$('.options-area *[data-id="5x5"]').click(function () {
    optionResize("5x5");
});

$('.options-area *[data-id="top42"]').click(function () {
    optionResize("top42");
});

$('.options-area *[data-id="display"]').click(function () {
    optionResize("display");
});


$('.btn-saveimage').click(function () {
    saveImage();
});
