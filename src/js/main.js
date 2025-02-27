$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      //faq
      $questions = $(".services__item");
      if($questions.length > 0){
        $questions.each(function(){
            $(this).on("click", function(){
                $questions.each(function(){
                    $(this).find(".services__item-text").hide("fast");
                })
                $(this).find(".services__item-text").toggle("fast");
            })
        })
      }
})