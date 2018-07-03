(function () {
	$("#iptSou").click(function() {
		getId("iptSou").style.color = "black";
	});

	$("li.eachCategory").mouseenter(function() {
		var id = $(this).attr("id");
		showProductsCategorys(id);
	});

	$("li.eachCategory").mouseleave(function() {
		var id = $(this).attr("id");
		hideProductsCategorys(id);
	});

	$("div.productsCategorys").mouseenter(function() {
		var id = $(this).attr("id");
		showProductsCategorys(id);
	});

	$("div.productsCategorys").mouseleave(function() {
		var id = $(this).attr("id");
		hideProductsCategorys(id);
	});

	$("#login").click(function() {
		window.location.herf = "loginPage.jsp";
		console.log("-----------");
	});
})();