require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"magnifying" : "magnifying",
		"goodsinit":"goodsinit",
		"shopCart" : "shopCart"
	}
})
require(["jquery","cookie","magnifying","goodsinit","shopCart"],function($,cookie,magnifying,goodsinit,shopCart){
	$(function(){
		new magnifying.Magnifying()
		new goodsinit.GoddsInit()
		new shopCart.ShopCart()
	})
})