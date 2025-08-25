import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from './Header';


function Profile() {
  const [profile, setProfile] = useState(null);
  const userId = localStorage.getItem('userId');
    const navigate = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/auth/${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.error("Erreur lors de la récupération du profil");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>

      <Header />

      <div>
        <h1>Profil de {profile?.username || "Chargement..."}</h1>
        <p>ID: {profile?.id || "-"}</p>
        <p>Email: {profile?.email || "-"}</p>
        <p>Age: {profile?.age || "-"}</p>
        <p>Gender: {profile?.gender || "-"}</p>
      </div>

      <div className="links">
          <Link to="/homepage">Back to homepage</Link>
      </div>

    </>
  );
}

export default Profile;
