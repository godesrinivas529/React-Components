import React from "react";

const FormDetails = () => {
    return(
        <>
            <h1>Form in React</h1>
            <form>
                <label>First Name*</label>
                <input type="text" placeholder="Enter First Name" autofocus required/> <br />
                <label>Last Name*</label>
                <input type="text" placeholder="Enter Last Name" required/> <br />
                <label>Email*</label>
                <input type="email" placeholder="Enter email" required/> <br />
                 <label>Contact*</label>
                <input type="tel" placeholder="Enter Mobile number" pattern="[0-9]{10}" required/> 
                <div>
                    <h5>Gender*</h5> 
                    <input type="radio" name="gender" />
                    <label for='male'>Male</label>
                    <input type="radio" name="gender" />
                    <label for='female'>Female</label>
                    <input type="radio" name="gender"/>
                    <label for='others'>Other</label>
                </div>
                <div>
                    <h5>Your Best Subject</h5>
                    <input type="checkbox"/>
                    <label>ReactJS</label>
                    <input type="checkbox"/>
                    <label>JavaScript</label>
                    <input type="checkbox"/>
                    <label>CSS3</label>
                </div>
                <label>Upload Resume*</label> <br />
                <input type="file" required/> <br />

                <label>Enter URL*</label> <br />
                <input type="url" placeholder="Enter url"/> <br />
                <label>Select Your Choice</label> <br /> 
                <select>
                    <option default>Select Your Ans</option>
                    <option>Material UI</option>
                    <option>Bootstrap</option>
                    <option>Tailwind</option>
                    <option>Foundation</option>
                </select> <br />
                <label>About</label> <br />
                <textarea placeholder="About your self"></textarea>
                <h5>Submit Or Reset</h5>
                <button>Reset</button>
                <button>Submit</button>
            </form>
        </>
    )
}

export default FormDetails