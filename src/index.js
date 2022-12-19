import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ringer from "./Assets/My Chemical Romance - Helena.mp3";

const Sound = () => {
  const audio = new Audio(ringer);
  audio.loop = true;

  return (
    <div className='soundButton'>
      <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.loop = false)}>Pause</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Sound />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

