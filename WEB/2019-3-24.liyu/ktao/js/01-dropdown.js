(function($){
	function Dropdown($elem,options){
		//罗列属性
		// console.log(this)
		this.$elem=$elem;
		this.options=options;
		// console.log("bb",this.$elem);
		this.$layer=this.$elem.find(".dropdown-layer");
		this.$activeClass=this.$elem.data("active")+"-active";
		this.time=0;
		// 初始化
		this.init();

	}
	Dropdown.prototype={
		constructor:Dropdown,
		init:function(){
			//初始化显示隐藏插件
			this.$layer.showHide(this.options);
			//监听显示隐藏事件
			this.$layer.on('show shown hide hidden',function(ev){
				// console.log(ev.type);
				this.$elem.trigger("dropdown-"+ev.type)
			}.bind(this));
			//绑定事件
			if(this.options.eventName=="click"){
				this.$elem.on("click",function(ev){
					ev.stopPropagation();
					this.show()
				}.bind(this));
				// 点击别的地方下拉菜单消失
				$(document).on("click",function(){
					this.hide()
				}.bind(this));
			}else{
				this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this));
			}
		},
		show:function(){
			//处理用户快速划入划出
			if(this.options.dealy){
				this.timer=setTimeout(function(){
					this.$layer.showHide("show");
					//显示时添加对应class
					this.$elem.addClass(this.$activeClass);
				}.bind(this), this.options.dealy)
			}
			
		},
		hide:function(){
			//清楚定时器
			clearTimeout(this.timer);
			this.$layer.showHide("hide");
			this.$elem.removeClass(this.$activeClass);
		}
	}

	var DEFAULTS={
		js:true,
		mode:"slide",
		dealy:300,
		eventName:""
	}

	//封装dropdown插件
	$.fn.extend({
		dropdown:function(options){//实现单例模式
			// console.log("aa",this)
			this.each(function(){
				var $elem=$(this);
				var dropdown=$elem.data("dropdown");
				if(!dropdown){
					// console.log("cc",this)
				options=$.extend({},DEFAULTS,options);
				var dropdown=new Dropdown($elem,options);
				$elem.date("dropdown",dropdown);
				}
				if(typeof dropdown[options]=="function"){
					dropdown[options]();
				}
				
			})
		}
	})

})(jQuery);