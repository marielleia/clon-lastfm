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

let music = [];

// Aquí llamamos al json con el listado de canciones y lo mostramos en una tabla
//overview //
function traerMusica() {
fetch('music.json')
  .then(response => response.json())
  
  .then ((result) => {
      music = result.sort((a,b) => b.listeners-a.listeners);  
      console.log("we enter the fetch music func")
      console.log(music)
      music.map((music) => { 
        const row = document.createElement('tr'); 
        row.innerHTML += 
            ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
            <td><a href=${music.artist.url}>${music.artist.name}</a></td>
            <td><a href=${music.url}><b>${music.name}</b></a></td>
            <td>${music.listeners} listeners</td>`;
        tablaOverview.appendChild(row); 
    });
 })};

//PRUEBAS, NO FUNCIONAN TODAVIA//
//-----Filtrar las canciones más escuchadas del momento-----//
//const top10 = traerMusica();
//function filtrarTop10(music) {
//    return (music.sort ((a,b) => b.listeners-a.listeners).slice(0,9))};
//    console.log(top10);
//document.querySelector('.tracksTable2').innerHTML = "Hi!";      

//evento click en botones//

/*
btnOverview.onclick = ()=> {
    listaOverview.classList=("overview");
        document.querySelector(".lista-overview").classList = "overviewTable"
        document.querySelector(".lista-top10").classList.remove = "top10Table";
        document.querySelector(".lista-biggest").classList.remove = "biggestTable";
    }
    
    */
   btnTop10.onclick = ()=> {
        music
        .slice(0,9)
        .map((music) => { 
            const row = document.createElement('tr'); 
            row.innerHTML += 
                ` <td><img id="icon" src="https://cdn-icons-png.flaticon.com/512/5018/5018505.png"></td>
                <td><a href=${music.artist.url}>${music.artist.name}</a></td>
                <td><a href=${music.url}><b>${music.name}</b></a></td>
                <td>${music.listeners} listeners</td>`;
            tablaTop10.appendChild(row); 
        });}
    
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
        });}
    
    window.addEventListener("load",traerMusica);