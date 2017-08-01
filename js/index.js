$(function(){
	// 首页轮播图的设置
	var swiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		direction:"vertical",
		mousewheelControl:true,
		  onInit:function(swiper){//Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画			
			},             
        onSlideChangeEnd:function(swiper){
        	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            // 导航条的向下滑动效果
            switch(swiper.activeIndex){
            	case 0:
            	$(".nav").hide();
            	$(".nav").slideDown(500);
            	$(".nav").css({
                    "backgroundColor":"#d7dade",
            	    "color":"black"
            	     })
            	break;
            	case 1:
            	$(".nav").hide();
            	$(".nav").slideDown(500);
            	$(".nav").css({
                    "backgroundColor":"rgba(0, 0, 0, 0.3)",
            	    "color":"black"
            	     });
            	break;
            	case 2:
            	$(".nav").hide();
            	$(".nav").slideDown(500);
            	break;
            	case 3:
            	$(".nav").hide();
            	$(".nav").slideDown(500);
            	break;
            	case 4:
            	$(".nav").hide();
            	$(".nav").slideDown(500);
            	break;
            }
        }
	});
});








