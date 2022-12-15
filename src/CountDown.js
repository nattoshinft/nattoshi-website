import './App.css';
import CountDownTimer from './Hooks/CountDownTimer.js';
import "./CountDown.css"

function CountDown() {

  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  
  return (
    <div className="CountDown">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default CountDown;