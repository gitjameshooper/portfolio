import React, { useContext } from 'react';
import { Context } from './../../../store';
import './channel-9.scss';
import ChannelNumber from './../channel-number/channel-number.component';
import Mute from './../mute/mute.component';


export default function Channel9(props) {
const [store, setStore] = useContext(Context); 

	return(<div className={`channel-9 channels ${store.isTvOn ? 'active' : 'hidden'} `}>
		<div className="wrapper"><ChannelNumber number="9" /><Mute muted={store.mute} />  My heros and quotes I live by .  Inspiration channel</div></div>);

}