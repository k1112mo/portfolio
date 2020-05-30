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

    //下からふわっとフェードイン
    $(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }else if(scroll < elemPos){
                $(this).removeClass('scrollin');
            }
		});
    });
    //ページ内リンクに飛んだ時ハンバーガーメニューを消す
    $('.nav__item').on('click',function() {
        if (window.innerWidth <= 768){
        $('#menu').prop('checked',false);
        }
    });
     bubbly({
        colorStart: '#fff',
        colorStop: '#fff',
        bubbles: 50,
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(53, 82%, 70%, .4)`
      })
});

