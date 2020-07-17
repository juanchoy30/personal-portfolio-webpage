$(function() {
    var $window = $(window);
    var $aboutParagraphs = $('div#paragraph1');
    var $aboutZone = $('section#about').offset().top - $window.height()*0.8;

    $aboutParagraphs.css({'left': -$window.width(), 'opacity': '0'});

    $window.on('scroll', function () {
        
        if ( ($aboutZone) <= $window.scrollTop() &&  $window.scrollTop() <= $aboutZone*6) {
            $aboutParagraphs.animate( { 'left': '0px', 'opacity': '1' }, 1100 );
        } else {
            $aboutParagraphs.stop(true).animate( { 'left': -$window.width(), 'opacity': '0' }, 600);
        }
    });
});