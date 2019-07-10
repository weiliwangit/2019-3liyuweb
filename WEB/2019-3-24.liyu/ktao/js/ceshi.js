(function($){
$(".dropdown").on("click",function(ev){
	// $(".dropdown-layer").show();
	// console.log(this)
	var $elem=$(this);
	var $layer=$elem.find(".dropdown-layer");
	if($layer.data('status') == 'click') return;
	console.log(ev.type);
	$elem.data("url","./data/top/mygoods.json");
	var url=$elem.data("url");
	$.getJSON(url,function(data){
			// console.log(data)
			var html="";
			for(i=0;i<data.length;i++){
				html+='<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
				 
				  // <li><a href="#">已加购的宝贝</a></li>
			}
			$layer.html(html);
		})
	$layer.slideDown().data("status","click");
	})
})(jQuery)