// remove transições em dispositivos mobile
const transitionsElements = document.querySelectorAll(".trans");
const aboutMe = document.querySelector('.about-me');
const skillsText = document.querySelector('.skills-left');
const skillsJs = document.querySelector('.item-js');
const skillsGit = document.querySelector('.item-git');
const cardInfo1 = document.querySelector('.card-creativity');
const cardInfo2 = document.querySelector('.card-research');
const cardInfo3 = document.querySelector('.card-commitment');
const whyMeImg = document.querySelector('#why-me-img');


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
  whyMeImg.classList.add('hide-element');

cardInfo1.innerHTML = `<div class="card-info-title-mobile">
                                    <strong>creativity</strong><img src="./assets/icon-creativity.svg" alt="">
                                </div>
                                <p>One of my greatest passions is creating and testing solutions for any problem I face. 
                                    I'm a strong believer in thinking outside the box, and I'm eager to help you achieve the best possible results for every project!
                                    </p>`

cardInfo2.innerHTML = `<div class="card-info-title-mobile">
                                    <strong>learning and research</strong><img src="./assets/icon-research.svg" alt="">
                                </div>
                                <p>
                                  I'm always willing to try new technologies and methods to ensure I deliver my very best work. 
                                  I'm never daunted by the unknown and constantly strive to learn and grow. Whatever the challenge is, I'm up for it.
                                    </p>`

cardInfo3.innerHTML = `<div class="card-info-title-mobile">
                                    <strong>commitment</strong><img src="./assets/icon-check.svg" alt="">
                                </div>
                                <p>
                                  I treat every project as a priority. I actively listen to your needs and ideas to develop 
                                  high-fidelity interfaces that match your vision. Working to meet deadlines while delivering high-quality work.
                                    </p>`
}
