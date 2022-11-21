let music = [];

const rockX = document.querySelector(".title_rock");
const hiphopX = document.querySelector(".title_hiphop");
const indieX = document.querySelector(".title_indie");
const jazzX = document.querySelector(".title_jazz");
const reggaeX = document.querySelector(".title_reggae");
const btnOverview = document.querySelector("#btn-overview");
const btnTop10 = document.querySelector("#btn-top10");
const btnBig = document.querySelector("#btn-biggest");

//US-1: Fetch JSON data
fetch("music.json")
  .then((res) => res.json())
  .then((data) => {
    music = data;
    printMusicList(data, "Overview");
  });

//Imprimir la lista de música con su título de lista
function printMusicList(music, name) {
  let musicList = "";
  music.forEach((song, i) => {
    document.querySelector(`#title`).innerHTML = name;
    musicList += `
      <tr>
      <td>${i + 1}</td>
      <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
      <td><a href=${song.artist.url}>${song.artist.name}</a></td>
      <td><a href=${song.url}><b>${song.name}</b></a></td>
      <td>${song.listeners} listeners</td>
      </tr>`;
    document.querySelector("#musicList").innerHTML = musicList;
  });
}

//US2:Overview
const overviewList = btnOverview;
overviewList.onclick = (e) => {
  e.preventDefault();
  overview(music, e.currentTarget.textContent);
};

function overview(songs, title) {
  let allMusic = songs.sort((a, b) => b.listeners - a.listeners);
  printMusicList(allMusic, title);
}

//US3: Top 10 Listeners
const top10 = btnTop10;
top10.onclick = (e) => {
  e.preventDefault();
  getTop10(music, e.currentTarget.textContent);
};

function getTop10(songs, title) {
  let listTop10 = songs.sort((a, b) => b.listeners - a.listeners).slice(0, 10);
  printMusicList(listTop10, title);
}

// US4: rock
const listRock = rockX;
listRock.onclick = (e) => {
  e.preventDefault();
  rock(music, e.currentTarget.textContent);
};
function rock(songs, title) {
  let rockList = songs
    .filter((song) => song.genres.includes("rock"))
    .sort((a, b) => b.listeners - a.listeners);
  printMusicList(rockList, title);
}

//US5: hiphop
const listHiphop = hiphopX;
listHiphop.onclick = (e) => {
  e.preventDefault();
  hiphop(music, e.currentTarget.textContent);
};
function hiphop(songs, title) {
  let hiphopList = songs
    .filter((song) => song.genres.includes("rock"))
    .sort((a, b) => b.listeners - a.listeners);
  printMusicList(hiphopList, title);
}

//US6: indie
const listIndie = indieX;
listIndie.onclick = (e) => {
  e.preventDefault();
  indie(music, e.currentTarget.textContent);
};
function indie(songs, title) {
  let indieList = songs
    .filter((song) => song.genres.includes("indie"))
    .sort((a, b) => b.listeners - a.listeners);
  printMusicList(indieList, title);
}

//US7: jazz
const listJazz = jazzX;
listJazz.onclick = (e) => {
  e.preventDefault();
  jazz(music, e.currentTarget.textContent);
};
function jazz(songs, title) {
  let jazzList = songs
    .filter((song) => song.genres.includes("jazz"))
    .sort((a, b) => b.listeners - a.listeners);
  printMusicList(jazzList, title);
}

// US8: reggae
const listReggae = reggaeX;
listReggae.onclick = (e) => {
  e.preventDefault();
  reggae(music, e.currentTarget.textContent);
};

function reggae(songs, title) {
  let reggaeList = songs
    .filter((song) => song.genres.includes("reggae"))
    .sort((a, b) => b.listeners - a.listeners);
  printMusicList(reggaeList, title);
}

//US - The biggest artists with more listeners
const biggestList = btnBig;
biggestList.onclick = (e) => {
  e.preventDefault();
  biggest(music, e.currentTarget.textContent);
};

function biggest(songs, title) {
  let listArtists = [];

  for (let i = 0; i < songs.length; i++) {
    if (listArtists.indexOf(songs[i].artist.name) === -1) {
      listArtists.push(songs[i].artist.name);
    }
  }
  listArtists.forEach((artist) => {
    let filter = songs.filter((song) => song.artist.name.includes(artist.name));

    let listListeners = parseInt(artist.listeners);
    filter.listeners += listListeners;
  });
  let sortedArtists = listArtists.sort((a, b) => {
    let listenersA = parseInt(a.listeners);
    let listenersB = parseInt(b.listeners);
    return listenersB - listenersA;
  });

  let artist = sortedArtists[0];
  let bigList = songs.filter((song) => song.artist.name.includes(artist));
  printMusicList(bigList, title);
}
// end
