// JavaScript Document

// 获取轮播元素
var _ImgTv_img= $(".ImgTv  .IMG");
var _box=$(".ImgTv .box img");
// 设置事件
 	for(var i=0;i<_box.length;i++){
 		_box[i].num=i;
 		_box[i].onclick=function(){
 			$(".ImgTv  .IMG").css("display","none");
 			$(".ImgTv .box img").css("border","none");
 			$(".ImgTv .IMG:eq("+this.num+")").css("display","block");
 			$(".ImgTv .box img:eq("+this.num+")").css("border","1px solid black")
 		}
 	}

