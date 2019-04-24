import config from './config'

const { apiKey } = config // const API_KEY = config.apiKey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=australia&api_key=${apiKey}&format=json`

export default function getArtists () {
    return fetch(URL)
        .then(res => res.json())
        .then(json => json.topartists.artist)
    }
