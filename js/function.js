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
  });

  //end of header>nav UI
 
  //section#main 이미지 슬라이드
  const $main_container = $('section#main > .img_slides');
  const $btnPrev = $('section#main > a.main-img-prev');
  const $btnNext = $('section#main > a.main-img-next');
  let nowIdx = 0;
  let intervalKey;

  const moveFn = function(){
    $main_container.stop().animate({
      left : -1280 * nowIdx
    },3000);
    
    const counter = $('section#main > span>strong');
    counter.text('0'+(nowIdx+1));
  };

   $btnPrev.on('click',function(evt){
    evt.preventDefault();

    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=2;
    };

    moveFn();
  });
  
  $btnNext.on('click',function(evt){
    evt.preventDefault();
    
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx=0;
    };

    moveFn();
  });

  $(window).on('load', function(){
    moveFn();
  
    intervalKey = setInterval(()=>{
  
      if(nowIdx<2){
        nowIdx++;
      }else{
        nowIdx=0;};
        moveFn();
    },7000);
  
  });
  // end of section#main 이미지 슬라이드

  //section#slides 이미지 슬라이드
  const $img_container = $('section#content > .slides > .slides-container');
 
  const imgmoveFn = function(){
    $img_container.stop().animate({
      left : -328},3000, function(){
      $img_container.children().eq(0).appendTo($img_container);
      $img_container.css({left:0});
    });
    }; 

    $(window).on('load', function(){
    setInterval(imgmoveFn, 3010);
    });    //end of section#slides 이미지 슬라이드
});
