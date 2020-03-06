var Carousel = function(el, toRotate, period){
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
}
Carousel.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 1000;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
}
$(document).ready(function () {
    var elements = document.getElementsByClassName('carousel');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new Carousel(elements[i], JSON.parse(toRotate), period);
        }
    }

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




});
