window.onload = function(e){ 
    var obj = $(this);
	removeOtherWeeks(obj);
}

function removeOtherWeeks(obj){
            var today = new Date();
            today = formatDate(today.getFullYear(), today.getMonth(), today.getDate());
            $("#"+today, obj).parentNode.addClass("today");
        };
		
