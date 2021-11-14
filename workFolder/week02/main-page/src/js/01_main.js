$(function() {
    $('.burger').on('click', function(){
        $(this).parent().find('.menu').toggleClass('active');
        $(this).toggleClass('active');
    })
});