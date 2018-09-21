
$(document).ready(function () {

  $("#poll-page-container").hide();
  $(".errors").hide();
  // $("#date").flatpickr({enableTime:true});
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();

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


  $("#date").flatpickr({enableTime:true});



  $('#form-publish').on('submit', function(e) {
    e.preventDefault();
    console.log('poll submit clicked');
    const email = $('#email').val();
    const question = $('#pollName').val();
    const date = $('.date-picker').val();
    let options = {
      email: email,
      pollTitle: question,
      date: date
    };
    let choices = [];
    $('.choices').each(function() {
      choices.push($(this).val());
    });
    console.log(choices);
    for (let i in choices) {
      options[i] = choices[i];
    }
    console.log(options);
    $.ajax({
      method: 'POST',
      url: '/poll/new',
      data: options,
    }).done(() => {
      console.log('Login-form ajax call completed');
    });
  });

});
