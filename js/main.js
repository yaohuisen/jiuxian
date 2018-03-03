require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"banner" : "banner",
		"goods" : "goods",
		"notice" : "notice",
		"aroundSlider" : "aroundSlider",
		"sale" : "sale",
		"whiteWine": "whiteWine",
		"stairs" : "stairs",
		"yonghuming":"yonghuming"
	}
})
require(["jquery","cookie","banner","goods","notice","aroundSlider","sale","whiteWine","stairs","yonghuming"],
function($,cookie,banner,goods,notice,aroundSlider,sale,whiteWine,stairs,yonghuming){
	$(function(){
		new	(banner.Slider)();
		new (goods.Goods)();
		new (notice.Notice)();
		new aroundSlider.AroundSlider($('#middle>ul'),$("#middle>ol"),'JSON/middle.json',"#right active");
		new aroundSlider.AroundSlider($('#bottom>ul'),$("#bottom>ol"),'JSON/bottom.json',"#right active");
		new sale.SaleSlider();
		new aroundSlider.AroundSlider($('#slider0>ul'),$("#slider0>ol"),'JSON/whiteSlider.json',"#middle1 active");
		new whiteWine.Wines($('#middle1>ul'),"JSON/whiteGood.json")
		new aroundSlider.AroundSlider($('#slider1>ul'),$("#slider1>ol"),'JSON/wineSlider.json',"#middle2 active");
		new whiteWine.Wines($('#middle2>ul'),"JSON/wine.json")
		new aroundSlider.AroundSlider($('#slider2>ul'),$("#slider2>ol"),'JSON/imWineSlider.json',"#middle3 active");
		new whiteWine.Wines($('#middle3>ul'),"JSON/imWine.json")
		new aroundSlider.AroundSlider($('#slider3>ul'),$("#slider3>ol"),'JSON/healthWineSlider.json',"#middle4 active");
		new whiteWine.Wines($('#middle4>ul'),"JSON/healthWine.json")
		new aroundSlider.AroundSlider($('#slider4>ul'),$("#slider4>ol"),'JSON/foodWineSlider.json',"#middle5 active");
		new whiteWine.Wines($('#middle5>ul'),"JSON/foodWine.json")
		
		new (stairs.Floor)($('.lc'),$('#stairs'))
		yonghuming.yonghu()
	})
})
