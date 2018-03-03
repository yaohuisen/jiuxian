define(function(){
	function Notice(){
		var that = this;
		this.index = 0;
		this.ullis = $('#mainProcon #news>ul>li');
		this.ols = $("#mainProcon #news>ol");
		this.sport()
		this.ullis.mouseover(function(){
			that.index = $(this).index();
			that.sport()
		})
		
	}
	Notice.prototype.sport = function(){
		var that = this;
		this.ullis.eq(this.index).addClass('#news hover').siblings().removeClass()
		$.getJSON('JSON/notice.json',function(response){
			var arr1 = response[that.index][0];
			$.each(arr1,function(index,value){
				that.ols.eq(0).find(">li").eq(index).find(">a").text(value);
			})
			var arr2 = response[that.index][1];
			$.each(arr2,function(index,value){
				that.ols.eq(1).find(">li").eq(index).find(">a").text(value);
			})
		})
	}
	return {
		Notice : Notice
	}
})