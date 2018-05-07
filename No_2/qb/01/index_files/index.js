 $(function(){



            // 答案数据

            var json = [

                "15岁-25岁长斑1-4年A.试过很多方法，但都不理想",

                "18岁以下10斤以下一直想减肥，但没有行动",

                "18岁以下10斤以下成功了，还想再瘦",

                "18岁以下10-20斤试过减肥，但体重反弹",

                "18岁以下10-20斤一直想减肥，但没有行动",

                "18岁以下10-20斤成功了，还想再瘦",

                "18岁以下20斤以上试过减肥，但体重反弹",

                "18岁以下20斤以上一直想减肥，但没有行动",

                "18岁以下20斤以上成功了，还想再瘦",

                "15岁-25岁10斤以下试过减肥，但体重反弹",

                "15岁-25岁10斤以下一直想减肥，但没有行动",

                "15岁-25岁10斤以下成功了，还想再瘦",

                "15岁-25岁10-20斤试过减肥，但体重反弹",

                "15岁-25岁10-20斤一直想减肥，但没有行动",

                "15岁-25岁10-20斤成功了，还想再瘦",

                "15岁-25岁20斤以上试过减肥，但体重反弹",

                "15岁-25岁20斤以上一直想减肥，但没有行动",

                "15岁-25岁20斤以上成功了，还想再瘦",

                "25岁以上10斤以下试过减肥，但体重反弹",

                "25岁以上10斤以下一直想减肥，但没有行动",

                "25岁以上10斤以下成功了，还想再瘦",

                "25岁以上10-20斤试过减肥，但体重反弹",

                "25岁以上10-20斤一直想减肥，但没有行动",

                "25岁以上10-20斤成功了，还想再瘦",

                "25岁以上20斤以上试过减肥，但体重反弹",

                "25岁以上20斤以上一直想减肥，但没有行动",

                "25岁以上20斤以上成功了，还想再瘦"

            ];

            // 第一题

            var question_1='',question_2='',question_3='',Last_question='';

            $("#first li").on("click",function(){

                $(this).addClass("on").siblings().removeClass("on");

                question_1 = $(this).html();

                mySwiper.slideNext();

            });



            // 第二题

            $("#second li").on("click",function(){

                $(this).addClass("on").siblings().removeClass("on");

                question_2 = $(this).html();

                mySwiper.slideNext();

            });



            // 第三题

            $("#third li").on("click",function(){

                $(this).addClass("on").siblings().removeClass("on");

                question_3 = $(this).html();

                question_3 = question_3.replace(/[A-Z]+\./g,"");



            });



            // 点击提交弹出对应编号

            $("#submit_btn").on("click",function(){

                if(question_3==""){

                    alert("3.你以前祛斑过吗？");

                    return;

                }

                Last_question = question_1+question_2+question_3;

                Last_question = $.trim(Last_question);

                Last_questionIndex = $.inArray(Last_question,json) + 1;

                $("#Mask .Mask_txt h3 span,#Mask .Mask_txt .num").html(Last_questionIndex);

                $("#Mask").fadeIn(400);

            });



            // 点击关闭按钮关闭遮罩层并且将测试返回第一题

            $("#Mask .close_Mask").on("click",function(){

                $("#Mask").fadeOut(400);

                mySwiper.slideTo(0);

            });



            // 点击上一题

            $(".prev").on("click",function(){

                mySwiper.slidePrev();

            });





            // 导航切换

            $(".menu li").on("click",function(){

                $(this).addClass("on").siblings().removeClass("on");

                var TabIndex = $(this).index();

                if(TabIndex == 0){

                    $("#case").fadeIn(400);

                    $("#comment").fadeOut(400);

                }else{

                    $("#comment").fadeIn(400);

                    $("#case").fadeOut(400);

                }

            });



            var isPlay = false;



            // 点击播放语音

            $(".voice").click(function(){

                if(!isPlay){

                    AudioPlay($(this),".voice_pic");

                    isPlay = true;

                }else{

                    AudioPause($(this),".voice_pic");

                    isPlay = false;

                }

            });



            $(".M_voice").on("click",function(){

                if(!isPlay){

                    AudioPlay($(this),".Middle_voice");

                    isPlay = true;

                }else{

                    AudioPause($(this),".Middle_voice");

                    isPlay = false;

                }

            });



            $(".audio_bottom").on("click",function(){

                if(!isPlay){

                    AudioPlay($(this),".bottom_voice");

                    isPlay = true;

                }else{

                    AudioPause($(this),".bottom_voice");

                    isPlay = false;

                }

            });



            // 音频播放函数

            function AudioPlay(obj,obj_voice){

                obj.children("audio").get(0).play();

                obj.children("em,i").fadeOut();

                obj.children(obj_voice).addClass("on");

            }

            // 音频暂停且当前时间设为0函数

            function AudioPause(obj,obj_voice){

                obj.children("audio").get(0).pause();

                obj.children("audio").get(0).currentTime = 0;

                obj.children(obj_voice).removeClass("on");

            }



            // 点赞

            var isLike = false;

            $(".top_b_like").on("click",function(){

                if(!isLike){

                    $(this).children("img").attr("src","images/111.png");

                    var LikeNum = parseInt($(this).children("span").html());

                    $(this).children("span").html(LikeNum + 1);

                    isLike = true;

                }else{

                    $(this).children("img").attr("src","images/top_b_like.png");

                    var LikeNum = parseInt($(this).children("span").html());

                    $(this).children("span").html(LikeNum - 1);

                    isLike = false;

                }

            });





            // 点击评论区小图放大到整屏显示

            $(".user_Pic li").on("click",function(){        

                var PicLength = $(this).parent().children('li').length;

                $(this).parent().children('li').each(function(){

                    var PicId = $(this).attr('id');

                    $("#thumb .swiper-container .swiper-wrapper").append("<div class='swiper-slide'><img src='css/.cn/test/zj/css/"+ PicId +".jpg'/></div>");

                });

                $("#thumb").fadeIn(400);

            });



            $("#thumb .thumb_close").click(function(){

                $("#thumb").fadeOut(400);

                $("#thumb .swiper-container .swiper-wrapper").html('');

            });



            $(".qq_Mask .close_Mask").click(function(){

                $(".qq_Mask").fadeOut(400);

            });



            $(".top_r,.bottom_btn,.Link,.top_l").click(function(){

                $(".qq_Mask").fadeIn(400);

            }); 

        });