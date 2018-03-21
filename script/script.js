var last_known_scroll_position = 0;

function doSomething(scroll_pos) {
  if(window.scrollY > 200 && window.innerWidth > 768){
    $("nav").addClass( "nav_scrolled" );
  }else{
    $("nav").removeClass( "nav_scrolled" );
  }
  var bottom_of_object = $('#li').offset().top + $('#li').outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height();

  if( bottom_of_window > bottom_of_object ){
    $('#li').animate({'opacity':'1'},500, function(){
      $('#li1').animate({'opacity':'1'},500, function(){
        $('#li2').animate({'opacity':'1'},500);
      });
    });
    $('#li > .left_box > .icon').animate({'font-size':'4em'},500, function(){
      $('#li1 > .left_box > .icon').animate({'font-size':'4em'},500, function(){
        $('#li2 > .left_box > .icon').animate({'font-size':'4em'},500);
      });
    });
  }
}
function toAbout(){
  $(".mobile_dropdown").removeClass("active");
  $("#burger").addClass("normal");
    $("#burger").removeClass("active");
  $('html, body').animate({
      scrollTop: $("#about").offset().top
  }, 500);
}
function toCatalog(){
  $(".mobile_dropdown").removeClass("active");
  $("#burger").addClass("normal");
    $("#burger").removeClass("active");
  $('html, body').animate({
      scrollTop: $("#catalog").offset().top -48
  }, 500);
  
}
function toContact(){
  $(".mobile_dropdown").removeClass("active");
  $("#burger").addClass("normal");
    $("#burger").removeClass("active");
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 500);
}

function checkWindow(){
  if(screen.width <=768){
    $("nav").removeClass( "nav_scrolled" );
  }else if(window.scrollY > 200 && window.innerWidth > 768){
    $("nav").addClass( "nav_scrolled" );
  }
}
function dropdown(){
  if($(".mobile_dropdown").hasClass("active")){
    $(".mobile_dropdown").removeClass("active");
    $("#burger").addClass("normal");
    $("#burger").removeClass("active");
  }else{
    $(".mobile_dropdown").addClass("active");
    $("#burger").removeClass("normal");
    $("#burger").addClass("active");
  }
}

window.addEventListener('scroll', function(e) {
  doSomething();
});
window.onresize = function(event) {
  checkWindow();
};
