
var $demo = $('#demo'),
    $demoli = $demo.find("li"),
    $select=$("#js_select"),
    $bshu=$(".js_bshu"),
    $gobuy=$("#js_gobuy"),
    $vodie=$("#js_vodie"),
    _this=null,
    indexi=0,
    timer=0;
    
(function initConfig(){
    execJs();
})();

	
function execJs() {
	/*选择磅数*/
	function selectbs(){

		var $price=$(".price");

		$select.show();
		$select.find("li").hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
		});
		$select.find("li").click(function(){
			var val=$(this).data("bsn");
			var price=$(this).data("price");
			$bshu.text($(this).text());
			$bshu.data("num",val);
			$price.data("price",price);
			$price.find("i").html(price);
			$select.hide();
		});

	}

	/*计算总金额*/
	function counts(){
		var allAmount=$(".price").data("price");
		alert("总金额："+allAmount);
	}
	
	/*动画*/
	
	
	function scrollFun(){
		
		//$(".main").css("position","relative");

		var top = $(".main").offset().top;     //$(window).height()/2
		var scrollTop = $(window).scrollTop();

		//console.log(scrollTop);
		if(scrollTop>500){
			$(".Float").fadeIn(10);
		}else if(scrollTop<300){
			$(".Float").fadeOut(10);
		}else{
			$(".Float").fadeOut(10);
		}
	}
	
	


	//事件绑定
	(function bindEvent(){
		
		$(window).bind("load scroll",scrollFun);
		
		setTimeout(function(){

			$(".video").css("background","none");
		},1000)
		$gobuy.hover(function(){
			$(this).toggleClass("on");
		}).mousedown(function(){
			$(this).addClass("down");
		}).mouseout(function(){
			$(this).removeClass("down");
		});

		$bshu.click(function(){
			selectbs();
			return false;
		});

		$gobuy.click(function(){
			counts();
		});
		
		$(document).click(function(){
			$select.hide();
			return false;
		});

		$(".Float").click(function(){
			$(window).scrollTop(466);
		});

    })();
}





/*通用弹框*/
$.Dialog_09 = function (msg) {

    try {
        $("div[class='tc-con_09']").remove();
        $("div[class='tc-cover_09']").remove();
        $cover = $("<div class='tc-cover_09'id='myCover_09'>&nbsp;</div>");
        $main = $("<div class=\"tc-con_09\" id='maximPanel_09'></div>");
        $close = $("<a href='javascript:void(0);' class='close_09'>关闭</a>");
        $content = $("<div  class='tc-con-1_09'></div>");
        $player = $("<div id='flv_player'></div>");
        $content.html($player);
        $main.append($close);
        $main.append($content);
         $(document.body).append($cover);
        $(document.body).append($main);

        $main.show(400);
        $main.focus();
        $(".tc-con").css({"margin-left":-($(".tc-con_09").innerWidth()/2),"margin-top":-($(".tc-con_9").innerHeight()/2)});

       //document.onmousewheel = null;
        //$cover.height($(document.body).height());
        $close.click(function () {
            $main.hide(300);
            $main.remove();
            $cover.remove();
            $(".tc_video").hide();
            //document.onmousewheel = wheel;
        });
    }
    catch (ex) { alert(ex); }
}




