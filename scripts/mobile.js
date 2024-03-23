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
 aboutMe.children[1].innerHTML = `I am a front-end developer with the heart of a designer, passionate about learning new skills and improving my existing ones. 
  <strong>I'm here to turn your ideas into clean, interactive, and stunning websites!</strong>
 Tell me about your next project!`;

 skillsText.children[1].innerHTML = ``;
 skillsJs.children[1].innerHTML = `Java S.`;
 skillsGit.children[1].innerHTML = `Git`;

}
