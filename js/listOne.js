define(function(){
	function ListOne(ul,json){
		this.ul = ul;
		this.json = json;
		this.arr = 0;
		this.init()
		this.top = $("#listTop")
		this.top.click(function(){
			$("html,body").animate({"scrollTop":0}, 1000);
		})
	}
	ListOne.prototype.init = function(){
		var that = this;	
		$.getJSON(this.json,function(response){
		for(var i = 0;i < response.length; i ++){
			$.each(response[i],function(index,value){
				that.ul.eq(i).find('li').eq(index).find('img').attr("src","img/"+value.src)
				that.ul.eq(i).find('li').eq(index).find('h4').text(value.txt1)
				that.ul.eq(i).find('li').eq(index).find('p').eq(0).text(value.txt2)
				that.ul.eq(i).find('li').eq(index).find('p').eq(1).find("b").text(value.price)
			})
		}
		})
			
		
		
	}
	
	
	return {
		ListOne : ListOne
	}
})