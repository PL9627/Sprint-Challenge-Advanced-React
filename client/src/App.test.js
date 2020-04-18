import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import PlayerList from './components/PlayerList';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('PlayerList renders', () => {
  const {container} = render(<PlayerList />);

  expect(container.firstChild.classList.contains('App')).toBe(true);
})

test('App renders', ()=> {
  const {container} = render(<App />);

  expect(container.firstChild.classList.contains('App')).toBe(true);
})
