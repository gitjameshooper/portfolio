import React, { useContext } from 'react';
import { Context } from './../../../store';
import './channel-3.scss';
import ChannelNumber from './../channel-number/channel-number.component';


export default function Channel3(props) {
const [store, setStore] = useContext(Context); 

	return(<div className={`channel-3 channels ${store.isTvOn ? 'active' : 'hidden'} `}>
		<div className="wrapper"><ChannelNumber number="3" /> 	WOrking at Mass Relevance and Spredfast
Front End Web Developer
Company Name Mass Relevance
Dates EmployedNov 2013 – Apr 2014
Employment Duration6 mos
LocationAustin, Texas Area
Merged with Spredfast.

Front End Web Developer
Company NameSpredfast
Dates EmployedApr 2014 – Mar 2015
Employment Duration1 yr
LocationAustin, Texas Area
-UX developer for marketing campaigns using social media data to make visualizations/microsites
-Worked with top-tier clients such as the Oakley, MTV, iHeartradio, MasterCard, LaSenza, IBM
-Collaborated with project managers and designers to meet campaign deadlines on tight schedules
-Wrote in JS(ES5), CSS3 and HTML5 with a focus on clean code, fast page loads, responsiveness
-Utilized libraries including: Bootstrap, jQuery, Underscore.js, D3.js</div></div>);

}