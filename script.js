/* El div tracks-container es el único div que existe en el HTML */
const tracksContainer = document.querySelector('.tracks-container');

/* Fetch: Llamamos al json con el listado de canciones */
const tabla = document.querySelector('.trackstable'); 
    function traerMusica() { 
fetch('http://127.0.0.1:5500/clon-lastfm/music.json')
  .then(response => response.json())
  .then ((music) => { music.map((music) => { 
      const row = document.createElement('tr'); 
      row.innerHTML += 

      ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
        <td>${music.artist.name}</td> 
        <td>${music.name}</td> 
        <td>${music.listeners}</td>`;
        tabla.appendChild(row); 
    });
 }) 
} 
traerMusica();

                let showData = JSON.stringify(listaDeMusica);
       document.querySelector(".tracks-container").innerHTML = showData;
