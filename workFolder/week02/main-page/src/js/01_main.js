$(function() {
    $('.burger').on('click', function(){
        $(this).parent().find('.menu').toggleClass('active');
        $(this).toggleClass('active');
    });
    showCategory(categoryList, categoryContent);
    masonry();
});

const categoryList = $('.category span');
const categoryContent = $('.category-content .grid-item');

function showCategory (categoryList, categoryContent){
	categoryList.on('click', function(e){
		$(categoryList).removeClass('active');
		$(this).addClass('active');

    const currentCategory = e.target.getAttribute('data-portfolio');

    categoryContent.each(function(){
    	console.log($(this).attr('data-portfolio'))
	    	if(currentCategory == 'all'){
	    		$(categoryContent).show();
	    	} else if($(this).attr('data-portfolio') == currentCategory){
	    		$(this).show();
	    	} else {
	    		console.log('3', currentCategory);
	    		$(this).hide();
	    	}
		});
		masonry();
	});
}

function masonry() {
	$('.category-content').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: 280
	});
}