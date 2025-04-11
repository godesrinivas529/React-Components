import React, {useState} from "react";

const FlipCoin = () => {

    const [flipCount, setFlipCount] = useState(0);
    const [headFlipCount, setHeadFlipCount] = useState(0);
    const [tailFlipCount, setTailFlipCount] = useState(0);
    const [coinInfo, setCoinInfo] = useState('')

    const handleFlipCount = () => {
        setFlipCount((prevCount) => prevCount + 1);

        const flipGenerator = Math.floor(Math.random() * 2 )
        // 0 refers-> its a head
        if(flipGenerator === 0) {
            setHeadFlipCount((prevHeadCount) => prevHeadCount + 1)
            setCoinInfo('Its a Head')
        }
        //1 refers-> its a tail
        if(flipGenerator === 1) {
            setTailFlipCount((prevTailCount) => prevTailCount + 1)
            setCoinInfo('Its a Tail')
        }
        console.log(flipGenerator)
    }

    return (
        <>
            <h3>Let's Flip a Coin</h3>
            <h4>{coinInfo}</h4>
            <button onClick={handleFlipCount}>Flip Me!</button>
            <h5>Out of {flipCount} flips, there have been {headFlipCount} heads and {tailFlipCount} tails</h5>
        </>
    )
}

export default FlipCoin