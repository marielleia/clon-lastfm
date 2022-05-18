//Llamamos a los elementos del HTML//

let genres = document.querySelector(".generos");
let tracks = document.querySelector(".tracks");

let music = [];

//-------------------------OVERVIEW-------------------------//

function traerMusica() {
// Aquí llamamos al json con fetch//    
    fetch('music.json')
    .then(response => response.json())
// y lo mostramos en una tabla donde se ve el nombre, artista y nº listeners de todas las canciones//    
    .then ((result) => {
        music = result.sort((a,b) => b.listeners-a.listeners);  //sort: ordena las mas escuchadas a menos escuchadas//
        music.map((music) => { 
            const row = document.createElement('tr'); 
            row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${music.artist.url}>${music.artist.name}</a></td>
            <td><a href=${music.url}><b>${music.name}</b></a></td>
            <td>${music.listeners} listeners</td>`;
            tablaOverview.appendChild(row);
            //aqui hacemos que los elementos/secciones no se vean cuando cargamos la página//
        listaTop10.classList=("invisible");
        listaBiggest.classList=("invisible");
        genres.classList=("invisible");
    });
 })};
 
 //-----------------------OVERVIEW-----------------------------------//
 //Aqui hacemos que al clicar el boton Overview solamente sea visible la lista Overview//
 
 let btnOverview = document.querySelector(".btn-overview");
 let listaOverview = document.querySelector(".lista-overview");
 let tablaOverview = document.querySelector('.tracksTable1');
 let h2Overview = document.querySelector(".subtituloO");

 btnOverview.onclick = ()=> {
     listaOverview.classList=("visible");
     listaTop10.classList=("invisible");
     listaBiggest.classList=("invisible");
     genres.classList=("invisible");
    }
//--------------------TOP 10 LISTENERS---------------------------//
//Aqui hacemos que al clicar el boton Top 10 Listeners solamente sea visible la lista top 10 y se oculten las demás secciones.//

let btnTop10 = document.querySelector(".btn-top10");
let listaTop10 = document.querySelector(".lista-top10");
let tablaTop10 = document.querySelector('.tracksTable2'); 
let h2Top10 = document.querySelector(".subtitulo10");

btnTop10.onclick = ()=> {
    music
    .slice(0,10)
    .map((music) => { 
        const row = document.createElement('tr'); 
        row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${music.artist.url}>${music.artist.name}</a></td>
            <td><a href=${music.url}><b>${music.name}</b></a></td>
            <td>${music.listeners} listeners</td>`;
        tablaTop10.appendChild(row);
    listaTop10.classList=("visible");
    listaOverview.classList=("invisible");
    listaBiggest.classList=("invisible");
    genres.classList=("invisible");
});}

//------------------THE BIGGEST-------------------------------//
 //Aqui hacemos que al clicar el boton The biggest solamente sea visible la lista The biggest y se oculten las demás secciones.//

 let btnBiggest = document.querySelector(".btn-biggest");
 let listaBiggest = document.querySelector(".lista-biggest");
 let tablaBiggest = document.querySelector('.tracksTable3');
 let h2OBiggest = document.querySelector(".subtituloB");

btnBiggest.onclick  = ()=> {
        music
        .filter(music=>music.artist.name === "Radiohead")
        .map((music) => { 
            const row = document.createElement('tr'); 
            row.innerHTML += 
                ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
                <td><a href=${music.artist.url}>${music.artist.name}</a></td>
                <td><a href=${music.url}><b>${music.name}</b></a></td>
                <td>${music.listeners} listeners</td>`;
            tablaBiggest.appendChild(row); 
            listaTop10.classList=("invisible");
            listaOverview.classList=("invisible");
            listaBiggest.classList=("visible");
            genres.classList=("invisible");
});}
    
//-------------------ROCK ------------------------------//
 //Aqui hacemos que al clicar el boton Rock solamente sea visible la lista Rock y se oculten las demás secciones.//

/*let rock = document.querySelector(".rock");
let botonRock = document.querySelector(".title_rock");
let listaRock = document.querySelector(".lista-rock");
let tablaRock = document.querySelector(".tracksTable4");

botonRock.onclick  = ()=> {
    music
    .filter(music=>music.genres === includes("rock"))
    .map((music) => { 
        const row = document.createElement('tr');
        row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${music.artist.url}>${music.artist.name}</a></td>
            <td><a href=${music.url}><b>${music.name}</b></a></td>
            <td>${music.listeners} listeners</td>`;
            tablaRock.appendChild(row);
            console.log(music)
            //document.querySelector(".lista-rock").innerHTML= "Holaaaa";
        listaRock.classList=("visible");
        tracks.classList=("invisible");
        listaHiphop.classList=("invisible");
        listaIndie.classList=("invisible");
        listaJazz.classList=("invisible");
        listaReggae.classList=("invisible");
})};

//-------------------HIPHOP ------------------------------//
 //Aqui hacemos que al clicar el boton hiphop solamente sea visible la lista HIPHOP y se oculten las demás secciones.//

let hiphop = document.querySelector(".hiphop");
let botonHiphop = document.querySelector(".title_hiphop");
let listaHiphop = document.querySelector(".lista-hiphop");
let tablaHiphop = document.querySelector(".tracksTable5");

botonHiphop.onclick  = ()=> {
    music
    .filter(music => music[0].genres[1] === ("Hip-Hop"))
    music.map((music) => { 
        const row = document.createElement('tr'); 
        row.innerHTML += 
        ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
        <td><a href=${music.artist.url}>${music.artist.name}</a></td>
        <td><a href=${music.url}><b>${music.name}</b></a></td>
        <td>${music.listeners} listeners</td>`;
        tablaHiphop.appendChild(row);
        listaHiphop.classList=("visible");
        tracks.classList=("invisible");
        listaRock.classList=("invisible");
        listaIndie.classList=("invisible");
        listaJazz.classList=("invisible");
        listaReggae.classList=("invisible");
})};

//-------------------INDIE ------------------------------//
 //Aqui hacemos que al clicar el boton INDIE solamente sea visible la lista INDIE y se oculten las demás secciones.//

 let indie = document.querySelector(".indie");
 let botonIndie = document.querySelector(".title_indie");
 let listaIndie = document.querySelector(".lista-indie");
 let tablaIndie = document.querySelector(".tracksTable6");
 
 botonIndie.onclick  = ()=> {
     music
     .filter(music=>music.genres==="indie")
     music.map((music) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${music.artist.url}>${music.artist.name}</a></td>
         <td><a href=${music.url}><b>${music.name}</b></a></td>
         <td>${music.listeners} listeners</td>`;
         tablaIndie.appendChild(row);
         listaIndie.classList=("visible");
         tracks.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaRock.classList=("invisible");
         listaJazz.classList=("invisible");
         listaReggae.classList=("invisible");
 })};

 //-------------------JAZZ ------------------------------//
 //Aqui hacemos que al clicar el boton JAZZ solamente sea visible la lista JAZZ y se oculten las demás secciones.//

 let jazz = document.querySelector(".jazz");
 let botonJazz = document.querySelector(".title_jazz");
 let listaJazz = document.querySelector(".lista-jazz");
 let tablaJazz = document.querySelector(".tracksTable7");
 
 botonJazz.onclick  = ()=> {
     music
     .filter(music=>music.genres==="jazz")
     music.map((music) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${music.artist.url}>${music.artist.name}</a></td>
         <td><a href=${music.url}><b>${music.name}</b></a></td>
         <td>${music.listeners} listeners</td>`;
         tablaJazz.appendChild(row);
         listaJazz.classList=("visible");
         tracks.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaRock.classList=("invisible");
         listaIndie.classList=("invisible");
         listaReggae.classList=("invisible");
 })};

  //-------------------REGGAE ------------------------------//
 //Aqui hacemos que al clicar el boton REGGAE solamente sea visible la lista REGGAE y se oculten las demás secciones.//

 let reggae = document.querySelector(".reggae");
 let botonReggae = document.querySelector(".title_reggae");
 let listaReggae = document.querySelector(".lista-reggae");
 let tablaReggae = document.querySelector(".tracksTable8");
 
 botonReggae.onclick  = ()=> {
     music
     .filter(music=>music.genres==="reggae")
     music.map((music) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${music.artist.url}>${music.artist.name}</a></td>
         <td><a href=${music.url}><b>${music.name}</b></a></td>
         <td>${music.listeners} listeners</td>`;
         tablaReggae.appendChild(row);
         listaReggae.classList=("visible");
         tracks.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaRock.classList=("invisible");
         listaIndie.classList=("invisible");
         listaJazz.classList=("invisible");
 })};*/

//evento al cargar la página//
window.addEventListener("load",traerMusica)