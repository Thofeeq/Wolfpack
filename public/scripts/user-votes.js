$(document).ready(function() {

  $('.name-submit-btn').on('click', function() {
    if ($('#voter-name').val() === '') {
      $('#voter-name-err').show();
      // $('#voter-name').css("border", "1px red solid");
    } else {
      $('#voter-name-input').slideUp(function() {
        $('#user-vote-poll-container').slideDown().css('display', 'flex');
      });
    }
  });

  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

});
