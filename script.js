/* El div tracks-container es el único div que existe en el HTML */
const tracksContainer = document.querySelector('.tracks-container');

/* Fetch: Llamamos al json con el listado de canciones */
fetch('music.json')
  .then(response => response.json())
  .then(data => console.log(data))


/*fetchManyTracks: Nos permite llamar a la X número de veces para ver diferentes tracks 
function fetchManyTracks(number) {
    for (let i = 0; i <= number; i++) {
        fetchOneTrack(i);
    }}

console.log(fetchOneTrack(1));

//-------------------------create music list-----------------------//

function createTrackLine(track) {

//---------------------create line/div --------------------------//
const card = document.createElement("div");
card.classList.add("track-card");

// llamar cancion//

//imagen-container//
const spriteContainer = document.createElement("div");
spriteContainer.classList.add("img-container");

//-----------------------imagen icono play-------------------------//
const sprite = document.createElement("img");
sprite.src = track.sprites.front_default;
    
//-------------------------nombre artista-------------------------//
const artist = document.createElement("p");
artist.classList.add("artist-name");
artist.textContent = artist.charAt(0).toUpperCase() + artist.slice(1);

//-------------------------nombre cancion-------------------------//
const name = document.createElement("p");
name.classList.add("song-name");
name.textContent = name.charAt(0).toUpperCase() + name.slice(1);

//------------------------link a más info--------------------------//
const aTag = document.createElement ('a');
aTag.classList.add('link');
aTag.setAttribute('href', 'music.html');
aTag.textContent = "More info";
    
//Añadir elementos a la card//
spriteContainer.appendChild(sprite);
card.appendChild(spriteContainer);
card.appendChild(artist);
card.appendChild(name);
card.appendChild(aTag);
    
tracksContainer.appendChild(card);

fetchManyTracks(5);
}*/