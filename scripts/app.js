(function() {
  document.getElementById("contacto").addEventListener("keyup", validateForm);
  document.getElementById("button").addEventListener("click", submit);

  function validateForm() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var plan = document.getElementById("plan");
    var extras = document.getElementById("extras");
    var message = document.getElementById("message");
    var button = document.getElementById("button");
    var disabled = true;

    if ( name.value.length < 3 ) {
      name.classList.add('is-invalid');
      name.classList.remove('is-valid');
      disabled = true;
    }
    else {
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
      disabled = false;
    }

    if ( phone.value.length < 7 ) {
      phone.classList.add('is-invalid');
      phone.classList.remove('is-valid');
      disabled = true;
    }
    else {
      phone.classList.remove('is-invalid');
      phone.classList.add('is-valid');
      disabled = false;
    }

    if ( validateEmail(email) == false ) {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      disabled = true;
    }
    else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      disabled = false;
    }

    if ( message.value.length < 8 ) {
      message.classList.add('is-invalid');
      message.classList.remove('is-valid');
      disabled = true;
    }
    else {
      message.classList.remove('is-invalid');
      message.classList.add('is-valid');
      disabled = false;
    }

    if ( disabled == true) {
      document.getElementById("button").disabled = disabled;
    }
    else {
      document.getElementById("button").disabled = disabled;
    }
  }

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  console.log(document.getElementById("contacto").value);

})();

function validateEmail(emailField){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false)
  {
      return false;
  }

  return true;

}

function submit() {
  var xhr = new XMLHttpRequest();
  var url = "https://ideenegocios.com.ar:3001/ceco";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(function(){
          $("#alert").hide(1000);
        }, 3000);
        document.getElementById("alert").hidden = false;
      }
  };
  var data = JSON.stringify(document.getElementById("contacto").value);
  xhr.send(data);

  return false;
}
