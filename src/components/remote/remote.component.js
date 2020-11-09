import React from 'react';
import './remote.scss';
import clickOnSrc from './../../assets/audio/click-on.mp3';
import { useHistory } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Remote(props) {

 let history = useHistory();

  
  
	let audio = new Audio(clickOnSrc);

  const start = (e) => {
  	console.log(e.target);
  	e.preventDefault();
  	audio.load();
  	if(e.target.pathname){
  		history.push(e.target.pathname);
  	}
  	
    audio.play();
  }

    return (
        <div className="remote">

		<div className="controller">
		  <div className="cube">
		    <div className="cube-face top">
		    	<div className="btn-power"><a className="btn-push red" href="/" onClick={start}><PowerSettingsNewIcon /></a></div>
				<a className="btn-push numbers" href="/channel-1" onClick={start}>1</a>
				<a className="btn-push numbers"  href="/channel-2" onClick={start}>2</a>
				<a className="btn-push numbers"  href="/channel-3" onClick={start}>3</a>
				<a className="btn-push numbers"  href="/channel-4" onClick={start}>4</a>
				<a className="btn-push numbers"  href="/channel-5" onClick={start}>5</a>
				<a className="btn-push numbers"  href="/channel-6" onClick={start}>6</a>
				<a className="btn-push numbers"  href="/channel-7" onClick={start}>7</a>
				<a className="btn-push numbers"  href="/channel-8" onClick={start}>8</a>
				<a className="btn-push numbers"  href="/channel-9" onClick={start}>9</a>
				<a className="btn-push navy guide"  href="/" onClick={start}>Guide</a>
				<a className="btn-push numbers zero"  href="/channel-0" onClick={start}>0</a>
				<a className="btn-push red netflix"  href="/netflix" onClick={start}>Netflix</a>
				<div className="btn-push blue btn-volume"><a className="volume-top" onClick={start}>+<br />Vol</a>
				<a className="volume-bot" onClick={start}>_</a></div>
				<a className="btn-push mute"  onClick={start}>Mute</a>
				<div className="btn-push blue btn-channel"><a className="channel-top" onClick={start}><ExpandLessIcon /><span className="text">CH</span></a>
				<a className="channel-bot" onClick={start}><ExpandMoreIcon /></a></div>


		    </div>
		    <div className="cube-face bottom">bottom</div>
		  </div>
		</div>

		</div>);

}
	