define(function(){
	function AroundSlider(ul,ol,json,classname){	
		var that = this;
		this.timer = null;
		this.index = 0;
		this.ul = ul;
		this.ol = ol;
		this.json = json;
		this.olli = ol.find(">li");
		this.ullis = ul.find(">li");
		this.classname = classname;
		this.sport();
		this.init();
		this.autoplay();
		this.ul.parent().hover(function(){
			clearInterval(that.timer)
		},function(){
			that.autoplay()
		})
		this.olli.mouseover(function(){
			var index = $(this).index();
			that.index = index;
			that.sport()
		})
	}
	AroundSlider.prototype.init = function(){
		var that = this;
		this.ul.css("width",this.ullis.eq(0).width()*this.ullis.length);	
		$.getJSON(this.json,function(response){
			$(response).each(function(index,value){
				that.ul.find(">li").eq(index).find("a>img").attr("src","img/"+value.src);
			})
		})
	}
	AroundSlider.prototype.sport = function(){
		this.ul.stop().animate({left:-this.ullis.eq(0).width()*this.index},1000);
		var num = this.index;
		if(num == this.ullis.length-1){
			num = 0
		}
		this.olli.eq(num).addClass(this.classname).siblings().removeClass(this.classname)
	}
	AroundSlider.prototype.autoplay = function(){
		var that = this;
		this.timer = setInterval(function(){
			if(that.index == that.ullis.length-1){
				that.index = 0;
				that.ul.css("left",0);	
			}
			that.index ++;
			that.sport();
		},3000)
	}
	return {
		AroundSlider : AroundSlider
	}
})