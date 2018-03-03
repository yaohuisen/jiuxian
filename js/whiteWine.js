define(function(){
	function Wines(ul,json){
		this.ul = ul;
		this.ullis = ul.find(">li");
		this.json = json;
		this.init()
	}
	Wines.prototype.init = function(){
		var that = this;
		$.getJSON(this.json,function(response){
			$(response).each(function(index,value){
				that.ullis.eq(index).find('>dl>dt>img').attr("src","img/"+value.src);
				that.ullis.eq(index).find('>dl>dd>p>a').text(value.txt);
				that.ullis.eq(index).find('>dl>dd>span').text("$"+value.price);
			})
		})
	}
	return {
		Wines : Wines
	}
})
