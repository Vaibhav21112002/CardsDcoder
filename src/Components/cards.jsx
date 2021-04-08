import React, { Component } from 'react';

function Cards({imageUrl,name,body/*,faceboookUrl,linkedinUrl,instagramUrl*/}) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt="Vaibhav's image"/>
            </div>
            <div className="card-name">
                <h3>
                    {name}
                </h3>
            </div>
            <div className="body-title">
                <p>
                    {body}
                </p>
            </div>
            {/* <div className="facebook-profile">
            
            </div>
            <div className="linkedin-profile">
                
            </div>
            <div className="instagram-profile">
                
            </div> */}
        </div>
    )      
}

export default Cards