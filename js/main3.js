require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"landingPage":"landingPage"
	}
})
require(["jquery","cookie","landingPage"],function($,cookie,landingPage){
	$(function(){
		new	landingPage.LandingPage()
	})
})