$(document).ready(function(){

	/**
	 * Menu
	 */

	$(document).on('click', '.header-menu_open', function(){
		$(this).add('nav,.header-nav-container').toggleClass('active');
		$('body').toggleClass('menu-opened');
	});

	/**
	 * filter-tab
	 */

	$(document).on('click', '.catalog-filter-title', function(){
		let parent = $(this).closest('.catalog-filter-box'),
			container = parent.find('.catalog-filter-items');

		$(this).toggleClass('active');

		if(container.is(':hidden')) {
			container.slideDown(300);
		}
		else {
			container.slideUp(300);
		}

	});

	/**
	 * js-open-filter
	 */

	$(document).on('click', '.js-open-filter', function(){
		let container = $('.catalog-filter-wrapper');
		if(container.is(':hidden')) {
			container.slideDown(300);
		}
		else {
			container.slideUp(300);
		}
	});

	/**
	 * js-filter-more
	 */

	$(document).on('click', '.js-filter-more', function(){
		$(this).closest('.catalog-filter-box')
			.find('.catalog-filter-swiper').addClass('active');
		$(this).remove();
	});

	/**
	 * js-object-show
	 */

	$(document).on('click', '.js-object-show', function(){
		let container = $(this).closest('div');

		container.find('.object-option-item.hidden').each(function(){
			$(this).removeClass('hidden');
		});

		$(this).remove();
	});

	/**
	 * Carousels
	 */

	if($('.js-detail-carousel').length > 0) {

		$('.js-detail-carousel').owlCarousel({
			loop: false,
			margin: 0,
			nav: true,
			items: 1,
			dots: true
		});

	}

	/**
	 * Table
	 */

	$('table').each(function(){

		$(this).wrap('<div class="table-wrap"></div>');

	});

	/**
	 * Role
	 */

	$(document).on('click', '.modal-role-item', function(){

		let text = $(this).data('text');

		$('.js-role span').text(text);
		$.fancybox.close();

	});

	/**
	 * Modals
	 */

	$(document).on('click', '.js-role', function(e){
		$.fancybox.open({
			src  : '.js-modal-role',
			type : 'inline',
			attr: {
				scrolling: "none"
			},
			scrolling : 'visible',
			touch: false
		});
	});

});