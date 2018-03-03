define(function(){
	function Getcookie(){
		this.tab = $("#tab");
		this.cookie = document.cookie.split("; ");
		
		var a = $.cookie("infor");
		this.cookieKeyAndValue = JSON.parse(a);
		this.username = this.cookieKeyAndValue.username;
		this.init();
	}
	Getcookie.prototype.init = function(){
		var that= this;
		for(var i = 0; i < this.cookie.length;i ++){
			var keyValue = this.cookie[i].split("=");
			if(keyValue[0].indexOf(this.username + "product_") == 0){
//				eval("("+keyValue[1]+")")
				var a = decodeURIComponent(keyValue[1])
				var json = JSON.parse(a);
			
				var _tr = $("<tr></tr>")
				this.tab.append(_tr);
				var _td = $("<td><img src="+json.img+"/></td>");
				_tr.append(_td);
				_td = $("<td>"+json.name+"</td>");
				_tr.append(_td);
				_td = $("<td>"+json.price+"</td>");
				_tr.append(_td);
				_td = $("<td>"+json.num+"</td>");
				_tr.append(_td);
				_td = $("<td>"+json.id+"</td>");
				_tr.append(_td);
			}
		}
	}
	
	
	
	return{
		Getcookie : Getcookie
	}
})