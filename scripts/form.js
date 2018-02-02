export function init() {
  document.getElementById("contacto").addEventListener("keyup", validateForm);
  document.getElementById("button").addEventListener("click", submit);

  var nombre = document.getElementById("nombre");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var plan = document.getElementById("plan");
  var extras = document.getElementById("extras");
  var message = document.getElementById("message");
  var button = document.getElementById("button");
  var disabled = true;

  function validateForm() {

    if ( nombre.value.length < 3 ) {
      nombre.classList.add('is-invalid');
      nombre.classList.remove('is-valid');
      disabled = true;
    }
    else {
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
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

  $('.select-plan').on('click', (e) => {
    const selectedPlan = e.target ? e.target.dataset.plan : null;
    if(selectedPlan) {
      $(plan).val(selectedPlan);
    }
  });
 }

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    return false;
  }

  return true;
}

function submit() {
  var contacto = {
    Name: nombre.value,
    Email: email.value,
    Phone: phone.value,
    Plan: plan.value,
    Extras: extras.value,
    Message: message.value
  };
  var xhr = new XMLHttpRequest();
  var url = "https://ideenegocios.com.ar:3001/efecto-web";
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
  var data = JSON.stringify(contacto);
  console.log(contacto);
  xhr.send(data);

  return false;
}
