`use strict`;
window.onload = () => {
  loadArtistPage();
  displayTrackLists();
};
const tbody = document.querySelector(`tbody`);
const audio = document.querySelector(`audio`);
let songsPreview = [];
const id = new URLSearchParams(window.location.search).get("id");
const loadArtistPage = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + id)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      document.querySelector(`h1`).innerText = `${data.name}`;
      const artistsPick = document.querySelector(`.artist-pick`);
      artistsPick.innerHTML = ``;
      artistsPick.innerHTML = displayArtistPick(data);

      const background = document.querySelector(`.artist-page-background`);
      background.style.background = `url(${data.picture_xl})`;
      background.style.backgroundSize = `cover`;
      background.style.backgroundPosition = `center`;
      background.style.backgroundRepeat = `no-repeat`;
      load();
    })
    .catch((err) => console.error(err));
};
const displayTrackLists = async () => {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`
    );
    const userData = await response.json();
    // console.log(userData.data);
    const albumCards = document.querySelector(`.album-cards`);
    const tbody = document.querySelector(`tbody`);

    albumCards.innerHTML = ``;
    tbody.innerHTML = ``;
    userData.data.forEach((element, i) => {
      songsPreview.push(element.preview);
      tbody.innerHTML += displayUsers(element, i);
      albumCards.innerHTML += displayMusicCard(element);
      load();
    });
  } catch (error) {
    console.log(error);
  }
};
const load = () => {
  document.querySelectorAll(`.songs`).forEach((song) => {
    song.addEventListener(`click`, function (e) {
      songIndex = parseInt(this.getAttribute(`id`));
      audio.src = songsPreview[songIndex];
      audio.play();
      tbody.querySelectorAll(`tr`).forEach((tr) => {
        if (tr.classList.contains(`text-success`)) {
          tr.classList.remove(`text-success`);
        }
      });
      song.classList.add(`text-success`);
      // playSong();
    });
  });
};
const displayUsers = (data, index) => {
  let songDuration = (data.duration / 60).toFixed(2);
  let songDurationMain = String(songDuration).split(`.`).join(`:`);
  return `<tr id="${index}" class="songs">
<th scope="row" class="p-0 pe-3">
<span class="">${index + 1}</span>
</th>
<td>
<div class="d-flex gap-3 align-items-center">
<img src="${data.album.cover_small}" alt="" />
<span>${data.title}</span>
</div>
</td>
<td class="text-start">${data.rank}</td>
<td>${songDurationMain}</td>
</tr>`;
};
const displayMusicCard = (data) => {
  return `<div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
  <article class="music-content">
    <figure class="position-relative">
    <a href="album.html?id=${data.album.id}">
      <img
        src="${data.album.cover_big}"
        alt="album picture"
        class="img-fluid"
      />
</a>
      <div class="play-box">
        <p class="play-btn"></p>
      </div>
    </figure>

    <figcaption>${data.title}</figcaption>
    
  </article>
</div>`;
};
const displayArtistPick = (data) => {
  return `<div class="d-flex gap-3 align-items-center">
  <figure>
    <img
      class="juice-2-img img-fluid"
      src="${data.picture_medium}"
      alt=""
    />
  </figure>
  <figcaption>
    <p class="text-muted mb-1">
      <span><i class="bi bi-music-note-beamed"></i></span>
      Posted By ${data.name}
    </p>
    <p class="fw-bold mb-0">
    ${data.name} Best Of <br />
      <span class="text-muted">Playlist</span>
    </p>
  </figcaption>
</div>`;
};
