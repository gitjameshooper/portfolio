import React, { useContext, useEffect } from 'react';
import { Context } from './../../../store';
import './channel-0.scss';
import ChannelNumber from './../channel-number/channel-number.component';
import tvStaticSrc from './../../../assets/audio/tv-static.mp3';
import Mute from './../mute/mute.component';


export default function Channel0(props) {
		const [store, setStore] = useContext(Context); 

  let audio = new Audio(tvStaticSrc);

   useEffect(() => {
   		if(!store.mute){ 
	    	audio.loop = true;
  			audio.load();
    		audio.play();
    	}

    	if(store.mute){
    		audio.pause();
    	}

	   return function cleanup () {
	      audio.pause();
	   }
	}, [])

	return(<div className={`channel-0 channels ${store.isTvOn ? 'active' : 'hidden'} `}><ChannelNumber number="0" /><Mute muted={store.mute} /></div>);

}