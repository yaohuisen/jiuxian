require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"getcookie":"getcookie"
	}
})
require(["jquery","cookie","getcookie"],function($,cookie,getcookie){
	$(function(){
		new getcookie.Getcookie()
	})
})