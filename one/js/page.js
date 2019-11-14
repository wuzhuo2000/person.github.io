var bodyWidth =document.documentElement.clientWidth;
var bodyHeight =document.documentElement.clientHeight;
window.onresize=function(){
	bodyWidth = document.documentElement.clientWidth
	bodyHeight = document.documentElement.clientHeight
	$('.loading').css("height",bodyHeight)
	$('.page>div').css("height",bodyHeight)				
}	
$('.loading').css("height",bodyHeight)			
$('.page>div').css("height",bodyHeight)	
console.log(bodyHeight)		
if(myBrowser() =='Chrome'){
	for (var i = 0; i < 100; i++) {
		var mofang = $('<div class="mofang"></div>');
		for (var j  = 0; j < 4; j++) {
			$('<div class="mian"></div>').appendTo(mofang)
		}
		mofang.appendTo($('.sub'))
	}
	$('.sub .mofang').each(function(index,item){
		$(item).css({'width':bodyWidth/10+'px','height':bodyHeight/10+'px'})
		$(item).children()
		.css({'backgroundPosition':-index%10*(bodyWidth/10)+'px '+-Math.floor(index/10)*(bodyHeight/10)+'px'})
		$(item).children().each(function(ind,it){
			$(it).css('backgroundImage','url(images/lol'+(ind+1)+'.jpg)')				
		})
	})	
}else{
	$('.page1').css({'width':'400%'})
	for (var i = 0; i < 4; i++) {
		$("<div class='ddd'></div>")
		.css({'height':'100%','width':'25%','background-image':'url(images/lol'+(i+1)+'.jpg)','float':'left'})
		.appendTo(".page1 .sub")
		}
}
var n = 0;
var dddnum = 0;	
var mofangis = true;
$('.page1').click(function(){
	if(!mofangis){
		return;
	}
	mofangis = false;
	if(myBrowser() =='Chrome'){
		n-=90;
		$('.sub .mofang').each(function(index){
			$(this).css({"transform":'rotateY('+n+'deg)','transition':'all 1s ease '+Math.floor(index/10)*0.2+'s'})
		})
	}else{				
		if(dddnum>=3){
			dddnum=-1;
		}
		dddnum++;	
		$('.page1 .sub').animate({'left':-dddnum*25+'%'},1000)
			
	}
		setTimeout(function(){
			mofangis = true;
		},3000)
})		
var x=0;
var isWheel = true;
$(document).mousewheel(function(e){
	if(!isWheel){
		return;
	}
	isWheel = false;
	if(e.deltaY == 1){
		x--;		
		if(x<0){
			x=0;
		}	
	}else{
		x++;
	}
	if(x == 2){
		cardChange()
	}
	$('.page').animate({'top':-x*100+'%'})
	setTimeout(function(){
		isWheel = true;
	},1000)
})

// 卡牌效果
function cardChange(){
	$('.page2>.wutai>.card').each(function(index,item){
		$(item).addClass('card_'+(index+1)).css({"transition":"all 2s ease "+index*0.5+'s','z-index':index*-1})
	})	
	$('.page2>.wutai>.card').click(function(){
		$('.page2>.wutai>.card').prop('class','card')
		$('.page2>.wutai>.card').each(function(index,item){
		$(item).css({"transition":"all 2s ease "+index*1+'s','z-index':index*1})
	})
	})
}
console.log(myBrowser())
//判断是否是谷歌浏览器
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串   
    var isChrome = userAgent.indexOf("Chrome") > -1
            && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

	if (isChrome) {
	    return "Chrome";
	}else{
		return "IE"
	}
    
}