import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List id="1" header="Header" cards={[]} onRandomCard={() => {}} onDeleteCard={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const jsonTree = renderer.create(
  <List id="1" header="Header" 
  cards={[{id: 'a', title: 'card a', contents: 'the card a'}]} 
  onRandomCard={() => {}} onDeleteCard={() => {}}/>
  ).toJSON();

  expect(jsonTree).toMatchSnapshot();
});