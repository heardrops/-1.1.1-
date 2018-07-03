var getId = function(eleId) {
	return document.getElementById(eleId);
};

function showProductsCategorys(id) {
	$("li.eachCategory[id="+id+"]").css("background-color", "white");
	$("li.eachCategory[id="+id+"]a").css("color", "black");
	$("div.productsCategorys[id="+id+"]").show();
};

function hideProductsCategorys(id) {
	$("li.eachCategory[id="+id+"]").css("background-color", "#CBCBCB");
	$("li.eachCategory[id="+id+"]a").css("color", "red");
	$("div.productsCategorys[id="+id+"]").hide();
};