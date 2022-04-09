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
