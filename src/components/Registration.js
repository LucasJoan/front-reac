import React,{useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';


function Registration() {

    const [Registration, setRegistration] = useState([]);
    const [data,setData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/auth',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json' 
            }
        });

        const result = await response.json();
        setRegistration([...Registration, result]);

        console.log(result);
    }

    return(
        <>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setData({...data, name: e.target.value})} />
                <input type="text" onChange={e => setData({...data, username: e.target.value})} />
                <input type="text" onChange={e => setData({...data, email: e.target.value})} />
                <input type="number" onChange={e => setData({...data, age: parseInt(e.target.value)})} />
                <input type="password" onChange={e => setData({...data, password: e.target.value})} />
                <input type="text" onChange={e => setData({...data, gender: e.target.value})} />

                <button type="submit">Register</button>
            </form>
        </div>

            <Link to="/">Back to login</Link>

            

        </>
    );

}

export default Registration;