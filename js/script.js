　// pageTop-scroll

$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // //下からふわっとフェードイン
    // $(window).scroll(function (){
	// 	$('.fadein').each(function(){
	// 		var elemPos = $(this).offset().top;
	// 		var scroll = $(window).scrollTop();
	// 		var windowHeight = $(window).height();
	// 		if (scroll > elemPos - windowHeight + 100){
    //             $(this).addClass('scrollin');
    //         }else if(scroll < elemPos){
    //             $(this).removeClass('scrollin');
    //         }
	// 	});
    // });
    // ScrollReveal
    ScrollReveal().reveal('.scroll-up',{
    origin: 'bottom',
    duration: 1500,
    distance:'50px',
  });
    //ページ内リンクに飛んだ時ハンバーガーメニューを消す
    $('.nav__item').on('click',function() {
        if (window.innerWidth <= 768){
        $('#menu').prop('checked',false);
        }
    });

    // ハンバーガーメニュー以外をクリックするとメニューが閉じる
    var sp_nav=$('#menu')
    var nav=$('.header__nav')
    var main_cover=$('.main_cover')

    sp_nav.on('click',function(){
        main_cover.toggleClass('active');
        if(sp_nav.hasClass('active')){
            main_cover.on('click',function(){
                sp_nav.removeClass('active');
                main_cover.removeClass('active');
            });
        }
    });    

    //キービジュアルの丸
     bubbly({
        colorStart: '#fff',
        colorStop: '#fff',
        bubbles: 50,
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(53, 82%, 70%, .4)`
      })
});

