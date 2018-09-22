
$(document).ready(function () {

  $(".errors").hide();
  $(".features-box").hide();
  $(".features-box").slideToggle(1000).show();

  $("#login-form").on('submit', function(e){
    e.preventDefault();
    if ($('#email').val() === '') {
      $('#email-err').show();
    } else {
      $("#login-page-container").hide(("slide", {direction: "right"}, 1000));
      $("#poll-page-container").show();
    }
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

  $("body").on("click",".link-add-desc" ,function(e){
    e.preventDefault();
    $(this).siblings(".description-box").slideToggle(1000);
  })

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
    console.log(requireChoice1 + "  " + requireChoice2);

    if(isStringEmpty(requireChoice1) || isStringEmpty(requireChoice2))
    {
      $("#fieldEmptyError").slideDown(100);
    } else{

      $("#fieldEmptyError").hide();


      $("#option-container").append('<div class ="option-remove-wrapper">\
      <div class="input-group-text link-add-desc"> <a href="">+ optional description</a></div>\
        <input type="text" id = "req-choice-1" class="choices" name="c1">\
        <input type="image" src="/images/remove.png" class ="btn-remove-custom" alt="remove">\
        <textarea class ="description-box" placeholder="Description" rows="2"></textarea>\
      </div>');


    }

  });



  $('#form-publish').on('submit', function(e) {
    e.preventDefault();
    console.log('poll submit clicked');
    const email = $('#email').val();
    const question = $('#pollName').val();
    const date = $('.date-picker').val();


    let choices = [];
    $('.choices').each(function() {
      choices.push($(this).val());
    });
    let descs = [];
    $('.description-box').each(function() {
      descs.push($(this).val());
    });
    // for (let i in choices) {
    //   options[i] = choices[i];
    // }
    let options = {
      email: email,
      pollTitle: question,
      date: date,
      choices: choices,
      desc: descs
    };

    $.ajax({
      method: 'POST',
      url: '/poll/new',
      data: options,
    }).done((results) => {
      console.log('Poll succesfully submitted.');
      $('#form-publish').slideUp();
      $('#poll-submitted').show();
      const shareURL = results.shareURL;
      $('#share-url-input').val(`localhost:8080/${shareURL}`);
      $('#creator-email').text(email);
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


  // Vote submit button
  $('#submit-vote-btn').on('click', function() {
    console.log('vote button submission');
    const pathName = window.location.pathname;
    const listElements = $('#sortable').children();
    const userName = 'Tester';
    let votes = {};
    let index = 0;
    for (let i of listElements) {
      const h2 = $(i).children();
      const text = h2[0].innerText;
      votes[index] = text;
      index++;
    }
    const data = {
      results: votes,
      userName: userName
    }
    $.ajax({
      method: 'POST',
      url: `${pathName}/vote`,
      data: data
    }).done((results) => {
      console.log('vote submission completed');
    });
  });
});








