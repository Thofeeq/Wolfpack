
$(document).ready(function () {
  
  $("#poll-page-container").hide();
  $(".errors").hide();
  // $("#date").flatpickr({enableTime:true});
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();
<<<<<<< HEAD

  $("#btn-register").click(function(){
    $("#login-page-container").hide(("slide", {direction: "right"}, 1000));
    $("#poll-page-container").show();   
   return false;
  });
  

  $(".date-picker").flatpickr({enableTime:true});

  $("#btn-add").click(function(e){
    e.preventDefault();

    function isStringEmpty(s) {
      var emptyOuput = false;
      if(s.indexOf(' ') >= 0)
      {
        var hasWhiteSpace =  true;
      }
     
      if(s === ""){
        var emptyString = true;
      }
      
      if(hasWhiteSpace || emptyString)
      {
        emptyOuput = true; 
      }

      return emptyOuput;
    }
    
    var requireChoice1 = $("#req-choice-1").val();
    var requireChoice2 = $("#req-choice-2").val();

    if(isStringEmpty(requireChoice1) || isStringEmpty(requireChoice2))
    {
      $("#fieldEmptyError").show();
     
      
    }
    else{
      $("#fieldEmptyError").hide();
      $("#option-container").append('<input type="text" class="choices"/>');
    }
   
  })
 
  // ajax call to add user to database
  // $('#login-form').on('submit', function(e) {
  //   e.preventDefault();
  //   const email = $(this).serialize();
  //   $.ajax({
  //     method: 'POST',
  //     url: '/admin',
  //     data: email
  //   }).done(() => {
  //     console.log('Login-form ajax call completed');
  //   });

  });



  // Set vote items to sortable
  // $('#sortable').sortable();
  // $('#sortable').disableSelection();

  // // Vote form submit
  // $('#vote-form').on('submit', function(e) {

  // });
=======
  $("#date").flatpickr({enableTime:true});

  $('#submit-poll').on('submit', function(e) {
    e.preventDefault();
    console.log('poll submit clicked');
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/poll/new',
      data: data
    }).done(() => {
      console.log('Login-form ajax call completed');
    });
  });
>>>>>>> 6f8e395c02b9daa09207acc8d3240356891329af

// });

