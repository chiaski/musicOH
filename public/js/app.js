$(function() {
    // const wishesCollection = new WishesCollection();
    // wishesCollection.subscribe();
    
    // initialize
    
    if (!localStorage.getItem('viewed')){
    setTimeout(function () {
        
        $(".pop-up").fadeIn("slow");
        localStorage.setItem('viewed','yes');
    }, 3000);
    };  
    
    
    // If pop-up appears 
    
    $(document).click(function (event) {            
        $('.pop-up:visible').fadeOut();
    });
    
    
    
});
