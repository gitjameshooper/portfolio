import React from 'react';
import './channel-0.scss';
import ChannelNumber from './../channel-number/channel-number.component';
import tvStaticSrc from './../../../assets/audio/tv-static.mp3';


export default function Channel0(props) {


  let audio = new Audio(tvStaticSrc);

  const start = () => {
  	audio.loop = true;
  	audio.load();
    audio.play();
  }
  start();


	return(<div className="channel-0"><ChannelNumber number="0" />  

	</div>);

}