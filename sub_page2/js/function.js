$(function(){
    //header>nav UI
  const $gnb = $('header > nav > .gnb>li');
  const $search = $('header > .snb > .snb_title>a')
  
  $gnb.on('mouseover', function(){
    $(this).children('.lnb').stop().fadeIn(200);
  });

  $gnb.on('mouseout', function(){
    $(this).children('.lnb').stop().fadeOut(200);
  });

  $search.on('click', function(evt){
    evt.preventDefault();
    $(this).parent().toggleClass('on')
  });  //end of header>nav UI

  //section#content >mnu클릭이벤트
  const $mnu= $('section#content>.container>.mnu>li>a');

  $mnu.on('click', function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
  });
  // end of section#content >mnu
  
})