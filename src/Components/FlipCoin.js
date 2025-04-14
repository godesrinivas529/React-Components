import React, {useState} from "react";

const FlipCoin = ({headImg, tailImg}) => {

    const [flipCount, setFlipCount] = useState(0);
    const [headFlipCount, setHeadFlipCount] = useState(0);
    const [tailFlipCount, setTailFlipCount] = useState(0);
    const [coinInfo, setCoinInfo] = useState()


    const handleFlipCount = () => {
        setFlipCount((prevCount) => prevCount + 1);

        const flipGenerator = Math.floor(Math.random() * 2 )
        // 0 refers-> its a head
        if(flipGenerator === 0) {
            setHeadFlipCount((prevHeadCount) => prevHeadCount + 1)
            setCoinInfo(headImg)
            
        } else {
            // 1 refers-> its a head
            setTailFlipCount((prevTailCount) => prevTailCount + 1)
            setCoinInfo(tailImg); 
        }
        console.log(flipGenerator)
    }

    return (
        <div className="flipComp">
            <h3 className="flipHeading">Let's Flip a Coin</h3>
            <img className="flipImgText" alt="coin" src= {coinInfo} />
            <button className="flipButton" onClick={handleFlipCount}>Flip Me!</button>
            <h5 className="flipContentText">Out of {flipCount} flips, there have been {headFlipCount} heads and {tailFlipCount} tails</h5>
        </div>
    )
}

export default FlipCoin