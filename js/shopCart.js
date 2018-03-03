define(function(){
	function ShopCart(){
		var a = $.cookie("infor");
		this.cookieKeyAndValue = JSON.parse(a);
		this.username = this.cookieKeyAndValue.username;
		
		this.sub = $('#sub1');
		this.num = $(".shuliang #num")
		this.id = $('.goodNo span').html();
		this.img = $(".showPic img").attr("src");
		this.price = $(".clearfix .price").html();
		this.goodname = $(".comName h1").html();
		this.init();
	
	}
	ShopCart.prototype.init = function(){
		var that = this;
		
		this.sub.click(function(){
			
//			'{"img" : "'+that.img+'","name": "'+that.goodname+'","price":"'+that.price+'","num":"'+that.num.val()+'","id":"'+that.id+'"}'
			var cookieKey = that.username + "product_" + that.id;
		
			var cookieValue = '{"img":"'+that.img+'","name":"'+that.goodname+'","price":"'+that.price+'","num":"'+that.num.val()+'","id":"'+that.id+'"}'
			$.cookie(cookieKey,cookieValue,{path:"/",expires:7});
		
		})
		
	}
	
	
	
	return {
		ShopCart : ShopCart
	}
})
