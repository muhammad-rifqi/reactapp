import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Add = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const em = document.getElementById("emails").value;
    // console.log(em);

    const check = async () => {
        console.log(email)
        console.log(password)

        fetch('url', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => {
                navigate('/')
            })

    }

    return (
        <div>
            {/* <input type="text" id="emails" onChange={(e)=>{e.target.value}}></input>
           <br />
           <button type="button" onClick={check}>Submit</button> */}

            <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} required></input>
            <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} required></input>
            <button type="button" onClick={check}>Submit</button>
        </div>
    )


}

export default Add

