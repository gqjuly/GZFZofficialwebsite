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

// 布置图片广告轮播
	var _Csimg=1;
	// 捕捉元素
	var _img=$(".conter a");
	var _span=$(".conter span")
	var _pohontRegion=$("#pohontRegion");
	// 创建存储定时器函数
	var dsq;
	// 布置时间变换定时器
	// 创建定时器存储函数，便于点击选项点立即清除定时器，然后再生成新的定时器
	var _ImgDsq=function(){
		dsq=setInterval(function(){
				// 判断定时器函数是否超过图片数量
				if(_Csimg>2){
					_Csimg=0;
				}
				// 全部图片透明--选定图片0.5s逐渐显示--
				_img.fadeOut().eq(_Csimg).fadeIn(500,function(){
					// 图片显示完成后改变选项点颜色
					_span.css("background","#827d7d").eq(_Csimg).css("background","#fff");
					// 判断显示图片改变背景颜色
					if(_Csimg==1){
						_pohontRegion.css("background",("#d8d9db"));
					}else if(_Csimg==2){
						_pohontRegion.css("background",("f7f7f7"));
					}else if(_Csimg==0){
						_pohontRegion.css("background",("#420002"));
					}
				// 改变轮播参数，便于下次运行
				_Csimg++;
				})
			},4000)
		}
	// 运动定时器函数
	_ImgDsq();
	// 创建选项点事件
	_span.click(function() {
		// 使轮播变化参数改变为选项点当前下标号
		_Csimg=$(this).index()-3;
		// 首先清除定时器
		clearInterval(dsq);
		// 改变为选项点序号显示的图片：
		_img.fadeOut().eq(_Csimg).fadeIn(500,function(){
			// 图片显示完成后改变选项点颜色
			_span.css("background","#827d7d").eq(_Csimg).css("background","#fff");
			// 判断显示图片改变背景颜色
			if(_Csimg==1){
				_pohontRegion.css("background",("#d8d9db"));
			}else if(_Csimg==2){
				_pohontRegion.css("background",("fafafa"));
			}else if(_Csimg==0){
				_pohontRegion.css("background",("#420002"));
			}
			// 改变轮播参数，便于下次运行
			_Csimg++;
		})
		// 重新产生新的定时器，4S后运行
		_ImgDsq();
	});
// 广告轮播函数结束
// ------------------------------------------------------------------------------
// 产品展示
	// 捕捉元素
	// 左右按钮元
	var _left=document.getElementById("left");
	var _right=document.getElementById("right");
	// 产品展示DIV
	var _productPlay=document.getElementById("productPlay");
	var _productPlayDiv=_productPlay.getElementsByTagName("div");
	// 获得产品宽度
	var _productPlayWidth=(_productPlay.offsetWidth);
	var _productPlayWidthFuShu=_productPlayWidth*-1;
	// 创建移动函数
	// 创建初始条件
	var CuShiCanShu=0;
	var CuShi=function(){
		for(var i=0;i<arguments.length-2;i++){
			var argumentsLeft=arguments[i].style.left;
			var parseIntAr=parseInt(argumentsLeft);
			if(parseIntAr>=arguments[arguments.length-2]){
				arguments[i].style.left=arguments[arguments.length-1]+'px'
			}
		}
	}
	var LeftCuShi=function(){
		for(var i=0;i<arguments.length-2;i++){
			var argumentsLeft=arguments[i].style.left;
			var parseIntAr=parseInt(argumentsLeft);
			if(parseIntAr<=arguments[arguments.length-2]){
				arguments[i].style.left=arguments[arguments.length-1]+'px'
			}
		}
	}
	// 创建判断移动定时器到达条件参数
	var LeftPanDuan=function(){
		var ProOld=arguments[0].style.left;
		var ProOldTwo=arguments[1].style.left;
		var ParseInProOld=parseInt(ProOld);
		var ParseInProOldTwo=parseInt(ProOldTwo);
		// 判断是否到达0处
		if(ParseInProOld<=arguments[arguments.length-1]){
			arguments[0].style.left=arguments[arguments.length-2]+'px';
			_productPlaySetCanShu=0;
			clearInterval(_productPlaySet);
		}else if(ParseInProOldTwo<=arguments[arguments.length-1]){
			arguments[1].style.left=arguments[arguments.length-2]+'px';
			_productPlaySetCanShu=0;
			clearInterval(_productPlaySet);
		}
	}
	var RightPanDuan=function(){
		var OldPro=arguments[0].style.left;
		var OldProTwo=arguments[1].style.left;
		// 获取整数
		var ParseInOldPro=parseInt(OldPro);
		var ParseInOldProTwo=parseInt(OldProTwo);
		// 判断是否到达0处
		if(ParseInOldPro>=arguments[arguments.length-1]){
			arguments[0].style.left=arguments[arguments.length-2]+'px';
			_productPlaySetCanShu=0;
			clearInterval(_productPlaySetset);
		}else if(ParseInOldProTwo>=arguments[arguments.length-1]){
			arguments[1].style.left=arguments[arguments.length-2]+'px';
			_productPlaySetCanShu=0;
			clearInterval(_productPlaySetset);
		}
	}
	// 创建移动函数
	var _productPlayFunction=function(){
		// 改变执行条件参数
		_productPlaySetCanShu=1;
		// 获取元素原始的left值
		var OldProductOne=arguments[0].style.left;
		var OldProductTwo=arguments[1].style.left;
		// 取整
		var ParOld=parseInt(OldProductOne)+arguments[arguments.length-1];
		var ParOldTwo=parseInt(OldProductTwo)+arguments[arguments.length-1];
		// 赋值到新left
		arguments[0].style.left=ParOld+'px';
		arguments[1].style.left=ParOldTwo+'px';

	}
	// 创建存储定时器的变量
	var _productPlaySet;
	var _productPlaySetset;
	// 创建执行函数的条件参数
	var _productPlaySetCanShu=0;
	// 创建点击事件
	_left.onclick=function(){
			LeftCuShi(_productPlayDiv[0],_productPlayDiv[1],_productPlayWidthFuShu,_productPlayWidth)
			if(_productPlaySetCanShu==0){
				_productPlaySet=setInterval(function(){
					_productPlayFunction(_productPlayDiv[0],_productPlayDiv[1],-5);
					LeftPanDuan(_productPlayDiv[0],_productPlayDiv[1],_productPlayWidth,_productPlayWidthFuShu);
				},5)
			}
		}
	_right.onclick=function(){
			CuShi(_productPlayDiv[0],_productPlayDiv[1],_productPlayWidth,_productPlayWidthFuShu)
			if(_productPlaySetCanShu==0){
				_productPlaySetset=setInterval(function(){
					_productPlayFunction(_productPlayDiv[0],_productPlayDiv[1],+5)
					RightPanDuan(_productPlayDiv[0],_productPlayDiv[1],_productPlayWidthFuShu,_productPlayWidth)
				},5)
			}
		}
		$("#Adv").css("display","none")