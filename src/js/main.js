$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 5000,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      //faq
      $questions = $(".services__item");
      if($questions.length > 0){
        $questions.each(function(){
            $(this).on("click", function(){
              if(!$(this).hasClass(".services__item-active")){
                $currenItem = $(this);
                $questions.each(function(){
                  if($(this)[0] !==  $currenItem[0]){
                    $(this).removeClass("services__item-active")
                    $(this).find(".services__item-plus").text("+")
                  }
                })
              }
              $plus = $(this).find(".services__item-plus")
              $(this).toggleClass("services__item-active");
              if($plus.text() == "-"){
                $plus.text("+")
              }else{
                $plus.text("-")
              }

            })
        })
      }

      //nav-bar country page
      const $navItems = $(".info__nav-item");
      if($navItems.length > 0){
        $navItems.each(function(index){
          $(this).on("click", function(){
            if(!$(this).hasClass(".info__nav-item-active")){
              $navItems.each(function(){$(this).removeClass("info__nav-item-active")});
              $(this).addClass("info__nav-item-active")
              $(".info__content").each(function(){$(this).hide()})
              $(`.info__content-${index+1}`).fadeIn();
            }
          })
        })
      }

      //mobile-header
      const $burgerBtn = $(".header__burger");
      if($burgerBtn.length > 0){
        $burgerBtn.on("click", function(){
          const $mobileMenu = $(".header__mobile-menu");
          $mobileMenu.slideToggle(400)
        })
      }

      //estate gallary
      const $gallaryItems = $(".gallary__item");
      if($gallaryItems.length > 0){
        $gallaryItems.each(function(){
          $(this).on("click", function(){
            $(".gallary__main").attr("src", $(this).attr("src"))
          })
        })
      }
})