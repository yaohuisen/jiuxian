define(function(){
	function yonghuming(){
		var a = $("#login .yonghu");
		var b = $.cookie("infor");
		var cookieKeyAndValue = JSON.parse(b);
		
		if(cookieKeyAndValue.username!=''){
			alert(1)
			a.html("用户"+cookieKeyAndValue.username+"欢迎您");
			a.removeAttr("href")
		}
	}
	
	return{
		yonghu: yonghuming
	}
})
