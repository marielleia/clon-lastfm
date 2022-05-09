class Song {
    constructor(){
    }

    setItemLi(){
    }
    setItemGroupName(group,url){
    }
    setItemSongTitle(title){
    }
    setListeners(listeners){
    }
    getNewElement(group,url,title,listeners){
    }

}
initSongArray = async () => {
    const {tracks} = await getTopTracks();

    const arrayTracks = tracks.track.map(async (track) =>{
       const info = await  getInfoTrack(track.name,track.artist.name)
    //  console.log(info.track.toptags.tag)
       track.genres = info.track.toptags.tag.map(e => e.name);
       console.log(track);
       return track;
    })

    const fullTracks = await Promise.all(arrayTracks)

    return fullTracks;
}
const loadSongs = (tracks)=>{
    // const ul = document.querySelector('ul');
    // tracks.forEach(track => {
    //     const li = document.createElement('li');
    //     li.innerHTML=
    //     `<span>${track.name}</span>
    //     <a class="group-name" title="Play song" href=${track.url} target=_blank>play</a>
    //     <span>${track.listeners}</span><span>${JSON.stringify(track.genres)}</span>`

    //     ul.appendChild(li);
    document.write(JSON.stringify(tracks))

    // });

}
const loadOverview = () =>{
}

const loadTenListened = ()=>{

}

const loadBiggest = (e)=>{

}

const init = async ()=>{

    // const {tracks} = await getTopTracks();
    const tracks = await initSongArray();
    console.log(tracks);
    loadSongs(tracks);
    // console.log(tracks.track);

    }


window.onload = init;