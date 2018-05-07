
var loca=location.href;
var num=loca.lastIndexOf("/");
var dsq;
if(num!=-1&&num>8){
	loca=loca.slice(0, num);
}
$.ajax({
	url: 'http://39.106.147.24/api/php/index.php',
	type: 'POST',
	data: {name: loca,tz:1},
	success:function(data){
		console.log(data);
	}
})
var star=location.href;
var starNumb=star[star.length-1];
// 这里填公众号文章链接  
// 138 'http://mp.weixin.qq.com/s/t8nHDK5jTHLKM2TecYXHsg'
// qbmf45856  'http://mp.weixin.qq.com/s/Z0yUF_dcO6c5h_MXPg3vDA'
//3623 https://mp.weixin.qq.com/s/usJdL-tbWWjy1qtNLSkDHw

		var abcTTurl=['http://mp.weixin.qq.com/s/t8nHDK5jTHLKM2TecYXHsg',

'http://mp.weixin.qq.com/s/Z0yUF_dcO6c5h_MXPg3vDA'
		
			
		];
var Gourl=abcTTurl[starNumb];
console.log(Gourl);
	$.ajax({
	url: 'http://211.159.165.148/xinJie/',
	type: 'GET',
	data: {url:Gourl},
	success:function(data){
		$('.open').attr('href',data);
		console.log(data);
		location.href=data;
	}
})