import React from 'react'
import Card from './Card.js';
import './List.css';


function List(props) {
    return (
    <div className='List'>
        <header className='List-header'>
            <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
            {props.cards.map(card =>
            <Card title = {card.title} content = {card.content}/>
            )}
        </div>
    </div>
    )
}

export default List;