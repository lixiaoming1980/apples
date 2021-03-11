// JavaScript Document
var mySwiper=new Swiper('#div2',{
		loop:true,
		effect:'slide',
		autoplay:1000,
		pagination: '.pagination',//分页
		autoplayDisableOnInteraction:false,
})

window.onresize=window.onload=function(){
	var h=$("#banner-img").height();
	//alert(h);
	$(".banner,#op1,#op2,#div2").css("height",h);
	
	var w=$(document).width();
	/*底部菜单初始化*/
	if(w<1000){
		//alert(w)
		$(".main ul").css("display","none").prev("span").css("background","url(img/ioc1.png)").css("background-repeat","no-repeat").css("background-position","right center");
	}else{
		$(".main ul").css("display","block")//.prev("span").css("background","none");//底部菜单放大缩小隐藏
		$(".main span").css("background","none");
	}

}
/*底部菜单*/
$(document).ready(function(){
	//var w=$(document).width();
	//$(".main span").css("background","url(img/ioc1.png)")
    $(".main span").click(
		function(){
			var screenwidth=$(document).width();
			if(screenwidth<1000){
			var ul=$(this).next("ul");
			if(ul.css("display")=="none"){
				ul.slideDown()
				$(this).css("background","url(img/ioc2.png)").css("background-repeat","no-repeat").css("background-position","center right");
				}else{
				$(this).css("background","url(img/ioc1.png)").css("background-repeat","no-repeat").css("background-position","center right");
				ul.slideUp()
				}
			//ul.slideToggle();
			}
		}
	)
});


