`use strict`;
const artistPage = document.querySelector(`.artist-page`);
const homePage = document.querySelector(`.home-page`);
const background = document.querySelector(`.background`);
const navBar = document.querySelector(`.nav__bar`);
const logo = document.querySelector(`.nav__bar img`);
const headerArticles = document.querySelectorAll(
  `article.main-container article`
);
const textWhite = document.querySelectorAll(`.text-white`);
console.log(textWhite);
const email = document.querySelector(`.email`);
// console.log(email);
const password = document.querySelector(`.password`);
const logInBtn = document.querySelector(`.log-in`);
//* this is for the random background color
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
console.log(lightMode);
console.log(darkMode);

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
//* this is for the dark/light mode-2
const darkModeSecond = document.querySelector(`.dark-mode-2`);
const lightModeSecond = document.querySelector(`.light-mode-2`);
console.log(lightModeSecond);
console.log(darkModeSecond);

darkModeSecond.addEventListener(`click`, function () {
  lightModeSecond.classList.remove(`d-none`);
  darkModeSecond.classList.add(`d-none`);
  document.querySelector(
    `.artist-page-background-2`
  ).style.background = `linear-gradient(
    180deg,
    rgb(73, 73, 73) 8%,
    rgba(10, 9, 9, 1) 40%
  )`;
  document.querySelector(`body`).style.backgroundColor = `black`;
  navBar.style.backgroundColor = `black`;
  logo.src = `./img/Spotify_Logo_RGB_White.png`;
  textWhite.forEach((text) => {
    text.classList.add(`text-white`);
    text.classList.remove(`text-dark`);
  });
  // randomBackgroundColor();
  document.querySelector(`.user-log-in-2`).classList.add(`d-none`);
  document.querySelector(`.user-details-2`).classList.remove(`d-none`);
});
lightModeSecond.addEventListener(`click`, function () {
  lightModeSecond.classList.add(`d-none`);
  darkModeSecond.classList.remove(`d-none`);
  document.querySelector(`body`).style.backgroundColor = `white`;
  document.querySelector(`.nav__bar`).style.backgroundColor = `white`;
  document.querySelector(
    `.artist-page-background-2`
  ).style.background = `linear-gradient(
    180deg,
    #fff 8%,
    #fff 40%
    )`;
  navBar.style.backgroundColor = `white`;

  textWhite.forEach((text) => {
    text.classList.remove(`text-white`);
    text.classList.add(`text-dark`);
  });
  document.querySelector(`.mode-2`).style.backgroundColor = `black`;
  document.querySelector(`.mode-2`).style.color = `white`;

  logo.src = `./img/spotify-logo-vector-black-vinnytsia-ukraine-may-flat-style-icon-design-218140539.jpg`;

  // whiteBgColor();
});
/////////////////////////////////////////////////////
window.onload = function (event) {
  // $("#mymodal").modal("show");
};
//////////////////////////
// // display username on log in
let myDate = new Date();
let hrs = myDate.getHours();
const checkCurrentTime = function () {
  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return greet;
};

console.log(logInBtn);
logInBtn.addEventListener(`click`, function (e) {
  if (password.value === `12345`) {
    // logInBtn.href = `index.html`;
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
artistPage.addEventListener(`click`, function (e) {
  e.preventDefault();
  document.querySelector(`.all-sections-2`).classList.remove(`d-none`);
  document.querySelector(`.all-sections`).classList.add(`d-none`);
});
homePage.addEventListener(`click`, function (e) {
  e.preventDefault();
  document.querySelector(`.all-sections-2`).classList.add(`d-none`);
  document.querySelector(`.all-sections`).classList.remove(`d-none`);
});
//* play section
const next = document.querySelector(`.next`);
const play = document.querySelector(`.play`);
const prev = document.querySelector(`.prev`);
const progressContainer = document.querySelector(`.progress-container`);
const audio = document.querySelector(`audio`);
const musicTitle = document.querySelector(`.music-title`);
const progress = document.querySelector(`.progress`);
const cover = document.querySelector(`.playing-img`);
const musicContainer = document.querySelector(`.music-container`);

// Song Titles
const songs = [
  "Wizkid-Don-t-Dull-(JustNaija.com)",
  "Wizkid-Eme-Boyz-ft-Skales-Banky-W-(JustNaija.com)",
  "Wizkid-For-Me-ft-Wande-Coal-(JustNaija.com)",
];

// keep track of songs
let songIndex = 2;

// Update song details
const loadSong = function (song) {
  musicTitle.innerText = song;
  audio.src = `./Superstar Album/${song}.mp3`;
  cover.src = `./img/${song}.jpg`;
};
const playSong = function () {
  musicContainer.classList.add(`play`);
  play.querySelector(`i.bi`).classList.remove(`bi-play-circle`);
  play.querySelector(`i.bi`).classList.add(`bi-pause-circle`);
  audio.play();
};
const pauseSong = function () {
  musicContainer.classList.remove(`play`);
  play.querySelector(`i.bi`).classList.add(`bi-play-circle`);
  play.querySelector(`i.bi`).classList.remove(`bi-pause-circle`);
  audio.pause();
};
const prevSong = function () {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const nextSong = function () {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};
const updateProgress = function (e) {
  const movingMinutes = Math.floor(e.srcElement.currentTime);
  const totalMinutes = Math.floor(e.srcElement.duration);
  // console.log(movingMinutes, totalMinutes);
  const progressPercent = (movingMinutes / totalMinutes) * 100;
  progress.style.width = `${progressPercent}%`;
};
const setProgress = function (e) {
  const width = this.clientWidth;
  // console.log(width);
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
};
// Initially load song info DOM
loadSong(songs[songIndex]);

// event listeners
play.addEventListener(`click`, function () {
  const isPlaying = musicContainer.classList.contains(`play`);
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
// change song events
progressContainer.addEventListener(`click`, setProgress);
audio.addEventListener(`timeupdate`, updateProgress);
prev.addEventListener(`click`, prevSong);
next.addEventListener(`click`, nextSong);
audio.addEventListener(`ended`, nextSong);
