// write the component code here
import React from 'react';

const UserCard=()=>{
    const profilePhoto = "https:www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
    const name = "Virat Kohli";
    const email = "virat.kohli@example.com"
    const phone = "123-456-7890"
    const address = "123 Main St, Anytown,London";

    const cardStyle={
        width: "300px",
        border:'lpx solid #ccc',
        borderRadius:'8px',
        boxShadow:'0px 0px 10px rgba(0,0,0,0.2)',
        padding:'16px',
        textAlign:'center',
        margin:'16px auto',
    };
    const imageStyle ={
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    return(
        <div style={cardStyle}>
        <img src={profilePhoto} alt="Profile" style ={imageStyle}/>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
        </div>
    )
}
export default UserCard;