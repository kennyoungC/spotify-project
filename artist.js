`use strict`;
window.onload = () => {
  loadArtistPage();
};

const loadArtistPage = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id);
  const tbody = document.querySelector(`.album-tbody`);
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(`h1`).innerText = `${data.name}`;
      const background = document.querySelector(`.artist-page-background`);
      background.style.background = `url(${data.picture_xl})`;
      background.style.backgroundSize = `cover`;
      background.style.backgroundPosition = `center`;
      background.style.backgroundRepeat = `no-repeat`;
    })
    .catch((err) => console.error(err));
};

const darkMode = document.querySelector(`.dark-mode`);
const lightMode = document.querySelector(`.light-mode`);
console.log(darkMode);
console.log(lightMode);
const HometoDarkMode = function () {
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
};
HometoDarkMode();
const HometoLightMode = function () {
  lightMode.addEventListener(`click`, function () {
    lightMode.classList.add(`d-none`);
    darkMode.classList.remove(`d-none`);
    document.querySelector(`body`).style.backgroundColor = `white`;
    document.querySelector(`.nav__bar`).style.backgroundColor = `white`;
    background.style.background = `white`;
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
};
HometoDarkMode();
