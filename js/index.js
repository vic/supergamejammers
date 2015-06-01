+(function () {

  var $ = jQuery;
  var firebase = new Firebase("https://supergamejammers.firebaseio.com/");
  var emails = firebase.child('emails');
  var registrations = firebase.child('registrations');

  function formValues (form) {
    return _.object(_.map($(form).serializeArray(), _.values))
  }

  function submitReservation (e) {
      e.preventDefault();
      e.stopPropagation();

      var data = formValues(this);
      registrations.push(data);

      $(this).find('fieldset').hide();
      $(this).find('.thanks').show();
  }

  function init () {
    $(this).find('.thanks').hide();
    $('#registration').on('submit', submitReservation);
  }

  $(init);

}());


