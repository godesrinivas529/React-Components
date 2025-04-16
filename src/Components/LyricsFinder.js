import React, { useState } from "react";

const LyricsFinder = () => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [lyrics, setLyrics] = useState('')
    const [displayError, setDisplayError] = useState('')

    const fetchedURL = async () => {
        const apiURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        try {
            const response = await fetch(apiURL);
            const data = await response.json();

            if(data.lyrics) {
                setLyrics(data.lyrics)
                setDisplayError('')
            } else {
                setLyrics('')
                setDisplayError('Lyrics not found. Please check artist and song name.')
            }
        } catch (error) {
            setDisplayError("Error fetching lyrics. Please try again.");
            console.log("Error", error)
        }
    }
    
    const handleArtistField = (e) => {
        setArtist(e.target.value);
        e.preventDefault();
    }
    const handleSongField = (e) => {
        e.preventDefault();
        setSong(e.target.value);
    }

    // useEffect(() => {
    //     if(!artist || !song) return;
    //     const URL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    //     const finalURL = `${URL}${artist}${song}`
    //     fetchedURL(finalURL); 
    // }, [artist, song])

    return <>
        <h2>Lyric Finder</h2>
        <input type="text" placeholder="Artist Name" value={artist} onChange={handleArtistField} />
        <input type="text" placeholder="Song Name" value={song} onChange={handleSongField} />
        <button onClick={() => fetchedURL(`https://api.lyrics.ovh/v1/${artist}/${song}`)}>search</button>
        {lyrics && <pre>{lyrics}</pre>}
        {displayError && <pre>{displayError}</pre>}
    </>
}
export default LyricsFinder