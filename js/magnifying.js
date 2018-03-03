define(function(){
	function Magnifying(){
		this.ulls = $(".showList-con>ul>li");
		this.div = $('.showPic');
		this.shade = $('.shade')
		this.dadiv = $('.showPic .daPic');
		this.block = $('.showPic .slideBlock');
		this.init()
		this.sport()
	}
	Magnifying.prototype.init = function(){
		var that = this;
		this.div.hover(function(){
			that.block.css('display','block');
			that.dadiv.css('display','block');
		},function(){
			that.block.css('display','none');
			that.dadiv.css('display','none');
		})
	
	}
	Magnifying.prototype.sport = function(){
		var that = this;
		this.shade.mousemove(function(evt){
			var left = evt.pageX - that.div.offset().left - that.block.width()/2;
			var top = evt.pageY - that.div.offset().top - that.block.height()/2;
			if(left<=0){
				left = 0;
			}else if(left>=that.div.width()-that.block.width()){
				left = that.div.width()-that.block.width()
			}
			if(top<=0){
				top = 0;
			}else if(top>=that.div.height()-that.block.height()){
				top = that.div.height()-that.block.height()
			}
			that.block.css({"left":left,"top":top});
			
			var l = left/(that.div.width()-that.block.width());
			var t = top/(that.div.height()-that.block.height());
			var img = that.dadiv.find('>img')
			img.css({"left":-l*(img.width()-that.dadiv.width()),"top":-t*(img.height()-that.dadiv.height())})
		})
	}
	return {
		Magnifying : Magnifying
	}
})
