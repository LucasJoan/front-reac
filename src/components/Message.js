import React,{useEffect, useState} from "react";

function Message() {

    const [message, setMessage] = useState("");

    useEffect(() => {
    fetch('http://localhost:3000')  
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return(
    <>
        <h1>{message}</h1>
    </>
  );    
}

export default Message;