import React,{useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const [data, setData] = useState("");
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({});
    const [showModal, setShowModal] = useState(false);

     const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username: data.username, password: data.password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const { access_token, user } = await response.json();

        localStorage.setItem('token', access_token);
        localStorage.setItem('userId', user.id);
        localStorage.setItem('username', user.username);

        navigate('/homepage');
    } else {
        const responseData = await response.json();
        alert(responseData.message);
    }
};


        const handleRegister = async (e) => {
                e.preventDefault();
        
                const response = await fetch('http://localhost:3000/auth/', {
                    method: 'POST',
                    body: JSON.stringify(registerData),
                    headers: { 'Content-Type': 'application/json' },
                });
        
                const responseData = await response.json();
        
                if (response.ok) {
                    alert("Registration successful ✅");
                    setShowModal(false);
                } else {
                    alert(responseData.message);
                }
            };
        

    return(
        <>
        <div className="container" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
            <div className="login-form" style={{backgroundColor:'lightgray', alignItems:'center', padding:'20px', justifyContent:'center', width:'300px',}}>
                <h1 style={{alignItems:'center', justifyContent:'center', textAlign:'center', display:'flex', marginBottom:'5%'}}>Login</h1>

                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'10px', textAlign:'center'}}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={data.username} 
                        onChange={(e) => setData({...data, username: e.target.value})} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={data.password} 
                        onChange={(e) => setData({...data, password: e.target.value})} 
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                <button 
                    className="btn btn-link w-100 mt-3"
                    onClick={() => setShowModal(true)}
                >
                    Register
                </button>
            </div>
        </div>

        {showModal && (
            <div className="modal fade show d-block" style={{background: "rgba(0,0,0,0.5)"}}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Register</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <input type="text" placeholder="Name" onChange={e => setRegisterData({...registerData, name: e.target.value})} />
                                <input type="text" placeholder="Username" onChange={e => setRegisterData({...registerData, username: e.target.value})} />
                                <input type="email" placeholder="Email" onChange={e => setRegisterData({...registerData, email: e.target.value})} />
                                <input type="number" placeholder="Age" onChange={e => setRegisterData({...registerData, age: parseInt(e.target.value)})} />
                                <input type="password" placeholder="Password" onChange={e => setRegisterData({...registerData, password: e.target.value})} />
                                <input type="text" placeholder="Gender" onChange={e => setRegisterData({...registerData, gender: e.target.value})} />
                                <button type="submit" className="btn btn-success">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>

    );

}

export default Login;   