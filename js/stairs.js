define(function(){
	function Floor(elem, tip){
		var that = this;
		this.tip = tip;
		tip.find("ul>li").click( this.top_click );
		this.obj = elem.map(function(){	
			return $(this).offset().top;
		});
		this.obj.push( elem.last().offset().top+elem.last().height() );
		tip.find("ol>li").click( function(){ 		
			that.lc_click($(this));
		} );
		$("#shang").click(function(){
			that.top_click()
		})
		$(window).scroll( function(){
			
			that.win_scroll();
		} );
	}
	Floor.prototype.top_click = function(){
		$("html,body").animate({"scrollTop":0}, 1000);
	}
	Floor.prototype.lc_click = function(el){
		$("html,body").animate({"scrollTop": this.obj[el.index()] }, 1000);
	}
	Floor.prototype.win_scroll = function(){
		this.tip.find("ol>li").eq(0).removeClass("#stairs active")
		var ch = $(window).height()/2;
		var st = $(document).scrollTop();
		var arr = this.obj;
		var ind ;
		for(var i=0, l=arr.length; i<l-1; i++){
			var min = arr[i];
			var max = arr[i+1];
			if( min < st+ch && st+ch < max ){
				ind = i;
			}
		}
		
		if( ch<st ){
			this.tip.show(500);
		}else{
			this.tip.hide(500);
		}
	
			this.tip.find("ol>li").eq(ind).addClass("#stairs active").siblings().removeClass('#stairs active')
		
			
		
		
		
	}
	
	return {
		Floor : Floor
	}

})
