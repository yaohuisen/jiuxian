define(function(){
	function GoddsInit(){
		this.div = $(".clearfix-right");
		this.hide = $(".clearfix-right .hide")
		this.price = $(".clearfix .price");
		this.ullis = $(".xuanze ul li");
		this.as = $(".shuliang a");
		this.index = 1;
		this.inputs = $(".shuliang input")
		this.init();
	}
	GoddsInit.prototype.init = function(){
		var that = this;
		this.as.eq(0).click(function(){
			that.index ++;
			that.inputs.val(that.index);
		})
		this.as.eq(1).click(function(){
			that.index --;
			if(that.index <= 0){
				that.index = 1
			}
			that.inputs.val(that.index);
		})
		that.div.hover(function(){
			that.hide.stop().show(500)
		},function(){
			that.hide.stop().hide(500)
		})
		that.ullis.click(function(){
			$(this).css("borderColor","#cc0000").siblings().css("borderColor","#ccc")
		})
		that.ullis.eq(0).click(function(){
			that.price.html(78+'.00')
		})
		that.ullis.eq(1).click(function(){
			that.price.html(148+".00")
		})
	}
	return{
		GoddsInit : GoddsInit
	}
})
