(function($) {
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);

  $(window).scroll(function(event) {
  
    $(".module").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

function assassin_switch(){
  console.log("asd");
  $('.rolename').text("Assassin");
  $('.roldesc').text("Slayers (formerly Assassins) are fragile but agile damage-focused melee champions that look to swiftly take down their targets.");
  $('.rolepic').prepend('<img src="img/assassin.jpg" />');
  $( ".rolename" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
}

function checkIfPC(){
  var viewportWidth = $(window).width(); //1865 PC-n
  var viewportHeight = $(window).height(); //3030 PC-n
  //alert(viewportWidth);
  console.log(viewportHeight);
  console.log(viewportWidth); 
  if ($(window).width() > 1860) {
    $('.header').css("margin-top","260px");
    $('.slider').css("margin-left","200px")
   }
 }

$(window).ready(function() {
  $('.history_scroll').click(function(e) {
    e.preventDefault();
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 2000);
});
checkIfPC();
})

/*$( "#list_assassin" ).click(function(e) {  //ide jön majd a slider animation
    console.log("asd");
    e.preventDefault();
   /* setTimeout(function () {
      $('.main .title').text("Changed title!");
      $('.main .description').text("Changed Description");
  }, 1000);

    $('.rolename').text("Assassin");
    $('.roledesc').text("Slayers (formerly Assassins) are fragile but agile damage-focused melee champions that look to swiftly take down their targets.");
    $('.rolepic').prepend('<img src="img/rengar.png" />');
    //$( ".role" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
});*/



