import React from 'react'
import Card from './Card.js';
import './List.css';


function List(props) {
    return (
        <div className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
                <button
                onClick = {() => props.onRandomCard(props.id)}
                type="button"
                >Add Random Card</button>
            </header>
            <div className='List-cards'>
                {props.cards.map(card =>
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onDeleteCard={props.onDeleteCard}
                        onRandomCard={props.onRandomCard}
                    />
                )}
            </div>
        </div>
    )
}

export default List;