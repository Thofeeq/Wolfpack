
$(document).ready(function () {

  $("#poll-page-container").hide();
  $(".errors").hide();
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();

  $("#btn-register").click(function(){
    $("#login-page-container").hide(("slide", {direction: "right"}, 1000));
    $("#poll-page-container").show();
   return false;
  });


  $(".date-picker").flatpickr({enableTime:true});
  $(".date-picker").on("click",function(){

    $(this).css("background-image","none");
  });

//q for mentor
  $("body").on("click",".btn-remove-custom", function(e){
    e.preventDefault();
    $(this).parent().remove();
  });


  $("#btn-add").click(function(e){
    e.preventDefault();

    function isStringEmpty(s) {
      var emptyOuput = false;
      if(s.indexOf(' ') >= 0){
        var hasWhiteSpace =  true;
      }

      if(s === "") {
        var emptyString = true;
      }

      if(hasWhiteSpace || emptyString) {
        emptyOuput = true;
      }
      return emptyOuput;
    }
    function getOptionPosition(){
      let position = "";
      let currentNumOfOptions = $("#option-container  input[type='text']").length + 1;
      position = currentNumOfOptions;
      return position;
    }
    var requireChoice1 = $("#req-choice-1").val();
    var requireChoice2 = $("#req-choice-2").val();

    if(isStringEmpty(requireChoice1) || isStringEmpty(requireChoice2))
    {
      $("#fieldEmptyError").slideDown(100);
    } else{

      $("#fieldEmptyError").hide();


      $("#option-container").append('<div class ="option-remove-wrapper">\
      <div class="input-group-text">option ' + getOptionPosition() + '</div>\
        <input type="text" id = "req-choice-1" class="choices" name="c1">\
        <input type="image" src="/images/remove.png" class ="btn-remove-custom" alt="remove">\
      </div>');


    }

  });



  $('#form-publish').on('submit', function(e) {
    e.preventDefault();
    console.log('poll submit clicked');
    const email = $('#email').val();
    const question = $('#pollName').val();
    const date = $('.date-picker').val();

    let options = {
      email: email,
      pollTitle: question,
      date: date,
    };

    let choices = [];
    $('.choices').each(function() {
      choices.push($(this).val());
    });
    for (let i in choices) {
      options[i] = choices[i];
    }

    $.ajax({
      method: 'POST',
      url: '/poll/new',
      data: options,
    }).done((results) => {
      console.log('Poll succesfully submitted.');
      $('#form-publish').slideUp();
      const shareURL = results.shareURL;
      $('#share-url-input').val(shareURL);
      console.log(shareURL);
    });
  });

  // Copy url to clipboard
  $('#copy-btn').on('click', function() {
    console.log('copy-btn clicked');
    const copyText = document.getElementById("share-url-input");
    copyText.select();
    document.execCommand("copy");
  })
});








