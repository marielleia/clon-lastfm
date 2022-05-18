//Llamamos a los elementos del HTML//

let genres = document.querySelector(".generos");
let tracks = document.querySelector(".tracks");

let music = [];

//-------------------------OVERVIEW-------------------------- //

function traerMusica() {
// Aquí llamamos al json con fetch//    
    fetch('music.json')
    .then(response => response.json())
    
    
// y lo mostramos en una tabla donde se ve el nombre, artista y nº listeners de todas las canciones//    
    .then ((result) => {
        music = result.sort((a,b) => b.listeners-a.listeners);  
        
        
        music.map((song) => { 
            const row = document.createElement('tr'); 
            row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${song.artist.url}>${song.artist.name}</a></td>
            <td><a href=${song.url}><b>${song.name}</b></a></td>
            <td>${song.listeners} listeners</td>`;
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
    .map((song) => { 
        const row = document.createElement('tr'); 
        row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${song.artist.url}>${song.artist.name}</a></td>
            <td><a href=${song.url}><b>${song.name}</b></a></td>
            <td>${song.listeners} listeners</td>`;
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
        .filter(song=>song.artist.name === "") //FOR para sumar todos listeners del mismo grupo

        .map((song) => { 
            const row = document.createElement('tr'); 
            row.innerHTML += 
                ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
                <td><a href=${song.artist.url}>${song.artist.name}</a></td>
                <td><a href=${song.url}><b>${song.name}</b></a></td>
                <td>${song.listeners} listeners</td>`;
            tablaBiggest.appendChild(row); 
            listaTop10.classList=("invisible");
            listaOverview.classList=("invisible");
            listaBiggest.classList=("visible");
            genres.classList=("invisible");
        });}
    
        
//-------------------ROCK ------------------------------//
 //Aqui hacemos que al clicar el boton Rock solamente sea visible la lista Rock y se oculten las demás secciones.//

let rock = document.querySelector(".rock");
let botonRock = document.querySelector(".title_rock");
let listaRock = document.querySelector(".lista-rock");
let tablaRock = document.querySelector(".tracksTable4");

rock.onclick  = ()=> {
    music
    .filter(song=>song.genres === "rock")
    console.log ("hola, esto funciona?")
    music.map((song) => { 
        const row = document.createElement('tr'); 
        row.innerHTML += 
        ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
        <td><a href=${song.artist.url}>${song.artist.name}</a></td>
        <td><a href=${song.url}><b>${song.name}</b></a></td>
        <td>${song.listeners} listeners</td>`;
        tablaRock.appendChild(row);
       
        listaRock.classList=("visible");
        tracks.classList=("invisible");
    })};

//evento al cargar la página//
window.addEventListener("load",traerMusica); 

// if genres includes 
// o
// switch


//-------------------INDIE ------------------------------//
 //Aqui hacemos que al clicar el boton Indie solamente sea visible la lista Indie y se oculten las demás secciones.//

 let indie = document.querySelector(".indie");
 let botonIndie = document.querySelector(".title_indie");
 let listaIndie = document.querySelector(".lista-indie");
 let tablaIndie = document.querySelector(".tracksTable6");
 
 indie.onclick  = ()=> {
     music
     .filter(music=>music.genres == "indie")
     
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
     })};
     console.log(music)
 //evento al cargar la página//
 window.addEventListener("load",traerMusica); 
