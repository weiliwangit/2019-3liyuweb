(function($){
	//1.自定义事件
	var js={
			show:function($elem){
				if($elem.data("status")=="show") return;
				//防止用户多次点击
				if($elem.data("status")=="shown") return;
				$elem.trigger("show");
				$elem.show();
				$elem.trigger("shown")
			},
			hide:function($elem){
				if($elem.data("status")=="hide") return;
				if($elem.data("status")=="hidden") return;
				$elem.trigger("hide");
				$elem.hide();
				$elem.trigger("hidden")
			}
	};


	function getshowhide($elem,options){
		// console.log(js[options.mode])
		return js[options.mode];
	}

	

	//封装插件
	var DEFAULTS={
		mode:"show"
	};
	$.fn.extend({
		showhide:function(options){
			// console.log(this)
			return this.each(function(){
				var $elem=$(this);
				var showhideObj=$elem.data("showhideObj");
				if(!showhideObj){
					options=$.extend({},DEFAULTS,options);
					// console.log(this)
					// console.log(options)
					showhideObj=getshowhide($elem,options);
					$elem.data("showhideObj",showhideObj);
					// console.log(showhideObj)
					// console.log(options)
				}
				
				if(typeof showhideObj=="function"){
					// console.log(showhideObj)
					showhideObj($elem,options);
					$elem.data("status",options.mode);
					// console.log(options.mode)
				}
			})
		}
	})
})(jQuery);
