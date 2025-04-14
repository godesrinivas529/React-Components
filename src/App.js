import FormDetails from "./Components/FormDetails";
import RandomJokes from "./Components/RandomJokes";
import StrongPassword from "./Components/StrongPassword";
import CreditCardValidation from "./Components/CreditCardValidation";
import FlipCoin from "./Components/FlipCoin";
import DateTime from "./Components/DateTime";
import coinHeadImg from "./Components/assets/coin_head img.jpg"
import coinTailImg from "./Components/assets/coin_tail img.jpg"
import RollOverDice from './Components/RollOverDice';
import dice1 from './Components/assets/dice1.png'
import dice2 from './Components/assets/dice2.png'
import dice3 from './Components/assets/dice3.png'
import dice4 from './Components/assets/dice4.png'
import dice5 from './Components/assets/dice5.png'
import dice6 from './Components/assets/dice6.png'
import './App.css'
import QuizzApp from './Components/QuizzApp';

function App() {
  return (
    <>
      <DateTime />
      <FormDetails />
      <RandomJokes />
      <StrongPassword />
      <FlipCoin headImg ={coinHeadImg} tailImg = {coinTailImg}/>
      <CreditCardValidation />
      <RollOverDice dImg1 ={dice1} dImg2 ={dice2} dImg3={dice3} dImg4 ={dice4} dImg5={dice5} dImg6={dice6}  />
      <QuizzApp />
    </>

  );
}

export default App;
