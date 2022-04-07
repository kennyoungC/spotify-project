`use strict`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "09594720b0msh0821b12dc3ce55fp1d1736jsn8d3f8585dcf6",
  },
};
const albumTbody = document.querySelector(`.album-tbody`);
const albumTitleList = document.querySelector(`.album-title-list`);
function doSearch() {
  albumTitleList.innerHTML = ``;
  albumTbody.innerHTML = ``;
  const query = document.querySelector(`input[type=search]`).value;
  loadArtistAlbum(query)
    .then((response) => response.json())
    .then((data) => {
      const artistData = data.data;
      console.log(artistData);
      //* DOM MANIPULATION
      for (let i = 0; i < artistData.length; i++) {
        let eachData = artistData[i];
        let artistName = eachData.artist.name;
        let artistPics = eachData.album.cover;
        let musicTitle = eachData.title;
        let musicPreview = eachData.preview;
        let musicDuration = (eachData.duration / 60).toFixed(2);
        let musicDurationInTimeFormat = String(musicDuration)
          .split(`.`)
          .join(`:`);
        console.log(musicPreview);
        // console.log(eachData);
        // console.log(musicDurationInTimeFormat);
        // console.log(artistName);
        // console.log(musicTitle);

        const musicRows = `<tr class="">
      <th scope="row">
        <span class="">
        <!-- <i class="bi bi-bar-chart-fill"></i> -->
        ${i + 1}
      </span>
      </th>
      <td>
        <div class="d-flex gap-2 align-items-center">
          <figure>
            <img
              class="img-fluid"
              src="${artistPics}"
              alt=""
            />
          </figure>
          <span 
            >${musicTitle} &mdash; ${artistName}</span
          >
        </div>
      </td>
      <td class="text-start">1,013,238,772</td>
      <td class="px-3">${musicDurationInTimeFormat}</td>
    </tr>`;
        albumTbody.innerHTML += musicRows;

        albumTitleList.innerHTML += `<li class="list-group-item">${musicTitle}</li>`;
      }
      document.querySelector(`audio`).scr = `${musicPreview}`;
    })
    .catch((err) => console.error(err));
}
const loadArtistAlbum = (artistName) => {
  return fetch(
    `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`,
    options
  );
};
window.onload = () => {
  loadArtistAlbum(`eminem`);
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
//* this is for the dark/light mode-2
const darkModeSecond = document.querySelector(`.dark-mode-2`);
const lightModeSecond = document.querySelector(`.light-mode-2`);
const changeTextColor = function (color) {
  const str = `<div class="d-flex gap-4 align-items-center">
<div class="pause-btn"></div>
<button
  class="btn btn-outline-${
    color === `light` ? `secondary` : `dark`
  } bg-transparent rounded"
>
  <span class="text-${color}">FOLLOW</span>
</button>
<p class="text-${color} fs-4 mb-0">
  <i class="bi bi-three-dots"></i>
</p>
</div>`;
  return str;
};
const artistPageToDarkMode = function () {
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
    document.querySelector(`.sub-artist-header`).innerHTML =
      changeTextColor(`light`);

    document
      .querySelector(`.artist-page-music-section`)
      .classList.add(`text-light`);
    document
      .querySelector(`.artist-page-music-section`)
      .classList.remove(`text-dark`);
  });
};
const artistPageTolightMode = function () {
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

    document.querySelector(`.mode-2`).style.backgroundColor = `black`;
    document.querySelector(`.mode-2`).style.color = `white`;

    logo.src = `./img/spotify-logo-vector-black-vinnytsia-ukraine-may-flat-style-icon-design-218140539.jpg`;
    document.querySelector(`.sub-artist-header`).innerHTML =
      changeTextColor(`dark`);
    document
      .querySelector(`.artist-page-music-section`)
      .classList.remove(`text-light`);
    document
      .querySelector(`.artist-page-music-section`)
      .classList.add(`text-dark`);
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
const init = function () {
  HometoDarkMode();
  HometoLightMode();
  artistPageToDarkMode();
  artistPageTolightMode();
  randomBackgroundColor();
  goToArtistPage();
  goToHomePage();
  goToArtistPage2();
  goToAlbumPage();
  aside.classList.remove(`d-none`);
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
// * goto section
const goToArtistPage = function () {
  artistPage.addEventListener(`click`, function (e) {
    e.preventDefault();
    document.querySelector(`.all-sections-2`).classList.remove(`d-none`);
    document.querySelector(`.all-sections`).classList.add(`d-none`);
    document.querySelector(`.all-sections-3`).classList.add(`d-none`);
    artistPageToDarkMode();
  });
};
const goToAlbumPage = function () {
  albumPage.addEventListener(`click`, function (e) {
    e.preventDefault();
    document.querySelector(`.all-sections-2`).classList.add(`d-none`);
    document.querySelector(`.all-sections`).classList.add(`d-none`);
    document.querySelector(`.all-sections-3`).classList.remove(`d-none`);
  });
};
const goToHomePage = function () {
  homePage.addEventListener(`click`, function (e) {
    e.preventDefault();
    document.querySelector(`.all-sections-2`).classList.add(`d-none`);
    document.querySelector(`.all-sections-3`).classList.add(`d-none`);
    document.querySelector(`.all-sections`).classList.remove(`d-none`);
    init();
  });
};
const goToArtistPage2 = function () {
  wizkidPage.addEventListener(`click`, function () {
    document.querySelector(`.all-sections-2`).classList.remove(`d-none`);
    document.querySelector(`.all-sections`).classList.add(`d-none`);
    playSong();
  });
};
//* play section
const WizkidMusicTitles = document.querySelectorAll(`tbody tr figure + span`);
const tbody = document.querySelector(`tbody`);
const next = document.querySelector(`.next`);
const play = document.querySelector(`.play`);
const prev = document.querySelector(`.prev`);
const progressContainer = document.querySelector(`.progress-container`);
const audio = document.querySelector(`audio`);
const musicTitle = document.querySelector(`.music-title`);
const progress = document.querySelector(`.progress`);
const cover = document.querySelector(`.playing-img`);
const musicContainer = document.querySelector(`.music-container`);
const bigPlayBtn = document.querySelector(`.artist-page-play`);
const bigPauseBtn = document.querySelector(`.pause-btn`);
// Song Titles
const songs = [
  "Holla At Your Boy",
  "Don't Dull",
  "Eme-Boyz-ft-Skales-Banky-W",
  "For Me ft Wande-Coal",
  "Gidi Girl",
  "Love My Baby",
  "No lele",
  "Oluwa Lo Ni",
  "Pakurumo",
  "Say My Name",
  "Scatter The Floor",
  "Shout Out",
  "Slow Whine",
  "Tease Me Bad Guys",
  "Wad-Up ft D-prince",
  "What you wanna do",
  "Wiz Party Bonus Freestyle Leak",
];
// creating wizkid's 17 music album
for (let i = 0; i < 17; i++) {
  tbody.innerHTML += ` <tr class="song" id="${i}">
  <th scope="row">${i + 1}</th>
  <td>
    <div class="d-flex gap-2 align-items-center">
      <figure>
        <img
          class="img-fluid wiz-img"
          src="./img/Wizkid images/wizkid ${i + 1}.jpg"
          alt=""
        />
      </figure>
      <span>${songs[i]}</span>
    </div>
  </td>
  <td>${randomIntFromInterval(250000 * i, 900000)}</td>
  <td class="duration">3:34</td>
</tr>`;
}
// generate random number
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let songIndex = 0;
document.querySelectorAll(`.song`).forEach((song) => {
  song.addEventListener(`click`, function (e) {
    songIndex = parseInt(this.getAttribute(`id`));
    // console.log(songIndex);
    loadSong(songs[songIndex]);
    tbody.querySelectorAll(`tr`).forEach((tr) => {
      if (tr.classList.contains(`text-success`)) {
        tr.classList.remove(`text-success`);
      }
    });
    song.classList.add(`text-success`);
    playSong();
  });
});
// Update song details
const loadSong = function (song) {
  musicTitle.innerText = song;
  audio.src = `./Superstar Album/${song}.mp3`;
  cover.src = `./img/Wizkid images/wizkid ${songIndex + 1}.jpg`;
};
const playSong = function () {
  musicContainer.classList.add(`play`);
  play.querySelector(`i.bi`).classList.remove(`bi-play-circle`);
  play.querySelector(`i.bi`).classList.add(`bi-pause-circle`);
  bigPlayBtn.classList.remove(`play-btn`);
  bigPlayBtn.classList.add(`pause-btn`);
  audio.play();
};
const pauseSong = function () {
  musicContainer.classList.remove(`play`);
  play.querySelector(`i.bi`).classList.add(`bi-play-circle`);
  play.querySelector(`i.bi`).classList.remove(`bi-pause-circle`);
  bigPlayBtn.classList.add(`play-btn`);
  bigPlayBtn.classList.remove(`pause-btn`);
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
  let songDuration = (totalMinutes / 60).toFixed(2);
  let songDurationMain = String(songDuration).split(`.`).join(`:`);
  document.querySelector(`.minutes-end`).textContent = `${
    isNaN(songDuration) ? ` ` : songDurationMain
  }`;
  const progressPercent = (movingMinutes / totalMinutes) * 100;
  progress.style.width = `${progressPercent}%`;
};
const setProgress = function (e) {
  const width = this.clientWidth;
  // console.log(width);
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
  console.log(audio.currentTime);
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
bigPlayBtn.addEventListener(`click`, playSong);
// bigPauseBtn.addEventListener(`click`, pauseSong);
