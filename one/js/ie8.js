window.onload=function(){
	$('.loading').css("height",document.documentElement.clientHeight)
	$('.page').css("height",document.documentElement.clientHeight*2)
	// setTimeout(function(){
	// 	$('.loading').animate({'opacity':'0'},1000,function(){
	// 		$(this).css('display','none')
	// 	})
	// },4000)
	$('.loading .loadmubu .jiantou .whitePng').each(function(index,item){
		$(item).css({"opacity":'1'})	
	})
}
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
var loadnum = 0;
var key = true;


$(document).click(function(){
	// if(!key){
		// return;
	// }
	// key =false;
	loadnum++;
	if(loadnum==2){
		$('.loadmubu').animate({'top':'0'},1000)
		one()
	}else if(loadnum == 4){
		two()
	}else if(loadnum == 6){
		three()
	}else if(loadnum == 8){
		four()
	}else if(loadnum == 10){
		five()
	}
	console.log(loadnum)
	
})
function one(){
	$('.loading .loadmubu .jiantou .whitePng').each(function(index,item){
		$(item).css({'background-image':'url(./images/loadImg/'+(index+1)+'.png)'});
	})
}
function two(){
	$('.loading .loadmubu2>div:nth-child(1)').css({'background':'#829cf4'})
	$('.loading .loadmubu2>div:nth-child(2)').css({'background':'#817487'})
	$('.loading .loadmubu2>div:nth-child(3)').css({'background':'#483D8B'})
	$('.loading .loadmubu2>div:nth-child(4)').css({'background':'#3B3B43'})
	$('.loading .loadmubu2 .sliver:nth-child(2)>.img,.loading .loadmubu2 .sliver:nth-child(4)>.img').css("margin-left",'75%')
	$('.loading .loadmubu2 .sliver').each(function(index,item){
		var time = index*0.2;
		$(item).delay(index*0.5*1000).animate({'left':0})
	})	
}
function three(){
	$('.loading .loadmubu3 .outer1_1').delay(500).animate({"top":'0%'},1000)
	$('.loading .loadmubu3 .outer1_2').delay(500).animate({'bottom':'0%'},1000)
	$('.loading .loadmubu3 .inner1').delay(500).animate({'top':'421px'},1000)
	$('.loading .loadmubu3 .outer2_1').delay(2000).animate({"top":'0%'},1000)
	$('.loading .loadmubu3 .outer2_2').delay(2000).animate({'bottom':'0%'},1000)
	$('.loading .loadmubu3 .outer3').each(function(index,item){
		$(item).delay(index*0.5*1000+3000).animate({'left':'0'},1000)
	})
}
function four(){
	$('.loading .loadmubu4').animate({'top':'0'},1000)
}
function five(){
	$('.loading .loadmubu4').animate({'top':'100%'},1000)
	$('.loading .loadmubu7').animate({'top':'0'},1000)
	$('.loading .loadmubu7 .photo').each(function(index,item){
		$(item).delay(index*1000+1000).animate({'top':'50%'},1000)
	})
	$('.loading .loadmubu8').delay(6000).animate({'left':'0'},1000)
	$('.loading .loadmubu9').delay(7000).animate({'left':'0'},1000)
	setTimeout(function(){
		$('.loading .loadmubu9 .threehead>.head_1 img').delay(500).animate({'top':0},1000)
		$('.loading .loadmubu9 .threehead>.head_2 img').delay(100).animate({'left':0},1000)
		$('.loading .loadmubu9 .threehead>.head_3 img').delay(1500).animate({'left':0},1000)
		$('.hangup').click(function(){
			$('.loading .loadmubu9').animate({'top':'-100%'},1000)
			$('.loading').delay(1000).animate({'top':'-300%'},1000)
		})
	},8000)
}

//page1
for (var i = 0; i < 4; i++) {
	$("<div class='ddd'></div>")
	.css({'height':'100%','width':'25%','background-image':'url(images/lol'+(i+1)+'.jpg)','display':'inline-block'})
	.appendTo(".page1 .sub")
}
var dddnum = 0;
$('.ddd').click(function(){
	dddnum--;
	$(this).parent().animate({'left':dddnum*50+'%'},1000)
	if(dddnum<=-6){
		dddnum=2;
	}
})

// 卡牌效果
$('.page2').click(function(){
	$('.page2 .card').each(function(index,item){
		$(item).delay(index*300).animate({"height":'350px','width':'200px','left':index%6*300+200+'px','top':parseInt(index/6)*450+300+'px'},1000)
		console.log(item)
		$(item).find('img').delay(index*300).animate({'width':'180px','height':'330px'},1000)
	})
})

