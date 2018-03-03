define(function(){
	function SaleSlider(){
		var that = this;
		this.ul = $('#salebox>ul');
		this.ulls = $("#salebox>ul>li");
		this.index = 0;
		this.ollis = $('#salecon>ol>li');
		this.init();
		this.sport()
		this.lfBtn = $("#salebox>i").eq(0);
		this.rtBtn = $("#salebox>i").eq(1);
		this.lfBtn.click(function(){
			if(that.index>2){
				that.index = 2;
			}
			that.index --;
			
			if(that.index>=0){
				that.sport();
			}
			
		})
		this.rtBtn.click(function(){
			if(that.index<0){
				that.index =0
			}
			that.index ++;
			if(that.index<=2){
				that.sport();
			}
			
		})
		this.ollis.click(function(){
			var index = $(this).index();
			that.index = index
			that.sport()
		})
	}
	SaleSlider.prototype.init = function(){
		this.ul.css("width",3549);
		var that = this;
		$.getJSON("JSON/sale.json",function(response){
			$(response).each(function(index,value){
				that.ulls.eq(index).find("dl>dt>img").attr("src","img/"+value.src);
				that.ulls.eq(index).find("dl>dd>p>a").text(value.txt);
				that.ulls.eq(index).find("dl>dd>span").text("￥"+value.price);
			})
		})
	}
	SaleSlider.prototype.sport = function(){
		this.ul.stop().animate({left:-1183*this.index},1000);
		this.ollis.eq(this.index).addClass('#sale active1').siblings().removeClass()
	}
	return {
		SaleSlider : SaleSlider
	}
})