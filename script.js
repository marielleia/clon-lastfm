/* El div tracks-container es el único div que existe en el HTML */
const tracksContainer = document.querySelector('.tracks-container');
window.addEventListener("load",traerMusica);

// Aquí llamamos al json con el listado de canciones y lo mostramos en una tabla
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

//Filtrar las canciones más escuchadas del momento

let btnTop10 = document.getElementById("btn-top10");

btnTop10.onclick = () => {
function findTopListened (array){
        if (array.length===0){
            return undefined;
}
let topListened="";
for (let i=0; i<array.length; i++) {
    if(array[i].length > topListened.length||0)
    topListened = array [i];
 }
 document.write(findTopListened);
}}

//-------------------indie----------------------------//
let indie = document.querySelector("#indie")
indie.addEventListener("click", listaIndie);

function listaIndie(){
   fetch("music.json")
   .then(res => res.json())
   .then(function(data){
       let html="";
       let indieArray= data.filter(song => song.genres.includes("indie") )
       indieArray.forEach(song => {
           html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
       });
       document.querySelector(".songs").innerHTML=html;
       })
       
   };