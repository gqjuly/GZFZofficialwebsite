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

// 捕捉元素
var _one=document.getElementById('one');
var _two=document.getElementById('two');
var _three=document.getElementById('three');
var _pohontRegion=document.getElementById('pohontRegion');
	// 判断浏览器类型是否支持Class捕捉
	if(document.getElementsByClassName){
		var _input=_pohontRegion.getElementsByClassName('input');
	}else {
		var _input=_pohontRegion.getElementsByTagName('span');
	}
// 设定参数记录时间函数运行次数
var _Rementber=2;
var _Rementber_Cs=0;
// 创建存储变动函数的时间函数变量
var set;
var cs=0;
// 布置变动内时间渐变透明函数
var JianBian=function(en,an,un,put_1,put_2,put_3,color){
	clearInterval(set);
	cs=1;
	set=setInterval(function(){
		cs-=0.1
		en.style.opacity=cs
		if(cs<=0.2){
			// 图片逐渐变透明并且更换图片显示
			en.style.display="none";
			an.style.display="block";
			un.style.display="none";
			// 更换轮播区域背景颜色
			_pohontRegion.style.background=color;
			// span按钮改变颜色
			put_1.style.background="#827d7d";
			put_2.style.background="#fff";
			put_3.style.background="#827d7d";
			// 更换完图片后，所有图片恢复100%透明度
			en.style.opacity=1;
			an.style.opacity=1;
			un.style.opacity=1;
			// 清理定时器
			clearInterval(set);
		}
	},50)
}
// 布置变动函数
var Stra=function(){
	if(_Rementber==1){
			JianBian(_three,_one,_two,_input[2],_input[0],_input[1],"#420002");
			// 改变参数，进行二次判断
			_Rementber=2;
		}else if(_Rementber==2){
			JianBian(_one,_two,_three,_input[0],_input[1],_input[2],"#d8d9db");
			// 改变参数，进行三次判断
			_Rementber=3;
		}else if(_Rementber==3){
			JianBian(_two,_three,_one,_input[1],_input[2],_input[0],"#ebeae8");
			// 改变参数，进行恢复到第一次判断
			_Rementber=1;
		}
}

// 布置鼠标点击span变换图片函数
	// 创建记录鼠标进入前颜色
	var spanBackground;
	// 为span变量添加NUM标记
	for(var i=0;i<_input.length;i++){
		_input[i].num=i+1
	}
	// 创建事件
	var mouse=function(){
		// 遍历创建鼠标点击span标签事件
		for(var un=0;un<_input.length;un++){
			_input[un].onmouseover=function(){
				spanBackground=this.style.background;
				this.style.background="#383636"
			}
			_input[un].onmouseout=function(){
				this.style.background=spanBackground;
			}
			_input[un].onclick=function(eve){
				// 改变循环定时器参数停止循环定时器
				_Rementber_Cs=1;
				// 改变span背景颜色
				for(var cs=0;cs<_input.length;cs++){
					_input[cs].style.background="#827d7d";
				}
				this.style.background="#fff";
				// 设定循环定时器函数为当前span元素的参数
				_Rementber=this.num;
				// 运行变化图片函数
				Stra();
				// 创建一次性定时器在点击变化图片元素时候要3S后在改变函数参数定循环定时器才能运行
				setTimeout(function(){
					_Rementber_Cs=0;
				},5000)
			}
		}
	}

	// 运行鼠标改变轮播函数
	mouse();
	// 布置时间函数
	setInterval(function(){
		if(_Rementber_Cs==0){
			Stra();
		}	
	},5000)

	// 广告轮播函数结束
