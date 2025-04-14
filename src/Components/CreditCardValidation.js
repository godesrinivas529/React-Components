import React, {useState} from "react";

const CreditCardValidation = () => {
    const [cardDetails, setCardDetails] = useState('');
    const [validCCNumber, setValidCCNumber] = useState('');
    const handleCardInputDetails = (e) => {
        const dataInput = e.target.value;
        setCardDetails(dataInput);
        console.log(cardDetails);
        if(cardDetails.length === 15 || cardDetails.length === 14 ) {
            if(cardDetails.length === 14) {
                setValidCCNumber('Valid Credit Card Number [American express card(15 digits)]')
            }
            if(cardDetails.length === 15) {
                setValidCCNumber('Valid Credit Card Number [visa/master card(16 digits)]')
            }
        } else {
            setValidCCNumber('Enter a Valid Credit Card Number')
        }
        
        
    }
    

    return (
        <div className="cardComp">
            <h3 className="cardHeading">Validating CreditCard in ReactJS</h3>
            <form className="cardForm">
                <label>Enter Credit Card Details:</label>&nbsp;
                <input type="tel" value={cardDetails} onChange={handleCardInputDetails} placeholder="please enter card details" required autoFocus/>
            </form>
            <p className="cardStatus"><strong>{validCCNumber}</strong></p>    
        </div>
    )
}

export default CreditCardValidation