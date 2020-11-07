import React from 'react';
import './channel-number.scss';



export default function ChannelNumber(props){

	return(<span className="channel-number">{props.number}</span>);
}