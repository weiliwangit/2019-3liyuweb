(function($){
	var $dropdown=$('.dropdown');
	$dropdown.hover(function(){
		// console.log(this);
		// $(this).addClass('menu-active');
		// console.log($(this).data("active"));
		var activeClass=$(this).data("active")+"-active";
		$(this).addClass(activeClass);
	},function(){
		// $(this).removeClass('menu-active');
		var activeClass=$(this).data("active")+"-active";
		$(this).removeClass(activeClass);
	})
})(jQuery)