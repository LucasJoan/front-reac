import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from './Header';

function Dashboard() {

    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    const [auth,SetAuth] = React.useState(null);


    return(
        <>
            <Header />

                <div className='container_pro' style={{marginLeft:'5%', marginTop:'10%'}}>
                    <h1>Bienvenue {username} !</h1>
                        <p>Votre ID : {userId}</p>
                    <button onClick={() => navigate("/profile")} className='btn btn-info'>Go to About Page</button>
                </div>

                <h1>Hello git hun</h1>
        </>
    );

}
export default Dashboard;