import React from 'react';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import './mute.scss';



export default function Mute(props){

	return(<span className={`mute-component ${props.muted ? 'active' : 'hidden'}`}><VolumeOffIcon /> </span>);
}