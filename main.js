/**
 * Slider
 */
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  // options
  cellAlign: 'center',
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options

});
/**
 * Modal mail
 */
var mail = document.getElementById('mail');
mail.setAttribute('data-bs-toggle', 'modal');
mail.setAttribute('data-bs-target', '#modalMail');

const mailModal = new bootstrap.Modal('#modalMail');
document.querySelector('.btn-close').addEventListener('click', () => {
  mailModal.hide();
})

document.querySelector('.btn-warning').addEventListener('click', () => {
  mailModal.hide();
})
document.querySelector('.btn-success').addEventListener('click', () => {
  mailModal.hide();
})
//Form validation
let mailForm = document.getElementById('mailForm');
for (let i = 0; i < mailForm.children.length; i++) {
  const element = mailForm.children[i];
  if (element.nodeName == 'INPUT') {
    element.addEventListener('blur', validateInputMail);
  }
}

//Validate function
function validateInputMail(evt) {
  var element = evt.currentTarget;
  var name = element.name;
  if (element.nextSibling.nextSibling.nodeName=='LABEL') {
    var spanValidate = document.createElement('span');
    element.parentNode.insertBefore(spanValidate, element.nextSibling);
  }else{
    spanValidate=element.nextSibling;
  }
  console.log(element.nextSibling);
  if (name === 'name') {
    let validNameRegx = /^[A-Z]{1}[a-z]{2,}$/;
    let validName = validNameRegx.test(element.value);
    if (validName) {
      spanValidate.innerText = '';
      spanValidate.classList.add("correct");

      spanValidate.innerText = 'Correct!'
    } else {
      spanValidate.innerText = '';
      spanValidate.classList.add("incorrect");
      spanValidate.innerText = 'Wrong name!'
    }
  }
  if (name === 'mailI') {
    var validMailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    let validMail = validMailRegx.test(element.value);
    if (validMail) {
      spanValidate.innerText = '';
      spanValidate.classList.add("correct");
      spanValidate.innerText = 'Correct!'
    } else {
      spanValidate.innerText = '';
      spanValidate.classList.add("incorrect");
      spanValidate.innerText = 'Wrong mail!'
    }
  }
}

//Onclick github and linkedin

const linkedinIcon = document.getElementById('linkedin');
linkedinIcon.addEventListener('click', () =>{
  window.location.href='https://www.linkedin.com/in/aitor-simon/';
});

const githubIcon = document.getElementById('github');
githubIcon.addEventListener('click', () =>{
  window.location.href='https://github.com/aitsimon/';
});

