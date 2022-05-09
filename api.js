

const apiMethods ={
    topArtists: "geo.gettopartists&country=spain",
    topTracks: "geo.gettoptracks&country=spain",
    infoTrack: "track.getInfo&track=",
    infoArtist:"&artist="
}

const getApiKey = async ()=> {
    const response = await fetch('config.json');
    if(!response.ok) throw new Error('something wrong');
    const {apiKey} = await response.json();
    return apiKey;
    };
const urlBuilder = (method,key) => `https://ws.audioscrobbler.com/2.0/?method=${method}&api_key=${key}&format=json`;


const getApiData = async (method) =>{
    try {
        const apiKey = await getApiKey();
        const response = await fetch(urlBuilder(method,apiKey));

        if (!response.ok)
            throw new Error('Network response was not OK');

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const getTopTracks =  async () => await getApiData(apiMethods.topTracks);
const getTopArtists = async () => await getApiData(apiMethods.topArtists);
const getInfoTrack  = async (track,artist) => await getApiData(apiMethods.infoTrack.concat(track,apiMethods.infoArtist,artist));
const getInfoArtist = async () => await getApiData(apiMethods.infoArtist);
