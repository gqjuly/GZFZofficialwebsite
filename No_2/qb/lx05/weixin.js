// JavaScript Document
var One_Img='<img src="index_files/img_hjnk.jpg" alt="" style="width:100%;margin:auto;">';
var wechat_num='';
var wechat_pic='';
$.ajax({
	async: false,
	type : "GET",
	url : 'weixin.txt',
	dataType : 'text',
	success : function(response) {
		  var arr_wx = response.split(',')
		  var wx_index = Math.floor((Math.random() * arr_wx.length));
		  wechat_num = arr_wx[wx_index];
		  var img = arr_wx[wx_index]+".jpg";
		  wechat_pic = "<img width='80%' src='qrcode/"+img+"' style='margin:auto;display:block;'>";
		  console.log('wechat_num:'+wechat_num);
		  console.log('wechat_pic:'+wechat_pic);
	}
});