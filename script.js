`use strict`;

//* this is for the random background color
const background = document.querySelector(`.background`);
const navBar = document.querySelector(`.nav__bar`);
const logo = document.querySelector(`.nav__bar img`);
const headerArticles = document.querySelectorAll(
  `article.main-container article`
);
const textWhite = document.querySelectorAll(`.text-white`);
console.log(textWhite);
// console.log(random);
const randomBackgroundColor = function () {
  headerArticles.forEach((eachArticle) => {
    eachArticle.addEventListener(`mouseover`, function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      background.style.background = `linear-gradient(
        180deg,
        #${randomColor} 8%,
        rgba(10, 9, 9, 1) 40%
        )`;
    });
  });
};
const whiteBgColor = function () {
  headerArticles.forEach((eachArticle) => {
    eachArticle.addEventListener(`mouseover`, function () {
      background.style.background = `linear-gradient(
        180deg,
        #fff 8%,
        #fff 40%
        )`;
    });
  });
};
randomBackgroundColor();
//* this is for the dark/light mode
const darkMode = document.querySelector(`.dark-mode`);
const lightMode = document.querySelector(`.light-mode`);
darkMode.addEventListener(`click`, function () {
  lightMode.classList.remove(`d-none`);
  darkMode.classList.add(`d-none`);
  background.style.background = `linear-gradient(
    180deg,
    rgba(55, 9, 9, 1) 8%,
    rgba(10, 9, 9, 1) 40%
  )`;
  document.querySelector(`body`).style.backgroundColor = `black`;
  navBar.style.backgroundColor = `black`;
  logo.src = `./img/Spotify_Logo_RGB_White.png`;
  textWhite.forEach((text) => {
    text.classList.add(`text-white`);
    text.classList.remove(`text-dark`);
    document.querySelector(`.laura-jones`).style.color = `white`;
  });
  randomBackgroundColor();
});
lightMode.addEventListener(`click`, function () {
  lightMode.classList.add(`d-none`);
  darkMode.classList.remove(`d-none`);
  document.querySelector(`body`).style.backgroundColor = `white`;
  document.querySelector(`.nav__bar`).style.backgroundColor = `white`;
  background.style.background = `linear-gradient(
    180deg,
    #fff 8%,
    #fff 40%
    )`;
  navBar.style.backgroundColor = `white`;
  textWhite.forEach((text) => {
    text.classList.remove(`text-white`);
    text.classList.add(`text-dark`);
  });
  document.querySelector(`.mode`).style.backgroundColor = `black`;
  document.querySelector(`.mode`).style.color = `white`;

  document.querySelector(`.laura-jones`).style.color = `white`;

  logo.src = `./img/spotify-logo-vector-black-vinnytsia-ukraine-may-flat-style-icon-design-218140539.jpg`;

  whiteBgColor();
});
/////////////////////////////////////////////////////
// window.onload = function (event) {
//   $("#mymodal").modal("show");
// };
//////////////////////////
// // display username on log in
const email = document.querySelector(`.email`);
const password = document.querySelector(`.password`);
const logInBtn = document.querySelector(`.log-in`);
console.log(logInBtn);
logInBtn.addEventListener(`click`, function (e) {
  if (password.value === `12345`) {
    logInBtn.href = `index.html`;
    console.log(e.target);
    document.querySelector(`h1`).textContent = `Good morning ${email.value}`;
  } else {
    const alert = document.querySelector(`.alert.alert-success`);
    console.log(alert);
    setTimeout(() => {
      alert.classList.remove(`d-none`);
      alert.classList.add(`show`);
    }, 500);

    setTimeout(() => {
      alert.classList.remove(`show`);
    }, 4000);
    setTimeout(() => {
      alert.classList.add(`d-none`);
    }, 4500);
  }
});
