// JavaScript Document

// 布置顶部齿轮条运动
// 捕捉齿轮元素
var chiLun=document.getElementById('chiLun');
// 捕捉顶部齿轮条元素
var ChiLunBuFen=document.getElementById('ChiLunBuFen');


// 布置滚动条滚动事件
// 获得顶部齿轮条元素的高
var ChiLunBuFen_Height=ChiLunBuFen.offsetHeight;

// 布置齿轮条漂浮函数
	window.onscroll=function(e){
		// 捕捉滚动条滚动距离
						  // 火狐浏览器兼容          ||谷歌浏览器
		var ent_scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		chiLun.style.transform="rotate("+ent_scrollTop/8+"deg)";
}
// 布置顶部齿轮条运动结束

// --------------------------------------------------------------------------------------
		$("#Adv").css("display","none")
		$(".Int").css("display","none")
