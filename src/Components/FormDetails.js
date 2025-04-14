import React from "react";

const FormDetails = () => {
    return(
        <div className="formDetails">
            <h1 className="formHeading">Form in React</h1>
            <form className="formData" >
                <label className="bold">First Name*</label>
                <input className="input" type="text" placeholder="Enter First Name" autoFocus required/> <br />
                <label className="bold">Last Name*</label>
                <input className="input" type="text" placeholder="Enter Last Name" required/> <br />
                <label className="bold">Email*</label>
                <input className="input" type="email" placeholder="Enter email" required/> <br />
                <label className="bold">Contact*</label>
                <input className="input" type="tel" placeholder="Enter Mobile number" pattern="[0-9]{10}" required/> 
                
                <h4>Gender*</h4> 
                <div className="genderData">
                    <div>
                        <input type="radio" name="gender" />
                        <label htmlFor='male'>Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" />
                        <label htmlFor='female'>Female</label>
                    </div>
                    <div>
                        <input type="radio" name="gender"/>
                        <label htmlFor='others'>Other</label>
                    </div>
                </div>

                <h4>Your Best Subject</h4>
                <div className="genderData">
                    <div>
                        <input type="checkbox"/>
                        <label>ReactJS</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>JavaScript</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>CSS3</label>
                    </div>
                </div>

                <label className="resume">Upload Resume*</label> <br />
                <input className="resumeBox" type="file" required/> <br />

                <label className="resume">Enter URL*</label> <br />
                <input className="input" type="url" placeholder="Enter url"/> <br />
                <label className="resume">Select Your Choice</label> <br /> 
                
                <select className="input">
                    <option default>Select Your Ans</option>
                    <option>Material UI</option>
                    <option>Bootstrap</option>
                    <option>Tailwind</option>
                    <option>Foundation</option>
                </select> <br />

                <label className="resume">About</label> <br />
                <textarea className="input" rows='6' placeholder="About your self"></textarea>
                
                <h4 className="bold">Submit Or Reset</h4>
                <div className="buttonWrap">
                    <button className="formButton">Reset</button>
                    <button className="formButton">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormDetails