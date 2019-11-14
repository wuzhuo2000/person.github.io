$('.page3 .cont').click(function(){
	$(this).animate({"width":'20%'},1000).siblings().animate({'width':'7.5%'},1000)
	$(this).children().eq(1).css({'display':'block'})
	$(this).siblings().find('.gif').css({'display':'none'})

})