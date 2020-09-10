import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card id="1" title="Card title" content="Stuff" onDeleteCard={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
  const jsonTree = renderer.create(
    <Card id="1" title="Card title" content="Stuff" onDeleteCard={() => {}}/>
  ).toJSON();

  expect(jsonTree).toMatchSnapshot();
});