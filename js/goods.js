define(function(){
	function Goods(){
		var that = this;
		this.ullis = $('#mainProcon>#left>ul>li');
		this.ols = $("#mainProcon>#left>ol");
		this.index = 0;
		this.init();
		this.ullis.mouseover(function(){
			that.index = $(this).index();
			
			that.init();
		})
		
	}
	Goods.prototype.init = function(){
		var that = this;
		this.ullis.eq(this.index).addClass("#mainProcon>#left hover").siblings().removeClass();
		$.getJSON('JSON/goods.json',function(response){
			var arr1 = response[that.index][0];
			$.each(arr1, function(index,value) {
				that.ols.eq(0).find(">li").eq(index).find(">dl>dt>img").attr("src","img/"+value.src+".jpg")				
				that.ols.eq(0).find(">li").eq(index).find(">dl>dd>p>a").text(value.text);
				that.ols.eq(0).find(">li").eq(index).find(">dl>dd>span").text("￥"+value.price)
			});
			var arr2 = response[that.index][1];
			$.each(arr2, function(index,value) {
				that.ols.eq(1).find(">li").eq(index).find(">dl>dt>img").attr("src","img/"+value.src+".jpg")				
				that.ols.eq(1).find(">li").eq(index).find(">dl>dd>p>a").text(value.text);
				that.ols.eq(1).find(">li").eq(index).find(">dl>dd>span").text("￥"+value.price)
			});
		})
	}
	return {
		Goods : Goods
	}
})