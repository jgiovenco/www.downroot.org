//change selection function
function changeSelection(event) {

  //Prevent default behaviour
  event.preventDefault();

  //Log
  console.log('clicked!');

  //Remove all active buttons
  $('.contactform-section-form-button').removeClass('active');

  //find the clicked button
  var button = $(event.currentTarget),
      button_event = button.attr('data-event');


  //Set the image to active
  button.addClass('active');

  //Uncheck all the radio buttons
  $('.contactform-section-form-radiobuttons input[type="radio"]').prop('checked', false);

  //Check the right radio buttons
  $('.contactform-section-form-radiobuttons input[value="' + button_event + '"]').prop('checked',true);
}

$('body').on('click', '.contactform-section-form-button', changeSelection);
