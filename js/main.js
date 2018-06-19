$(document).ready(function(){

var sticky = new Sticky('.stick-me');

// - - - - - - - - - - - - - - - - - scroll reveal - - - - - - - - -  - - - -//
  //Attach scroll to window
  window.sr = ScrollReveal ();

  // Attach ScrollReveal to the elements
  sr.reveal('.show-me',{duration:2000});

// - - - - - - - - - - - - - - - - - Smooth Scrolling - - - - - - - - -  - - - -//
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



// - - - - - - - - - - - - - - - - - hamburger menu - - - - - - - - -  - - - -//

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").slideToggle();
  });




// - - - - - - - - - - - - - - - - - Contact Form - - - - - - - - -  - - - -//
/*
** Change Selection
*/
function changeSelection(event) {

  // Prevent default behaviour
  event.preventDefault();

  // Remove all active buttons
  $('.contactform-section-form-button').removeClass('active');

  // Find the clicked button
  var button = $(event.currentTarget),
      button_event = button.attr('data-event');

  // Set the button to active
  button.addClass('active');

  // Uncheck all the radio buttons
  $('input[type="radio"]').prop('checked', false);

  // Check the right radio buttons
  $('input[value="' + button_event + '"]').prop('checked', true);
}

// - - - - - - - - - - - - - - - - - pledge archive - - - - - - - - -  - - - -//
/*
** Scroll to element
*/
function scrollToLetter(event) {

  // Prevent following links
  event.preventDefault();

  // Get clicked navigation letter
  var letter = $(event.currentTarget),
      target = letter.attr('data-letter');

  // Scroll to letter H3
  $('html, body').animate({
      scrollTop: $('#letter-' + target).offset().top
  }, 1000);

  // Don't do anything after scrolling
  return false;

}

// - - - - - - - - - - - - - - - - - WWD - - - - - - - - -  - - - -//

//add function that shows the absolute elements
function showChapter(event){

//assigns the target as the data id's (pledge, event, fundraise)
  var target = $(event.currentTarget),
      chapter = target.attr('data-id');

// removes current selection
  $('.wwd-item').removeClass('active');

//selects the new icon
    $('.wwd-item[data-id="'+chapter+'"]').addClass('active');
      console.log(chapter);

}

// - - - - - - - - - - - - - - - - - bind events - - - - - - - - -  - - - -//
// Bind events
$('body').on('click', '.pledge-archive-navigation a', scrollToLetter);
$('body').on('click', '.contactform-section-form-button', changeSelection);
$('body').on('click', '.wwd-centerimg', showChapter);

});
