import React, { Component } from 'react';
import Cards from './cards';
import './cardcss.css';

function Card() {
    return(
        <div className="app">
            <Cards 
            imageUrl = "https://picsum.photos/seed/picsum/200/300"
            name = "Vaibhav Gupta"
            body = 'In an essay, article, or book, an introduction is a beginning section which states the purpose and goals of the following writing. This is generally followed by the body and conclusion. '
            />
        </div>
    )
}


export default Card;