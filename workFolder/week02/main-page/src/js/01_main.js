$(function() {
    $('.burger').on('click', function(){
        $(this).parent().find('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    showCategory(categoryList, categoryContent);

});

const categoryList = $('.category span');
const categoryContent = $('.category-content .grid-item');

function showCategory (categoryList, categoryContent){
	categoryList.on('click', function(e){
    const currentCategory = e.target.className;
	    categoryContent.each(function(){
	    	if(currentCategory === 'all'){
	    		$(categoryContent).show();
	    	} else if($(this).hasClass(currentCategory)){
	    		$(this).show();
	    	} else {
	    		$(this).hide();
	    	}
		})
		masonry();
	});
}

function masonry() {
	$('.category-content').masonry({
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 280
	});
}