
$(document).ready(function(){

  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >=50){
      $(".sticky").addClass("stickyadd");
    }else{
      $(".sticky").removeClass("stickyadd");
    }
  });

  // barras de progreso

  var waypoint = new Waypoint({
    element: document.getElementById('experience'),
    handler: function() {
      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:90%;transition:1s all;");
      p[1].setAttribute("style", "width:95%;transition:1.5s all;");
      p[2].setAttribute("style", "width:90%;transition:1.7s all;");
      p[3].setAttribute("style", "width:85%;transition:2s all;");
      p[4].setAttribute("style", "width:80%;transition:2.3s all;");
      p[5].setAttribute("style", "width:80%;transition:2.5s all;");
    },
    offset: '90%'
  });

  // Añadiendo fadeInUp animation al child del div con la clase .way-col
  var $child = $('.way-fade-up').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInUp');
    },{offset: '90%'});
  });

  var $child = $('.way-fade-left').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInLeft');
    },{offset: '90%'});
  });

  var $child = $('.way-fade-right').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInRight');
    },{offset: '90%'});
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      // margin:10,   //margen entre las imagenes
      nav:false,
      // dots:true,
      autoplay:true,
      autoplayTimeout:4000,
      items:1,
      // animateOut : "fadeOut",
      animateIn : "fadeInRight"

  });


  var filterizd = $('.filter-container').filterizr({
    animationDuration: .5,
  });

  var typed = new Typed(".element", {
    strings: ["Jhoan Gutiérrez", "Enfocado","Entusiasta","Creativo"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
  });


  $('a').smoothScroll({ speed:2000,offset: -50 });

});
