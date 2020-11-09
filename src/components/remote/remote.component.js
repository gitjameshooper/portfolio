import React, { useContext } from 'react';
import { Context } from './../../store';
import './remote.scss';
import clickOnSrc from './../../assets/audio/click-on.mp3';
import { useHistory } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Remote(props) {
    const [store, setStore] = useContext(Context);
    let history = useHistory();
    let audio = new Audio(clickOnSrc);


    function playBtnClickSound(path) {
        if (!store.mute) {
            audio.load();
            audio.play();
        }

        if (path) {
            history.push(path);
        }


    }

    function btnClick(e, btnName, path, channel) {

        e.preventDefault();
         // Mute
        if (store.isTvOn && btnName === 'mute') {
            setStore({ ...store, mute: !store.mute });
            return;
        }
                // Guide
        if (store.isTvOn && btnName === 'guide') {
            setStore({ ...store, guide: !store.guide });
            return;
        }

        if (!store.isTvOn && btnName === 'power') {
            playBtnClickSound(path);
            setStore({ ...store, isTvOn: true, isTvPwrBtn: true, channel: channel });
        } else if (store.isTvOn && btnName === 'power') {
            playBtnClickSound();
            setStore({ ...store, isTvOn: false, isTvPwrBtn: true, guide: false, mute: false });
        } else if (store.isTvOn) {
            setStore({ ...store, channel: channel, isTvPwrBtn: false });
            playBtnClickSound(path);
        }
        console.log(store);

    }

    return (
        <div className="remote">

		<div className="controller">
		  <div className="cube">
		    <div className="cube-face top">
		    	<div className="btn-power"><a className="btn-push red" href="/channel-1" onClick={(e) => btnClick(e, 'power', '/channel-1', '1')}><PowerSettingsNewIcon /></a></div>
				<a className="btn-push numbers" href="/channel-1" onClick={(e) => btnClick(e, 'btn1', e.target.pathname, '1')}>1</a>
				<a className="btn-push numbers"  href="/channel-2" onClick={(e) => btnClick(e, 'btn2', e.target.pathname, '2')}>2</a>
				<a className="btn-push numbers"  href="/channel-3" onClick={(e) => btnClick(e, 'btn3', e.target.pathname, '3')}>3</a>
				<a className="btn-push numbers"  href="/channel-4" onClick={(e) => btnClick(e, 'btn4', e.target.pathname, '4')}>4</a>
				<a className="btn-push numbers"  href="/channel-5" onClick={(e) => btnClick(e, 'btn5', e.target.pathname, '5')}>5</a>
				<a className="btn-push numbers"  href="/channel-6" onClick={(e) => btnClick(e, 'btn6', e.target.pathname, '6')}>6</a>
				<a className="btn-push numbers"  href="/channel-7" onClick={(e) => btnClick(e, 'btn7', e.target.pathname, '7')}>7</a>
				<a className="btn-push numbers"  href="/channel-8" onClick={(e) => btnClick(e, 'btn8', e.target.pathname, '8')}>8</a>
				<a className="btn-push numbers"  href="/channel-9" onClick={(e) => btnClick(e, 'btn9', e.target.pathname, '9')}>9</a>
				<a className="btn-push navy guide"  href="/" onClick={(e) => btnClick(e, 'guide')}>Guide</a>
				<a className="btn-push numbers zero"  href="/channel-0" onClick={(e) => btnClick(e, 'btn0', e.target.pathname, '0')}>0</a>
				<a className="btn-push red netflix"  href="/netflix" onClick={(e) => btnClick(e, 'netflix', e.target.pathname, 'netflix')}>Netflix</a>
				<div className="btn-push blue btn-volume"><a className="volume-top" onClick={btnClick}>+<br />Vol</a>
				<a className="volume-bot" onClick={btnClick}>_</a></div>
				<a className="btn-push mute"  onClick={(e) => btnClick(e, 'mute')}>Mute</a>
				<div className="btn-push blue btn-channel"><a className="channel-top" onClick={btnClick}><ExpandLessIcon /><span className="text">CH</span></a>
				<a className="channel-bot" onClick={btnClick}><ExpandMoreIcon /></a></div>


		    </div>
		    <div className="cube-face bottom">bottom</div>
		  </div>
		</div>

		</div>);

}