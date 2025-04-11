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
        <>
            <form>
                <label>Enter Credid Card Details:</label>&nbsp;
                <input type="text" value={cardDetails} onChange={handleCardInputDetails} placeholder="please enter 16 numbers" required autoFocus/>
            </form>
            <p>{validCCNumber}</p>    
        </>
    )
}

export default CreditCardValidation