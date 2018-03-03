
define(function(){
	function Slider(){
		var that = this;
		this.ullis = $('#banner>ul>li');
		this.ollis = $("#bannercon>ol>li");
		this.oUllis = $("#bannercon>ul>li>ol")
		this.timer = null;
		this.index = 0;	
		this.init();
		this.ullis.eq(0).show().siblings().hide();
		this.sport(0);
		this.autoplay();
		this.pause();
		this.ollis.mouseenter(function(){
			var index = $(this).index();
			that.index = index;
			that.sport(index)
		})
	}
	Slider.prototype.init = function(){
		var that = this;
		$.getJSON('JSON/banner.json',function(response){
			$(response).each(function(index,value){
				var img = $("<img src = img/"+value.src+".jpg/>");
				that.ullis.eq(index).append(img);
			})
		})
		$.getJSON('JSON/rtBanner.json',function(response){
			$(response).each(function(index,value){
				$(value).each(function(index1,value1){
					var img = $("<img src = img/"+value1.src+".png/>");
					that.oUllis.eq(index).find(">li").eq(index1).append(img);
				})
			})
		})
	}
	Slider.prototype.sport = function(num){
		this.ullis.stop().eq(num).fadeIn(500).siblings().fadeOut(500);
		this.ollis.eq(num).removeClass().addClass('#banner hover').siblings().removeClass('#banner hover'
	)
		this.oUllis.eq(0).find('>li').eq(num).fadeIn(500).siblings().fadeOut(500);
		this.oUllis.eq(1).find('>li').eq(num).fadeIn(500).siblings().fadeOut(500);
		this.oUllis.eq(2).find('>li').eq(num).fadeIn(500).siblings().fadeOut(500);
	}
	Slider.prototype.autoplay = function(){
		this.timer = setInterval(function(){
			this.index++;
			if(this.index>7){
				this.index = 0;
			}
			this.sport(this.index);
		}.bind(this),2000)
	}
	Slider.prototype.pause = function(){
		$('#banner').hover(function(){
			clearInterval(this.timer);
		}.bind(this),function(){
			this.autoplay();
		}.bind(this))
	}
	return	{
		Slider :  Slider
	}
})


