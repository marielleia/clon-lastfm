
//---------------Llamamos a los elementos del HTML--------------------------------------//

let genres = document.querySelector(".generos");
let tracks = document.querySelector(".tracks");

//Llamamos a más elementos en cada sección//

let music = [];

//--------------------------------------OVERVIEW--------------------------------------//
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
 
 //----------------------------------------OVERVIEW-------------------------------------------//
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

//------------------THE BIGGEST-------------------------------// NO HAY USER STORY
 //Aqui hacemos que al clicar el boton The biggest solamente sea visible la lista The biggest y se oculten las demás secciones.//

 let btnBiggest = document.querySelector(".btn-biggest");
 let listaBiggest = document.querySelector(".lista-biggest");
 let tablaBiggest = document.querySelector('.tracksTable3');
 let h2OBiggest = document.querySelector(".subtituloB");

btnBiggest.onclick  = ()=> {
        music
        .filter(song=>song.artist.name === "Radiohead")
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
/*
export const probandoTest = (message) => "Hola, " + message;
    
    console.log( probandoTest("Hola, sale la lista de música?"));*/

//-------------------ROCK ------------------------------//
 //Aqui hacemos que al clicar el boton Rock solamente sea visible la lista Rock y se oculten las demás secciones.//

let rock = document.querySelector(".rock");
let botonRock = document.querySelector(".title_rock");
let listaRock = document.querySelector(".lista-rock");
let tablaRock = document.querySelector(".tracksTable4");

botonRock.onclick  = ()=> {
    music
    .filter(song => song.genres.includes("rock"))
    console.log(music)
    .map((song) => {
        const row = document.createElement('tr'); 
        row.innerHTML += 
        ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
        <td><a href=${song.artist.url}>${song.artist.name}</a></td>
        <td><a href=${song.url}><b>${song.name}</b></a></td>
        <td>${song.listeners} listeners</td>`;
        tablaRock.appendChild(row);
        listaRock.classList=("visible");
        tracks.classList=("invisible");
        listaHiphop.classList=("invisible");
        listaIndie.classList=("invisible");
        listaJazz.classList=("invisible");
        listaReggae.classList=("invisible");
})}

//-------------------HIPHOP ------------------------------//
 //Aqui hacemos que al clicar el boton HIPHOP solamente sea visible la lista HIPHOP y se oculten las demás secciones.//
 
 let hiphop = document.querySelector(".hiphop");
 let botonHiphop = document.querySelector(".title_hiphop");
 let listaHiphop = document.querySelector(".lista-hiphop");
 let tablaHiphop = document.querySelector(".tracksTable5");
 
 botonHiphop.onclick  = ()=> {
     music
     .filter(song=>song.genres == "Hip-Hop")
     
     music.map((song) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${song.artist.url}>${song.artist.name}</a></td>
         <td><a href=${song.url}><b>${song.name}</b></a></td>
         <td>${song.listeners} listeners</td>`;
         tablaHiphop.appendChild(row);
         listaHiphop.classList=("visible");
         tracks.classList=("invisible");
         listaRock.classList=("invisible");
         listaIndie.classList=("invisible");
         listaJazz.classList=("invisible");
         listaReggae.classList=("invisible");
})};

//-------------------INDIE ------------------------------//
 //Aqui hacemos que al clicar el boton Indie solamente sea visible la lista Indie y se oculten las demás secciones.//
 
 let indie = document.querySelector(".indie");
 let botonIndie = document.querySelector(".title_indie");
 let listaIndie = document.querySelector(".lista-indie");
 let tablaIndie = document.querySelector(".tracksTable6");
 
 botonIndie.onclick  = ()=> {
     music
     .filter(song=>song.genres == "indie")
     .map((song) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${song.artist.url}>${song.artist.name}</a></td>
         <td><a href=${song.url}><b>${song.name}</b></a></td>
         <td>${song.listeners} listeners</td>`;
         tablaIndie.appendChild(row);
         listaIndie.classList=("visible");
         tracks.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaRock.classList=("invisible");
         listaJazz.classList=("invisible");
         listaReggae.classList=("invisible");
})};

//-------------------JAZZ ------------------------------//
 //Aqui hacemos que al clicar el boton JAZZ solamente sea visible la lista Jazz y se oculten las demás secciones.//

 let Jazz = document.querySelector(".jazz");
 let botonJazz = document.querySelector(".title_jazz");
 let listaJazz = document.querySelector(".lista-jazz");
 let tablaJazz = document.querySelector(".tracksTable4");
 
 botonJazz.onclick  = ()=> {
     music
     .filter(song => song.genres.includes("jazz"))
     console.log(music)
     .map((song) => {
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${song.artist.url}>${song.artist.name}</a></td>
         <td><a href=${song.url}><b>${song.name}</b></a></td>
         <td>${song.listeners} listeners</td>`;
         tablaJazz.appendChild(row);
         listaJazz.classList=("visible");
         tracks.classList=("visible");
         listaReggae.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaRock.classList=("invisible");
         listaIndie.classList=("invisible");
 })}

 //-------------------REGGAE ------------------------------//
 //Aqui hacemos que al clicar el boton Reggae solamente sea visible la lista Reggae y se oculten las demás secciones.//
 
 let Reggae = document.querySelector(".reggae");
 let botonReggae = document.querySelector(".title_reggae");
 let listaReggae = document.querySelector(".lista-reggae");
 let tablaReggae = document.querySelector(".tracksTable8");
 
 botonReggae.onclick  = ()=> {
     music
     .filter(song=>song.genres == "reggae")
     music.map((song) => { 
         const row = document.createElement('tr'); 
         row.innerHTML += 
         ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
         <td><a href=${song.artist.url}>${song.artist.name}</a></td>
         <td><a href=${song.url}><b>${song.name}</b></a></td>
         <td>${song.listeners} listeners</td>`;
         tablaReggae.appendChild(row);
         listaReggae.classList=("visible");
         tracks.classList=("invisible");
         listaRock.classList=("invisible");
         listaHiphop.classList=("invisible");
         listaJazz.classList=("invisible");
         listaIndie.classList=("invisible");
})};

// -----------------------------------------SWITCH ------------------------------------------------------------------------------
/*let generos = "genres"
 
 let rock = document.querySelector(".rock");
 let botonRock = document.querySelector(".title_rock");
 let listaRock = document.querySelector(".lista-rock");
 let tablaRock = document.querySelector(".tracksTable4");

 let hiphop = document.querySelector(".hiphop");
 let botonHiphop = document.querySelector(".title_hiphop");
 let listaHiphop = document.querySelector(".lista-hiphop");
 let tablaHiphop = document.querySelector(".tracksTable5");

 let indie = document.querySelector(".indie");
 let botonIndie = document.querySelector(".title_indie");
 let listaIndie = document.querySelector(".lista-indie");
 let tablaIndie = document.querySelector(".tracksTable6");

 let Jazz = document.querySelector(".jazz");
 let botonJazz = document.querySelector(".title_jazz");
 let listaJazz = document.querySelector(".lista-jazz");
 let tablaJazz = document.querySelector(".tracksTable4");

 let Reggae = document.querySelector(".reggae");
 let botonReggae = document.querySelector(".title_reggae");
 let listaReggae = document.querySelector(".lista-reggae");
 let tablaReggae = document.querySelector(".tracksTable8");

  .filter(song=>song.genres == "")

 switch (expresión) {

    case rock:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [".tracksTable4";]

    case hiphop:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [".tracksTable5";]

     case indie:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [".tracksTable6";]
      
    case jazz:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [".tracksTable4";]
    case reggae:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [".tracksTable8";]
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      ["No entiendo"]
  }
*/

//evento al cargar la página//
window.addEventListener("load",traerMusica);
