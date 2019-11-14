window.onload=function(){
	$('.loading').css("height",document.documentElement.clientHeight)
	$('.page').css("height",document.documentElement.clientHeight*2)
	
	$('.loading .loadmubu .jiantou .whitePng').each(function(index,item){
		$(item).css({"opacity":'1'})	
	})
}
var loadnum = 0;
var key = true;
$(document).click(function(){
	console.log(loadnum)
	if(!key){
		return;
	}
	key =false;
	loadnum++;
	if(loadnum==1){
		animateFnOne()	
	}else if(loadnum == 2){
		animateFnTwo()
	}else if(loadnum == 3){
		animateFnThree()
	}else if(loadnum == 4){
		animateFnFour()
	}else if(loadnum == 5){
		animateFnFive()
	}else if(loadnum == 6){
		animateFnSix()
	}else if(loadnum == 7){
		animateFnSeven()
	}
	
})
function animateFnOne(){	
	$('.loading .loadmubu .jiantou .whitePng')
	.css({'animation':'whitePng 5s linear 0s both','-ms-animation':'whitePng 5s linear 0s both'})

	$('.loading .loadmubu2 .sliver').each(function(index,item){
		var time = index*0.2;
		$(item).css({'animation':'sliver 1s linear '+(4+time)+'s both'});
		$(item).find('.line')
		.css({'animation':'line 3s linear '+(5.5+time)+'s both'});
		$('.loading .loadmubu2 .sliver>.img').css({'opacity':'1','transition':'opacity 0.1s ease '+(7.5+time)+'s'})
	})	
	setTimeout(function(){
		key=true;
	},5000)
}
function animateFnTwo(){
	$('.loading .loadmubu3 .outer1_1').css({"top":'0%'})
	$('.loading .loadmubu3 .outer1_2').css({'bottom':'0%'})
	$('.loading .loadmubu3 .inner1').css({'opacity':'1'})
	$('.loading .loadmubu3 .outer2_1').css({"top":'0%'})
	$('.loading .loadmubu3 .outer2_2').css({'bottom':'0%'})
	$('.loading .loadmubu3 .outer3').css({"left":'0'})
	setTimeout(function(){
		key=true;
	},3000)	
}
function animateFnThree(){
	$('.loading .loadmubu4 .ball').css({'display':'block','animation':'ball 3s ease both'})
	$('.loading .loadmubu4 .ball .fenge1').css({'animation':'fenge 4s ease 2.2s both'})
	$('.loading .loadmubu4 .ball .fenge2').css({'animation':'fenge 4s ease 2.2s both'})
	setTimeout(function(){
		$('.loading .loadmubu4 .ball .twoballs_1').css({'animation':'twoballs1 5s ease  both 2s'})
		$('.loading .loadmubu4 .ball .twoballs_2').css({'animation':'twoballs2 1s ease  both 2s'})
	},3000)
	setTimeout(function(){
		key=true;
	},3000)	
}

function animateFnFour(){
	$('.blood').css('display','block')
	$(document).click(function(e){
		// 当血条变为0时
		if($('.blood')[0].value <=20){
			$('.loading .loadmubu4 .ball .twoballs_1').css({'animation':'twoballs  1s ease 0s both'})
			$('.blood').css('display','none')
			setTimeout(function(){
				key=true;
			},1000)
		}
		var e = window.event || e;
		var x = e.pageX - 30;
		var y = e.pageY - 30;
		$('.blood')[0].value -=20;
		$('.loading .loadmubu4 .ball .twoballs').animate({"top":'55%','opacity':'0.2'},100,function(){
			$(this).css({'top':"50%",'opacity':'1'})
		})
		var span  =$('<span class="bullet"></span>')
		.appendTo($('.loadmubu5'))
		.css({"left":x+'px',"top":y+'px'}).animate({'opacity':'0'},1000)	
	
		
	})	
}

