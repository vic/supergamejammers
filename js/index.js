+(function () {


  var $ = jQuery;
  var firebase = new Firebase("https://supergamejammers.firebaseio.com/");
  var emails = firebase.child('emails');


  $(function () {

    $('#reserve').on('submit', function (e) {

      e.preventDefault();
      e.stopPropagation();

      var input = $(this).find('input[type=email]');
      var email = input.val();

      emails.push(email);

      input.val('');


    })

  })




}());


