var locati=location.href;
var AT=locati.lastIndexOf("/");
if(AT!=-1){
	locati=locati.slice(0,AT-1);
	locati= locati+"/tz/index.html";
}else{
	locati= locati+"/tz/index.html";
}
$.ajax({
	url: 'http://211.159.165.148/ticke/wxOPENwap.php',
	type: 'GET',
	data: {url: locati},
	success:function(data){
		$('.open').attr("href",data);
	}
})
