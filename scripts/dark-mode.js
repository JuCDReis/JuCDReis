const body = document.querySelector('body');
const btn = document.querySelector('.toggle-btn');
const logo = document.querySelector('#logo');
const logoF = document.querySelector('#logo-f');
const introMe = document.querySelector('#intro-me');
const whyMe = document.querySelector('#why-me');
const tel = document.querySelector('#tel');
const email = document.querySelector('#email');


//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value){
  localStorage.setItem('darkmode', value);
}

function changeImg(params) {
  if(body.classList.contains('darkmode')){
    logo.setAttribute('src', './assets/logo-light-theme.svg');
    logoF.setAttribute('src', './assets/logo-light-theme.svg');
    introMe.setAttribute('src', './assets/intro-me-light.svg'); 
    whyMe.setAttribute('src', './assets/why-me-light.svg');  
    tel.setAttribute('src', './assets/telefone-light.svg');  
    email.setAttribute('src', './assets/email-light.svg');  

    
  }else{
    logo.setAttribute('src', './assets/logo-dark-theme.svg');   
    logoF.setAttribute('src', './assets/logo-dark-theme.svg');   
    introMe.setAttribute('src', './assets/intro-me-dark.svg');  
    whyMe.setAttribute('src', './assets/why-me-dark.svg');  
    tel.setAttribute('src', './assets/telefone-dark.svg');  
    email.setAttribute('src', './assets/email-dark.svg');  
  }
}
//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
  } else if( darkmode == 'true'){ //if the dark mode is activated
    body.classList.add('darkmode');
    
  }
  changeImg();
}

load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  //save true or false
  store(body.classList.contains('darkmode'));
  changeImg()

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})

