require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"listOne" : "listOne"
	}
})
require(["jquery","cookie","listOne"],function($,cookie,listOne){
	$(function(){
		new listOne.ListOne($("#partOnecon ul"),"JSON/listOne.json");
		new listOne.ListOne($("#partTwocon ul"),"JSON/listTwo.json");
	})
})