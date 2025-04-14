import React,{useState} from "react";

const StrongPassword = () => {
    const [userData, setUserData] = useState('')
    const [passwordStrength, setPasswordStrength] = useState('');

    const evaluatePasswordStrength = (userData) => {
        let score = 0;
        if(userData.length >= 8) {
            score++
        }
        if(/[A-Z]/.test(userData)) {
            score++
        }
        if(/[a-z]/.test(userData)) {
            score++
        }
        if(/[0-9]/.test(userData)) {
            score++
        }
        if(/[@$!%*?&]/.test(userData)) {
            score++
        }

        switch(score) {
            case 5:
                return "Is Strong Password";
            case 4:
                return "Strong";
            case 3:
                return "Medium";
            case 2:
                return "Weak";
            default:
                return "Please Enter Strong Password"
        }
    }

    const handleUserData = (e) => {
        const inputField = e.target.value;
        setUserData(inputField);
        console.log(userData)
        setPasswordStrength(evaluatePasswordStrength(inputField))
    }

    return (
        <div className="passwordComp">
            <h3 className="passwordHeading">Checking Password Strength in ReactJS</h3>
            <form className="passwordForm">
                <label>Enter Password:</label>
                <input type="password" id="password"  aria-hidden="true" name="password" autoComplete="new-password" value={userData} onChange={handleUserData} placeholder="Abcd@123" required/>
            </form>
            <p className="passwordStatus"><strong>{passwordStrength}</strong></p>
        </div>
    )
}

export default StrongPassword;