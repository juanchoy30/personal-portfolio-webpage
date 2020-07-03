
$(window).on('load', function() {
    // Variables
    // Messages
    var $welcomeSection = $('section#welcome-section');
    var $helloMaker = $('<h1 id="hello">Hello...</h1>');
    var $myNameIs = $('<h1 id="myNameIs">My name is Juan Miguel…</h1>');
    var $frontEnd = $('<h1 id="frontEnd">I´ll be your Front </h1><h1 id="frontEnd2">End Developer today!</h1>');
    var $help = $('<h1 id="help">How may I help you?</h1>');
    var $title = $('<h1 id="title-name">Juan M. Choy</h1><p id="welcome-paragraph">Front End Web Developer</p>')
    
    // Time of animations
    var $timeToAppear = 1470;
    var $timeToDisappear = 2/3 * $timeToAppear;
    var $timeToTimeOut = ($timeToAppear * 2) - 1;

    // Hello animation
    $welcomeSection.html($helloMaker);
    var $helloGetter = $('h1#hello');
    $helloGetter.hide().fadeIn($timeToAppear*1.2);
    $helloGetter.fadeOut($timeToDisappear);

    // My name is
    setTimeout(function() {
        $welcomeSection.html($myNameIs);
        var $myNameGetter = $('h1#myNameIs');
        $myNameGetter.hide().fadeIn($timeToAppear);
        $myNameGetter.fadeOut($timeToDisappear);}, $timeToTimeOut
    );

    // Front End
    setTimeout(function(){
        $welcomeSection.html($frontEnd);
        var $frontEndGetter = $('h1#frontEnd');
        var $frontEndGetter2 = $('h1#frontEnd2');
        $frontEndGetter.hide().fadeIn($timeToAppear);
        $frontEndGetter2.hide().fadeIn($timeToAppear*1.5);
        $frontEndGetter.fadeOut($timeToDisappear*1.65);
        $frontEndGetter2.fadeOut($timeToDisappear);}, ($timeToTimeOut*2)
    );

    // How may I help
    setTimeout(function(){
        $welcomeSection.html($help);
        var $helpGetter = $('h1#help');
        $helpGetter.hide().fadeIn($timeToAppear);
        $helpGetter.fadeOut($timeToDisappear);}, ($timeToTimeOut*3.3)
    );

    // Presentation Card
    setTimeout(function(){
        $welcomeSection.html($title);
        var $titleGetter = $('h1#title-name');
        var $paragraphGetter = $('p#welcome-paragraph')
        $titleGetter.hide().fadeIn($timeToAppear*2);
        $paragraphGetter.hide().fadeIn($timeToAppear);}, ($timeToTimeOut*4.4)
    );
});

