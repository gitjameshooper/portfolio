import React, { useContext, useState } from 'react';
import { Context } from './../../../store';
import './channel-1.scss';
import ChannelNumber from './../channel-number/channel-number.component';
import Mute from './../mute/mute.component';


export default function Channel1(props) {
	const [store, setStore] = useContext(Context); 

    return (<div className={`channel-1 channels ${store.isTvOn && store.isTvPwrBtn ? 'active animate':  store.isTvOn ? 'active' : 'hidden'} `}><span className={`intro ${store.isTvOn && store.isTvPwrBtn ? 'animate': 'hidden'}`}></span>
		<section className="wrapper">
		<ChannelNumber number="1" />
		<Mute muted={store.mute} />
		<h3>Intro about growing up in chattanooga</h3>
		<p>
		Hello, I am James Hooper. I grew up in Chattanoga, TN a beautiful city nested between 2 mountains with a river running through it.
		 I atteneded The University of Tenn. at Chattanooga and graduated with a Bachelor's Degree in Business. I worked my way through college and had a great experience fixing up a house.
		 I love the city, but after college I knew there was something bigger for me. So I bought a truck, said my goodbyes, and moved to Austin, TX.</p>
		 [Intro pic]
		[Nice picture of the city for bg]
		Chattanoga. Bachelor's in Business. talk about House project. Moving to Austin
		[photo of me graduating college]
		show a map going from Chattanooga to Austin.  [picture of me with my green truck]
		</section>
		</div>);

}