define(function(){
	function LandingPage(){
		var a = $.cookie("infor");
		this.cookieKeyAndValue = JSON.parse(a);
		this.ems = $("#maincon em");
		this.inputs = $("#maincon input")
		this.verify()
	
	}
	LandingPage.prototype.verify = function(){
		var that = this;
		this.inputs.eq(3).click(function(){
			if(that.inputs.eq(0).val() == ''||that.inputs.eq(1).val() == ''){
				if(that.inputs.eq(0).val() == ''){
				that.ems.eq(0).html("所填内容不能为空")
				}
				if(that.inputs.eq(1).val() == ''){
					that.ems.eq(1).html("所填内容不能为空")
				}
			}else{
				
				var username = that.cookieKeyAndValue.username;
				var password = that.cookieKeyAndValue.password;
				if(username == that.inputs.eq(0).val()&&password == that.inputs.eq(1).val()){
				
					location.href="index.html";
				}else{
					alert("填写密码与用户名不一致")
				}
			}
			
		})
	}
	return {
		LandingPage : LandingPage
	}
})
