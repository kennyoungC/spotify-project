`use strict`;
let query = "wizkid";
const search = (artistName = query) => {
  const musicContainer = document.querySelector(`.middle-container > .row`);
  musicContainer.innerHTML = ``;
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((data) => {
        document.querySelector(`h2`).innerText = data.artist.name;

        musicContainer.innerHTML += albumCards(data);
      });
    })
    .catch((err) => console.log(err));
};
const albumCards = (data) => {
  return (musicRow = `<div id="${data.album.id}"class="col-6 col-sm-4 col-md-3 col-xl-2 mb-3">
  <article class="music-content wizkid-page">
  <figure class="position-relative" >
  <img
  src="${data.album.cover_medium}"
  alt="album picture"
  class="img-fluid"
  />
  <div class="play-box">
  <p class="play-btn"></p>

  </div>
  </figure>
  
  <figcaption>${data.title}</figcaption>
  <p class="text-muted"><a href="album.html?id=${data.album.id}">Go To Album </a></p>
  <p class="text-muted"><a href="artist.html?id=${data.artist.id}">${data.artist.name}</a></p>
  </article>
  </div>`);
};
let artistName = [
  "wizkid",
  "davido",
  "olamide",
  "tekno",
  "skales",
  "patoranking",
  "eminem",
  "rihanna",
];
let randArtistName = artistName[Math.floor(Math.random() * artistName.length)];
const init = function () {
  HometoDarkMode();
  HometoLightMode();

  search(`${randArtistName}`);

  randomBackgroundColor();
  document.getElementById(`search-input`).classList.remove(`d-none`);
  // aside.classList.remove(`d-none`);
};
const handleSearhQuery = (event) => {
  query = event.target.value;
  if (query.length > 3 && event.key === "Enter") {
    search();
  }
};
const artistPage = document.querySelector(`.artist-page`);
const albumPage = document.querySelector(`.album-page`);
const homePage = document.querySelector(`.home-page`);
const background = document.querySelector(`.background`);
const navBar = document.querySelector(`.nav__bar`);
const logo = document.querySelector(`.nav__bar img`);
const aside = document.querySelector(`aside`);
const headerArticles = document.querySelectorAll(
  `article.main-container article`
);
const wizkidPage = document.querySelector(`.wizkid-page`);
const textWhite = document.querySelectorAll(`.text-white`);
const email = document.querySelector(`.email`);
const password = document.querySelector(`.password`);
const logInBtn = document.querySelector(`.log-in`);
//* this is for the random background color
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
      background.style.background = `white`;
    });
  });
};
//* this is for the dark/light mode

const darkMode = document.querySelector(`.dark-mode`);
const lightMode = document.querySelector(`.light-mode`);
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

//////////////////////////
// display username on log in
let myDate = new Date();
let hrs = myDate.getHours();
const checkCurrentTime = function () {
  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return greet;
};

logInBtn.addEventListener(`click`, function (e) {
  if (password.value === `12345`) {
    console.log(e.target);
    const main = document.querySelector(`.main`);
    console.log(main);
    main.classList.add(`show`);
    $("#mymodal").modal("hide");
    document.querySelector(`h1`).innerText = `${checkCurrentTime()} ${
      email.value
    }!`;
    document.querySelector(`.user-log-in`).classList.add(`d-none`);
    document.querySelector(`.user-details`).classList.remove(`d-none`);
    document.querySelector(`.user-name`).innerText = `${email.value}`;
    email.value = ``;
    password.value = ``;
    init();
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