function animateFnFive(){
	$('.loading .loadmubu6 .tran>div:nth-child(1)').css('left','0')
	$('.loading .loadmubu6 .tran>div:nth-child(2)').css('right','0')
	$('.loading .loadmubu6 .tran').css('background','#4a3e55')
	setTimeout(function(){
		$('.loading .loadmubu6 .tran>div:nth-child(1)').css('left','-50%')
		$('.loading .loadmubu6 .tran>div:nth-child(2)').css('right','-50%')
		$('.loading .loadmubu6 .tran .Tear>div:nth-child(1)').css("top",'660px')
		$('.loading .loadmubu6 .tran .Tear>div:nth-child(2)').css("top",'640px')
		$('.loading .loadmubu6 .tran .Tear>div:nth-child(3)').css("top",'660px')
		$('.loading .loadmubu6 .tran .Tear>div:nth-child(4)').css("top",'640px')
		$('.loading .loadmubu6 .tran .Tear>div:nth-child(5)').css("top",'660px')
		$('.loading .loadmubu6 .tran .tearbg').css('display','block');
		setTimeout(function(){
			$('.loading .loadmubu6 .tran').css('backgroundColor','#a9cbc6')
			$('.loading .loadmubu6 .tran .tearbg .dashedcir').css('transform','scale(1.0) rotate(3600deg)')
			$('.loading .loadmubu6 .tran .tearbg .dashedcir .linecir')
			.css({'transform':'rotate(-1800deg)','width':'2000px','marginLeft':'-1000px'})
		},5000)
	},1500)
	setTimeout(function(){
		$('.loading>div').each(function(index,item){
			if(index<=5){
				$(item).css('display','none')
			}
		})
		key=true;
	},3000)
}	

function animateFnSix(){
	$('.loadmubu7').css({'background':'#a9cbc6','display':'block'})
	$('.loadmubu7 .photo_1').css({'transform':'scale(1.0)','opacity':'1'})
	$('.loadmubu7 .photo_2').css({'transform':'scale(0.8)','opacity':'1'})
	$('.loadmubu7 .photo_3').css({'transform':'scale(0.8)','opacity':'1'})
	$('.loadmubu7 .photo_4').css({'transform':'scale(1.1)','opacity':'1'})
	$('.loadmubu7 .trancir').css({'animation': 'trancir 5s ease   7s  both'})
	setTimeout(function(){		
		key=true;
	},3000)	
}

function animateFnSeven(){
	$('.loading .loadmubu8').css('display',"block")
	
	$('.loading .loadmubu8 .topPhone .outerPhone .headP').each(function(index,item){
		$(item).css("animation",'outerCir 3s ease both '+(index*1)+'s')
		$('.loading .loadmubu8 .topPhone .outerPhone .outerCir').eq(index).css("animation",'outerCir 3s ease '+(index*1)+'s both');
	})
	$('.loading .loadmubu8 .topPhone .outerPhone .span1').delay(3000).animate({"opacity":'1'});
	$('.loading .loadmubu8 .topPhone .outerPhone .span2').delay(3000).animate({"opacity":'1'});
	$('.loading .loadmubu8 .touch').delay(3000).fadeIn(1000)
	$('.loading .loadmubu8 .touch .call').click(function(){
		$(this).css('animation','touch 1s ease')	
		setTimeout(function(){
			animateFnEight()
		},2000)
	})
}

function animateFnEight(){
	$('.loading .loadmubu9').css('display','block')
	$('.loading .loadmubu9 .threehead .head').each(function(index,item){
		$(item).delay(index*1000).animate({'opacity':'1'},1000);
		$(this).find('img').delay(index*1000+500).animate({'top':'0','left':'0'},1000)			
	})
	$('.loading .loadmubu9 .hangup').css({"transform":'scale(1)'})
	$('.loading .loadmubu9 .hangup>img:nth-child(2)').click(function(){
		$(this).css("animation",'hangup 1s ease both');
		$('.loading .loadmubu10').delay(2000).animate({"top":'0px'},1000);
		setTimeout(function(){
			animateFnNine()
		},3000)
	})
}


function animateFnNine(){
	$('.loading .loadmubu10 .round4 .roundblock').each(function(index,item){
		$(item).css("animation",'roundblock 10s linear '+index*2+'s both');	
		$(this).parent().parent().css("animation",'loadmubu10 18s ease both')
		$('.loadmubu10 .end').delay(15000).animate({'opacity':'1'},500);
		$(document).click(function(){
			$('.loading').css('display','none')
		})
	})
}