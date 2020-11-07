import React from 'react';
import './remote.scss';


export default function Remote(props) {

    return (
        <div className="remote">
		
		

		<div className="controller">
		  <div className="cube">
		    <div className="cube-face top">
		    <a className="btn-push btn-power red" href="/">Power</a>
<a className="btn-push" href="/channel-1">1</a>
		<a className="btn-push"  href="/channel-2">2</a>
		<a className="btn-push"  href="/channel-3">3</a>
		<a className="btn-push"  href="/channel-4">4</a>
		<a className="btn-push"  href="/channel-5">5</a>
		<a className="btn-push"  href="/channel-6">6</a>
		<a className="btn-push"  href="/channel-7">7</a>
		<a className="btn-push"  href="/channel-8">8</a>
		<a className="btn-push"  href="/channel-9">9</a>
		<a className="btn-push navy"  href="/">Guide</a>
		<a className="btn-push"  href="/channel-0">0</a>
		<a className="btn-push red"  href="/netflix">Netflix</a>
		<a className="btn-push blue"  href="/netflix">+ Vol -</a>
		<a className="btn-push"  href="/channel-9">Mute</a>
		<a className="btn-push blue"  href="/netflix">(CH)</a>
		    </div>
		    <div className="cube-face bottom">bottom</div>
		    <div className="cube-face left">left</div>
		  </div>
		</div>

		</div>);

}