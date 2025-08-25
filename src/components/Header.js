import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
    const [auth, SetAuth] = React.useState(null);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
        navigate("/");
    };
    
    return (
        <>
            <nav className="navbar navbar-expand-lg me-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex align-items-center ms-auto"> 
                            <ul className="navbar-nav">
                                <li className="nav-item me-3">    
                                    <NavLink to="/homepage" className="nav-link px-3 rounded" style={({ isActive }) => ({backgroundColor: isActive ? "purple" : "transparent", color: isActive ? "white" : "black"})}>Home</NavLink>
                                </li>

                                <li className="nav-item me-3">
                                    <NavLink to="/profile" className="nav-link px-3 rounded" style={({ isActive }) => ({backgroundColor: isActive ? "purple" : "transparent", color: isActive ? "white" : "black"})}>About</NavLink>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className="btn btn-danger">
                                        Déconnexion
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
