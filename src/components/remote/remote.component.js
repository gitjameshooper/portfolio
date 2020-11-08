import React from 'react';
import './remote.scss';
import clickOnSrc from './../../assets/audio/click-on.mp3';
import { useHistory } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


export default function Remote(props) {

 let history = useHistory();

  
  
	let audio = new Audio(clickOnSrc);

  const start = (e) => {
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
		    	<a className="btn-push btn-power red" href="/" onClick={start}><PowerSettingsNewIcon />Power</a>
				<a className="btn-push" href="/channel-1" onClick={start}>1</a>
				<a className="btn-push"  href="/channel-2" onClick={start}>2</a>
				<a className="btn-push"  href="/channel-3" onClick={start}>3</a>
				<a className="btn-push"  href="/channel-4" onClick={start}>4</a>
				<a className="btn-push"  href="/channel-5" onClick={start}>5</a>
				<a className="btn-push"  href="/channel-6" onClick={start}>6</a>
				<a className="btn-push"  href="/channel-7" onClick={start}>7</a>
				<a className="btn-push"  href="/channel-8" onClick={start}>8</a>
				<a className="btn-push"  href="/channel-9" onClick={start}>9</a>
				<a className="btn-push navy guide"  href="/" onClick={start}>Guide</a>
				<a className="btn-push zero"  href="/channel-0" onClick={start}>0</a>
				<a className="btn-push red netflix"  href="/netflix" onClick={start}>Netflix</a>
				<a className="btn-push blue"  href="/netflix" onClick={start}>+ Vol -</a>
				<a className="btn-push"  href="/channel-9" onClick={start}>Mute</a>
				<a className="btn-push blue"  href="/netflix" onClick={start}>(CH)</a>
		    </div>
		    <div className="cube-face bottom">bottom</div>
		  </div>
		</div>

		</div>);

}