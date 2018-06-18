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

// Bind events
$('body').on('click', '.pledge-archive-navigation a', scrollToLetter);
$('body').on('click', '.contactform-section-form-button', changeSelection);
$('body').on('click', '.wwd-centerimg', showChapter);
