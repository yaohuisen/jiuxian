define(function(){
	function Register(){
		var that = this
		this.strengths = $(".strength>span");
		this.bs = $(".message b");
		this.inputs = $(".message input");
		this.random = $('.random span');
		this.authcode();
		this.strength();
		this.random.parent().click(function(){
			that.authcode()
		})
		this.regular()
		this.onOff = true;
	}
	Register.prototype.authcode = function(){
		var that = this;
		for(var i = 0 ; i < 4; i ++){
			that.random.eq(i).text(that.randomInt(0,9));
		}
	
	}
	Register.prototype.randomInt = function(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	Register.prototype.fn = function(iN){
		if(iN >= 48 && iN <= 57){
				return 1;
			}
		else if(iN >= 65 && iN <= 90){ 
				return 2;
			}
		else{
				return 3;
			}
	}
	Register.prototype.strength = function(){
		var that = this;
		document.onkeyup = function(){
			var str = that.inputs.eq(3).val();
				str = str.toUpperCase();
			if(str == ''){
				that.strengths.eq(0).css('background',"#fff");
				that.strengths.eq(1).css('background',"#fff");
				that.strengths.eq(2).css('background',"#fff");
			}else{
				var hasNumber = false;
				var hasChar = false;
				var hasSign = false;
				var num = 1;
				for(i = 0;i < str.length;i ++){
					num = that.fn(str.charCodeAt(i));		
					if(num == 1){
						hasNumber = true;
						continue;
					}else if(num == 2){
						hasChar = true;
						continue;
					}else if(num == 3){		
						hasSign = true;
						continue;
					}		
				}			
				if(hasSign &&hasChar && hasNumber){				
					that.strengths.eq(0).css('background',"blue");
					that.strengths.eq(1).css('background',"red");
					that.strengths.eq(2).css('background',"yellow");
				} else if(hasChar && hasNumber || hasSign && hasNumber || hasSign && hasChar) {
					that.strengths.eq(0).css('background',"blue");
					that.strengths.eq(1).css('background',"red");
					that.strengths.eq(2).css('background',"#fff");
				}else{
					that.strengths.eq(0).css('background',"blue");
					that.strengths.eq(1).css('background',"#fff");
					that.strengths.eq(2).css('background',"#fff");				
				}
			}		
		}
		
}	

	Register.prototype.regular = function(){
		var that = this;
		this.inputs.eq(0).focus(function(){
			that.bs.eq(0).html("请输入11电话号码")
		})
		this.inputs.eq(0).blur(function(){
			var str = $(this).val();
			if(str!=''){
				if(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g.test(str)){
				that.bs.eq(0).html("")
				$(this).css("borderColor","#ccc")
			}else{
				that.bs.eq(0).html("请输入正确电话号码")
				$(this).css("borderColor","#cc0000")
			}
		}else{
			that.bs.eq(0).html("请输入电话号码");
			$(this).css("borderColor","#cc0000")
		}
			
		})
		
		this.inputs.eq(1).focus(function(){
			that.bs.eq(1).html("请输入4位正确的验证码")
		})
		this.inputs.eq(1).blur(function(){

			var str = $(this).val();
			if(str!=''){
				var num = $(".random").text()
				num = parseInt(num)
				if(str != num){
					that.bs.eq(1).html("你输入有误")
					$(this).css("borderColor","#cc0000")
				}else{
					that.bs.eq(1).html("")
					$(this).css("borderColor","#ccc")
				}
			}else{
				that.bs.eq(1).html("你输入验证码")
				$(this).css("borderColor","#cc0000")
			}		
		})
		
		this.inputs.eq(3).focus(function(){
			that.bs.eq(3).html("8-20位字符 数字 字母 符号 至少包含两种");
		
		})
		var str1 = ""
		this.inputs.eq(3).blur(function(){
		
			 str1 = $(this).val();
			if(str1!=''){	
				if(str1.length < 8){
					that.bs.eq(3).html("密码长度为8-20位")
					$(this).css("borderColor","#cc0000")
				}else{
				
					if( (that.strengths.eq(0).css('backgroundColor') =="rgb(0, 0, 255)")&& (that.strengths.eq(1).css('backgroundColor') == "rgb(255, 255, 255)") ){
				
						that.bs.eq(3).html("数字字母符号至少包含两种")
						$(this).css("borderColor","#cc0000")
					}else{
						that.bs.eq(3).html("")
						$(this).css("borderColor","#ccc")
					}
				}
			}else{
				that.bs.eq(3).html("请输入密码")
				$(this).css("borderColor","#cc0000")
			}		
		})	
		this.inputs.eq(4).focus(function(){
			that.bs.eq(4).html("请再次输入密码")
		})
		this.inputs.eq(4).blur(function(){
			var str = $(this).val();
			if(str!= str1){
					that.bs.eq(4).html("你输入的密码不一致")
					$(this).css("borderColor","#cc0000")
			}else{
				that.bs.eq(4).html("")
				$(this).css("borderColor","#ccc")
			}		
		})
		
		
		this.inputs.eq(5).click(function(){
			that.onOff = !that.onOff
			if(that.onOff == false){
				that.bs.eq(5).css("display","block")
			}else{
				that.bs.eq(5).css("display","none")
			}
		})
		
		this.inputs.eq(6).click(function(){
			
			var n = 0;
			for(var i = 0; i < 5;i ++){
				if(that.inputs.eq(i).val() == ''){
					alert("请填写完整信息");
					return;
				}
				
			}
			for(var i = 0; i < 6;i++){
				
				
				if(that.bs.eq(i).html() == ''){
					n ++;
					continue;
				}else{
					break;
				}
				
			}
		
			if(n == 5){
//				alert("注册成功")
//				var a = $("<a></a>");
//				a.attr("href","landingPage.html");
//				$('body').append(a)
//				a.clcik();
				$.cookie("infor",'{"username":'+that.inputs.eq(0).val()+',"password":"'+that.inputs.eq(3).val()+'"}',{expires:7,path:"/"})
			
			location.href="landingPage.html";
				
			}else{
				alert("你填写信息有误")
					return;
			}
		})
	}
	
	return {
		Register : Register
	}
})
