(function($){
$(".dropdown").on("click",function(ev){
	// $(".dropdown-layer").show();
	// console.log(this)
	ev.stopPropagation();
	var $elem=$(this);
	var $layer=$elem.find(".dropdown-layer");
	console.log(ev.type);
	$elem.data("url","./data/top/mygoods.json");
	console.log($elem.data("url"))
	var url=$elem.data("url");
	$.getJSON(url,function(data){
			var html="";
			for(i=0;i<data.length;i++){
				html+='<li class="dropdown-layer-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
				 
				  // <li><a href="#">已加购的宝贝</a></li>
			}
			$layer.html(html);
		}
	});
$(document).on("click",function(ev){

	var $layer=$(".dropdown").find(".dropdown-layer");
	$layer.slideUp().data("status");
});
})(jQuery)