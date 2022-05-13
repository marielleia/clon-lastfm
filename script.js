fetch('http://127.0.0.1:5500/clon-lastfm/music.json')
  .then(res => res.json())
  .then(data => console.log(data)) 
  .then((music) =>{
   
    /* const listaGeneral = music.filter((music) => {return{name:artist.name, name:music.name}}) 
    console.log(listaGeneral)*/
  } 
  ); 

  document.write(music);
    







