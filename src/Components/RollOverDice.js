import React, {useState} from "react";

const RollOverDice = ({dImg1, dImg2, dImg3, dImg4, dImg5, dImg6}) => {
    const imgdice1 = <img className="diceOneImg" src={dImg1} alt="Dice of One"/>
    const imgdice2 = <img className="allDices" src={dImg2} alt="Dice of two"/>
    const imgdice3 = <img className="allDices" src={dImg3} alt="Dice of three"/>
    const imgdice4 = <img className="allDices" src={dImg4} alt="Dice of four"/>
    const imgdice5 = <img className="allDices" src={dImg5} alt="Dice of five"/>
    const imgdice6 = <img className="allDices" src={dImg6} alt="Dice of six"/>

    const diceImageArr = [imgdice1, imgdice2, imgdice3, imgdice4, imgdice5, imgdice6];

    const [diceSectionOne, setDiceSectionOne] = useState(imgdice1)
    const [diceSectionTwo, setDiceSectionTwo] = useState(imgdice1)

    const rollOver = () => {
        const numberGeneratorForDiceOne = Math.floor(Math.random() * 6 + 1);
        const numberGeneratorForDiceTwo = Math.floor(Math.random() * 6 + 1);

        if (numberGeneratorForDiceOne >= 1 && numberGeneratorForDiceOne <= 6) {
            setDiceSectionOne(diceImageArr[numberGeneratorForDiceOne - 1]);
        }
        if (numberGeneratorForDiceTwo >= 1 && numberGeneratorForDiceTwo <= 6) {
            setDiceSectionTwo(diceImageArr[numberGeneratorForDiceTwo - 1]);
        }
}

    return (
        <div className="diceComponent">
        <h3 className="diceHead">Dice RollOver Using ReactJS</h3>
        <div className="imagedice">
            <h3 className="allDices">{diceSectionOne} {diceSectionTwo}</h3>
        </div>
        <button className="diceButton" onClick={rollOver}>Roll Dice!</button>
    </div>
    )
    
}

export default RollOverDice