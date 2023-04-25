jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});
function rickroll(){
	alert("Ашипка");
	var meni_1 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
	location.href = meni_1;
}