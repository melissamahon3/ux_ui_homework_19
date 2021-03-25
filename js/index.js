console.log("Your index.js file is loaded correctly!");

// Hover Color for Nav Bar

$(function() {
    $('.showlink').hover(function() {
        $(this).addClass('hovered');
    },
    function(){
        $(this).removeClass('hovered');
    });
});