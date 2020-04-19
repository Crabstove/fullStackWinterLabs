import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import hello_world from './hello_world';
import like from './like';

const Display = () => {
  let likesArray = [];

  for(let x = 0; x < 10; x++){
    likesArray.push(<like/>)
  }

  return <>
  <hello_world />
  {likesArray}
  </>
  ;
}

ReactDOM.render(
  <Display />,
  document.getElementById('root')
);

serviceWorker.unregister();