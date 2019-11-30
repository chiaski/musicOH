$(function() {
    // const wishesCollection = new WishesCollection();
    // wishesCollection.subscribe();
    
    // initialize
    
    if (!localStorage.getItem('viewed')){
    setTimeout(function () {
        alert("hi");
        
        $(".pop-up").fadeIn("slow");
        
        localStorage.setItem('viewed','yes');
    }, 3000);
    };  
    
    $(document).click(function (event) {            
        $('.pop-up:visible').fadeOut();
    });
    
    
});
