    var weixin="";
    $.ajax({
	async: false,
	type : "GET",
	url : './wxh/weixin.txt',
	dataType : 'text',
    	success:function(txt){
    		weixin=txt.split(",");
    	},
    	error:function(){
    		alert("失败")
    	}
    })
    var today = new Date();
    console.log(today);
    var h = today.getHours();
	var m = today.getMinutes();
	var s=today.getSeconds();
	var mc = h*3600 + m*60 + s +1;	
	var WXHn = mc%30;
	var Sum = 0;
	mc = mc - WXHn;
	Sum = mc/30;
	WXHn = (Sum)%weixin.length;
	var stxlwx = weixin[WXHn];
	var wxImg="<img src='./wxh/opc/"+weixin[WXHn]+".jpg' alt='' width='80%' style='display:block;margin:auto;'/>"
	$(".weixinhao").text(stxlwx);
	$(".wxImg").html(wxImg);