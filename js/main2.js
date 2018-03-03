require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"register" : "register" 
	}
})
require(["jquery","cookie","register"],function($,cookie,register){
	$(function(){
			new register.Register()
	})
})