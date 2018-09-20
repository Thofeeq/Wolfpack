$(document).ready(function () {
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();


  // Set vote items to sortable
  $('#sortable').sortable();
  $('#sortable').disableSelection();

  // Vote form submit
  $('#vote-form').on('submit', function(e) {

  });
});

