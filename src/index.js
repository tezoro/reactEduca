import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  { id: 1, message: "hi, how are you ", likesCount: 10 },
  { id: 2, message: 'hi,itm my first post', likesCount: 10 },
  { id: 2, message: 'hi,itm my first post', likesCount: 10 },
  { id: 2, message: 'hi,itm my first post', likesCount: 10 }
];
let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you ?' },
  { id: 3, message: 'what you doing&' },
  { id: 4, message: 'yeaaa im fine to' },
  { id: 5, message: 'your welcome' }
];
let dialogs = [
  { id: 1, name: 'igor' },
  { id: 2, name: 'nikita' },
  { id: 3, name: 'maksym' },
  { id: 4, name: 'ruslan' },
  { id: 5, name: 'olga' }
];
ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();