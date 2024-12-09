// remove transições em dispositivos mobile
const transitionsElements = document.querySelectorAll(".trans");
const aboutMe = document.querySelector('.about-me');
const skillsText = document.querySelector('.skills-left');
const skillsJs = document.querySelector('.item-js');
const skillsGit = document.querySelector('.item-git');



for (let index = 0; index < transitionsElements.length; index++) {
  let elemAtt = transitionsElements[index];
  if (window.innerWidth < 992) {
    elemAtt.removeAttribute("data-aos");
    console.log(elemAtt);
  }
}

if (window.innerWidth < 992){

 skillsText.children[1].innerHTML = `Some of my <strong>hard skills</strong> used to bring your project to life.`;
 skillsJs.children[1].innerHTML = `Java S.`;
 skillsGit.children[1].innerHTML = `Git`;

}
