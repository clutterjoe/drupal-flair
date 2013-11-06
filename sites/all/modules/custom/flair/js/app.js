
(function($) {

function add_flair() {
  var flairs = Drupal.settings.flair;
  winW = $(window).width() - 100;
  winH = $(window).height() - 100;
  $('.flair').remove();

  for(i=0;i<flairs.length;i++) {
    
    $div = $('<div />');
    $div.addClass('flair');
    $div.html($('<a />').attr('href', flairs[i].url).html(flairs[i].title));
    w = Math.random() * (winW - 10) + 0;
    h = Math.random() * (winH + $(document).scrollTop() - 10) + 0;
    $div.css('left', w);    
    $div.css('top', h);    
    
    console.log(flairs[i]);    
    $div.css('background-image', 'url(' + flairs[i].url + ')');
    
    $('body').prepend($div);

  }    
  $('.flair').draggable();
}


Drupal.behaviors.flair = {
  attach: function() {

    $(window).resize(function() {
      add_flair();
    });

    $(window).scroll(function() {
      add_flair();
    });

    $(document).ready(function() {
      add_flair();
    });
    
  }  
};


})(jQuery);