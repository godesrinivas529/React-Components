import FormDetails from "./Components/FormDetails";
import RandomJokes from "./Components/RandomJokes";
import StrongPassword from "./Components/StrongPassword";
import CreditCardValidation from "./Components/CreditCardValidation";
import FlipCoin from "./Components/FlipCoin";
import DateTime from "./Components/DateTime";

import coinHeadImg from "./Components/assets/coin_head img.jpg"
import coinTailImg from "./Components/assets/coin_tail img.jpg"
 
import './App.css'

function App() {
  return (
    <>
      <DateTime />
      <FormDetails />
      <RandomJokes />
      <StrongPassword />
      <FlipCoin headImg ={coinHeadImg} tailImg = {coinTailImg}/>
      <CreditCardValidation />
    </>

  );
}

export default App;
