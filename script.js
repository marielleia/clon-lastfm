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

//PRUEBAS, NO FUNCIONAN TODAVIA//
//-----Filtrar las canciones más escuchadas del momento------------------//

let btnTop10 = document.getElementById("btn-top10");
btnTop10.onmouseover = () => {
    document.querySelector("top10list").classList="btn-top10"
}

function findTop10 (music){
let top10 = findTop10.sort(function (a,b) {return b-a;}).slice(0,10);
console.log(findTop10);}


/*//H7-------------------filtro de musica jazz----------------------------//
let jazz = document.querySelector("#jazz")
jazz.addEventListener("click", listaJazz);

/*function listaJazz(){
   fetch("music.json")
   .then(res => res.json())
   .then(function(music){
       let html="";
       let jazzArray= music.filter(music => music.genres.includes("jazz") )
       jazzArray.forEach(music => {
           html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${music.artist.url}> ${music.artist.name} 
           </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a>
            </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
       });
       document.querySelector(".music").innerHTML=html;
       })
       
   };

   function traerListaJazz() { 
fetch('http://127.0.0.1:5500/clon-lastfm/music.json')
 .then(response => response.json())
 .then (checkJazzList)  (music.filter(checkJazzList)
        function checkJazzList(music) {
        return music.genres.includes("jazz")})
 }
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

              let showJazzData = JSON.stringify(listaDeMusica);
     document.querySelector(".tracks-container").innerHTML = showJazzData;*/
