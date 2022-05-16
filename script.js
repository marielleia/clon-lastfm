//Llamamos a los elementos del HTML//
let btnTop10 = document.querySelector("#btn-top10");
let btnOverview = document.querySelector("#btn-overview");
let btnBiggest = document.querySelector("#btn-biggest");

let listaOverview = document.querySelector(".lista-overview");
let listaTop10 = document.querySelector(".lista-top10");
let listaBiggest = document.querySelector(".lista-biggest");

let tablaOverview = document.querySelector('.tracksTable1');
let tablaTop10 = document.querySelector('.tracksTable2'); 
let tablaBiggest = document.querySelector('.tracksTable3');

let h2Overview = document.querySelector("#subtituloO");
let h2Top10 = document.querySelector("#subtitulo10");
let h2OBiggest = document.querySelector("#subtituloB");

window.addEventListener("load",traerMusica);

// Aquí llamamos al json con el listado de canciones y lo mostramos en una tabla

    function traerMusica() { 
fetch('http://127.0.0.1:5500/clon-lastfm/music.json')
  .then(response => response.json())
  .then ((music) => {music.map((music) => { 
      const row = document.createElement('tr'); 
      row.innerHTML += 
      ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
        <td><a href=${music.artist.url}>${music.artist.name}</a></td> 
        <td><a href=${music.url}><b>${music.name}</b></a></td> 
        <td>${music.listeners} listeners</td>`;
        tablaOverview.appendChild(row); 
    });
 })


/*let showData = JSON.stringify(listaMusica);
document.querySelector(".lista-overview").innerHTML = showData;
traerMusica();}*/
                


//PRUEBAS, NO FUNCIONAN TODAVIA//
//-----Filtrar las canciones más escuchadas del momento------------------//


//evento click en botones//


/*
btnOverview.onclick = ()=> {
    listaOverview.classList=("overview");
    document.querySelector(".lista-overview").classList = "overviewTable"
    document.querySelector(".lista-top10").classList.remove = "top10Table";
    document.querySelector(".lista-biggest").classList.remove = "biggestTable";
}

btnTop10.onclick = ()=> {
    listaTop10.classList=("top10");
    document.querySelector(".lista-top10").classList= "top10Table";
    document.querySelector(".lista-overview").classList.remove = "overviewTable";
    document.querySelector(".lista-biggest").classList.remove = "biggestTable";
}

btnBiggest.onclick  = ()=> {
    listaBiggest.classList=("biggest");
    document.querySelector(".lista-biggest").classList = "biggestTable";
    document.querySelector(".lista-top10").classList.remove = "top10Table"
    document.querySelector(".lista-overview").classList.remove = "overviewTable";
}

btnTop10.addEventListener("click", showTop10);
        document.querySelector(".subtitulo").innerHTML = "Top 10 Listened";
        function showTop10 (){
            fetch('http://127.0.0.1:5500/clon-lastfm/music.json')
            .then(response => response.json())
            .then (function (music) {
                let top10 = "";
                let showTop10 = music.listeners.sort((a,b) => a-b).slice(0,10); //sort sirve para filtrar
                document.querySelector(".trackstable").innerHTML = top10;
                        shopListaTop10();}
                )}
    

    ///H7-------------------filtro de musica jazz----------------------------//
/*let jazz = document.querySelector("#jazz")
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