// ------------------------------------------------------------------------------
// 新闻与简介轮播
// 捕捉元素
var _newRegion=document.getElementById("newRegion");
var _h1=_newRegion.getElementsByTagName("h1");
var _h1_p=document.getElementById("h1_p");
var _jianjieNeiRong=document.getElementById("jianJieNeiRong");
var _newNeiRong=document.getElementById("newNeiRong");
// 获取新闻内容中右侧宽度
var _jianjieNeiRongWidth=_jianjieNeiRong.offsetWidth;
var _newNeiRongWidth=_newNeiRong.offsetWidth;
// 宽度负数化
var _newWidth=_newNeiRongWidth*-1;
var _jianWidth=_jianjieNeiRongWidth*-1;
	// 创建存储走动定时器变量
	var setSet;
	// 创建变量参数设定鼠标进入移出效果
	var setCanShu=0;
	// 创建鼠标移入移出事件
	_newRegion.onmouseover=function(){
		setCanShu=1;
	}
	_newRegion.onmouseout=function(){
		setCanShu=0;
	}
	// 创建运动函数
	var _playWord=function(){
			// 获取新闻内容原始left值
				var jianOld=arguments[0].style.left;
				var newOld=arguments[1].style.left;
				// 将获取的Left值取出整数
				var parJianOld=parseInt(jianOld)-6;
				var parNewOld=parseInt(newOld)-6;
				// 赋予新闻内容新left值
				arguments[0].style.left=parJianOld+"px";
				arguments[1].style.left=parNewOld+"px";
				// 创建图片运动规则
				if(parJianOld<=arguments[2]+185){
					arguments[0].style.left=arguments[4]+"px";
					if(arguments.length>8){
						arguments[6].innerHTML=arguments[8];
						arguments[7].innerHTML=arguments[10];
					}
					clearInterval(arguments[5]);
				}else if(parNewOld<=arguments[3]+185){
					arguments[1].style.left=arguments[4]+"px";
					if(arguments.length>8){
						arguments[6].innerHTML=arguments[9];
						arguments[7].innerHTML=arguments[11];
					}
					clearInterval(arguments[5]);
				}
	}
	// 创建定时器运动
	setInterval(function(){
		clearInterval(setSet);
		// 创建走动定时器
		if(setCanShu==0){
			setSet=setInterval(function(){
						// 调用运动函数
						_playWord(_jianjieNeiRong,_newNeiRong,_jianWidth,_newWidth,1020,setSet,_h1[0],h1_p,"行业新闻","公司简介","Industry news","Company profile")
			},5)
		}
	},7000)

// 创建行业解决方案运动
	// 捕捉元素
	var _AppLiedOne=document.getElementById("AppliedOne");
	var _AppLiedtwo=document.getElementById("Appliedtwo");
	// 获取元素宽度
	var _AppLiedOnePar=_AppLiedOne.offsetWidth;
	var _AppLiedtwoPar=_AppLiedtwo.offsetWidth;
	var _AppLiedOneWidth=_AppLiedOnePar*-1;
	var _AppLiedtwoWidth=_AppLiedtwoPar*-1;
	var _AppCanShu=_AppLiedtwoPar+185;
	// 创建存储运动定时器变量
	var _AppSetIn
	// 创建次数定时器运动更变参数
	var _AppSetCanShu=0;
// 创建鼠标移入移出事件
	// 创建改变定时器参数函数
	var _AppOnmouseoverFunction=function(){
		_AppSetCanShu=1;
	}
	var _AppOnmouseoutFunction=function(){
		_AppSetCanShu=0;
	}
	// 赋值到事件
	_AppLiedOne.onmouseover=function(){
		_AppOnmouseoverFunction();
	}
	_AppLiedOne.onmouseout=function(){
		_AppOnmouseoutFunction();
	}
	_AppLiedtwo.onmouseover=function(){
		_AppOnmouseoverFunction();
	}
	_AppLiedtwo.onmouseout=function(){
		_AppOnmouseoutFunction();
	}
	// 创建次数运动定时器
	setInterval(function(){
			// 再次清理定时器避免重复运行定时器
			clearInterval(_AppSetIn);
			if(_AppSetCanShu==0){
				// 创建走动定时器
			_AppSetIn= setInterval(function(){
					// 调用运动函数
					_playWord(_AppLiedOne,_AppLiedtwo,_AppLiedOneWidth,_AppLiedtwoWidth,_AppCanShu,_AppSetIn)
			},5)
			}
	},4500)

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