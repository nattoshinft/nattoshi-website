import './App.css';
import CountDownTimer from './Hooks/CountDownTimer.js';
import logo from "./Assets/PHOTO-2022-12-15-19-44-19 2.jpg"
import twitter from "./Assets/Twitterlogo.png"
import discord from "./Assets/discordlogo.png"
import nattodude from "./Assets/NATTOSHI_draft2.png"

function App() {

  const hoursMinSecs = {hours:500, minutes: 20, seconds: 40}
  
  return (
    <div className="App">
      <div className='header'>
        <div className='socials'>
          <img src={twitter} className='socialLogo'onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "https://twitter.com/nattoshinft";
                    }}alt=''></img>
          <img src={discord} className='socialLogo'onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "https://discord.gg/q5Mhh4UVAE";
                    }}alt=''></img>
        </div>
        <div classname='logo'>
            <img src={logo} alt=''></img>
        </div>
      </div>
       <CountDownTimer hoursMinSecs={hoursMinSecs}/>
      <div className='natto'>
        <img src={nattodude} alt=''></img>
        </div>
    </div>
  );
}

export default App;