$(document).ready(function () {

    scroll_btn = document.getElementById("scroll")
    window.onscroll = function(){scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            scroll_btn.style.display = "block";
        }
        else{
            scroll_btn.style.display = "none";
        }
    }


    $('#scroll').click(function () {
        $("html, body").animate({
      scrollTop: 0 }, 100);
      return false;
    });

    // $('.jumbotron, .projects').fadeIn(2000);
    // $('.projects').fadeIn(2000);

});
