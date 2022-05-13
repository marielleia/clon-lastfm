/* El div tracks-container es el único div que existe en el HTML */
//const tracksContainer = document.querySelector('.tracks-container');

/* Fetch: Llamamos al json con el listado de canciones */
/*fetch('music.json')
  .then(response => response.json())
    .then ((music) => { 
        let listaDeMusica = music.map((music) => {
            return {artist: music.artist.name, 
                    name: music.name, 
                    listeners: music.listeners
                    }
                });

                let showData = JSON.stringify(listaDeMusica);
       document.querySelector(".tracks-container").innerHTML = showData;
    })*/

//PLANTILLA CAJA LISTAS MUSICA//
/*function musicTemplate (music){
    const card = document.createElement("div");
    card.classList.add("music-card");

//nombre cancion
const name = document.createElement("p");
name.classList.add("name");
name.textContent = music.name.charAt(0).toUpperCase() + music.name.slice(1);

card.appendChild(name);
tracksContainer.appendChild(card);
}*/

function cargarCanciones (){
    fetch('music.json')
    .then(response => response.json()) 
    .then (canciones => {
        canciones.forEach(cancion => {
            console.log(cancion)
        })
        
    })
}