import React, {useState, useEffect} from "react";



const RandomJokes = () => {
    const URL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single&idRange=0-100&amount=10';

    
    

    const [jokesData, setJokesData] = useState([]);
    const [displayedJoke, setDisplayedJoke] = useState('');

    const fetchedData = async (apiURL) => {
        const response = await fetch(apiURL);
        const apiData = await response.json();
        setJokesData(apiData.jokes);
   
    }

    useEffect(() => {
        fetchedData(URL);
    }, [])

    const randomJokeGenerator = (e) => {
        e.preventDefault();
        const randomJokeLength = jokesData[Math.floor(Math.random() * jokesData.length)]
        setDisplayedJoke(randomJokeLength.joke);

    }
    
    return (
        <>
            <h3>Joke Generator Using React And Joke API</h3>
            <button onClick={randomJokeGenerator}>Click to generate a joke</button>
            <div>
                {displayedJoke}
            </div>
            
        </>
    )
}

export default RandomJokes