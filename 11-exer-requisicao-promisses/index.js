function findLyrics(artist, song) {
    return fetch(
        `https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}&apikey={YOUR-API-KEY}`
    )
}

const form = document.getElementById('lyrics_form')
form.addEventListener('submit', ev => {
    ev.preventDefault()
    doSubmit()
})

async function doSubmit() {
    const lyrics_ev = document.querySelector('#lyrics')
    const artist = document.querySelector('#artist')
    const song = document.querySelector('#song')

    lyrics_ev.innerHTML =
        '<div class="spinner-grow justify-content-center" role="status"><span>Carregando...</span></div>'

    // async await
    try {
        const lyricsResponse = await findLyrics(artist.value, song.value)
        const data = await lyricsResponse.json()
        if (data.mus && data.mus.length > 0 && data.mus[0].text) {
            lyrics_ev.innerHTML = `<p>${data.mus[0].text}</p>`
        } else {
            lyrics_ev.innerHTML = 'Lyrics not found'
        }
    } catch (err) {
        lyrics_ev.innerHTML = `Ops! ${err}`
    }
}
