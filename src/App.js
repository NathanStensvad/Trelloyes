import React from 'react';
import List from './List'
import './App.css';
import STORE from './STORE';


function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}


class App extends React.Component {
  state = { store: STORE };

  

  handleDeleteCard = (id) => {
    console.log("handle delete card called");
    const newCardIds = [];
    const sameCards = this.state.store.allCards;

    for(let i=0;i<this.state.store.lists.length;i++) {
      const newCardIdList = this.state.store.lists[i].cardIds.filter(cardId => cardId !== id);
      newCardIds.push({
        ...this.state.store.lists[i],
        cardIds: newCardIdList
      });
    }

    this.setState({
      store: {
        lists: newCardIds,
        allCards: omit(sameCards,id)
      }
    })
  };

  handleRandomCard = (id) => {
    console.log('handle random card called');
    console.log(id);
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard();


    const newLists = this.state.store.lists.map(list => {
      if (list.id === id) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              key = {list.id}
              id = {list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
              onRandomCard={this.handleRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;