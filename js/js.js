$(document).ready(function (){
	$("#input").attr("disabled" , "1");
	
	$("#edit").click(function(){
		$("#input").removeAttr("disabled")
		$("#input").css({
			"background" : "#F2F2F2"
		});
		document.getElementById("input").focus();
		document.getElementById("input").select();
	});

	$("#input").keyup(function(e){
		if(e.key == "Enter"){
			$("#input").attr("disabled" , "1");
			$("#input").val($("#input").val().trim());
			$("#input").css({
			"background" : "white"
			});
		}
	});
	
	
	$(document).click(function(){
		var dimentions = document.getElementById("mother").getBoundingClientRect();
		var x1 = dimentions.left;
		var y1 = dimentions.top;
		var x2 = dimentions.right;
		var y2 = dimentions.bottom;
		//alert("("+ x1 +","+ y1 + ")("+ x2 +","+ y2 + ")" )
		//alert("" + event.clientX + "   " + event.clientY);
		if(event.clientX <= x1 ||  event.clientY <= y1 || event.clientX > x2 || event.clientY > y2){
			$("#input").attr("disabled" , "1");
			$("#input").val($("#input").val().trim());
			$("#input").css({
			"background" : "white"
			});
		}
		
	});


});



