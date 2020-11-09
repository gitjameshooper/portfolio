import React, { useContext } from 'react';
import { Context } from './../../../store';
import './channel-2.scss';
import ChannelNumber from './../channel-number/channel-number.component';


export default function Channel2(props) {
const [store, setStore] = useContext(Context); 

	return(<div className={`channel-2 channels ${store.isTvOn ? 'active' : 'hidden'} `}>
		<div className="wrapper"><ChannelNumber number="2" />
			First tech job and making a portfolio 	WOrking at Cart Designers
				Web Developer
Company NameCart Designers
Dates EmployedApr 2013 – Oct 2013
Employment Duration7 mos
LocationAustin, Texas Area
-Built websites for small to midsize ecommerce businesses with HTML, CSS, PHP, JS(ES5)
-Used photoshop designs to create pixel perfect BigCommerce and Wordpress sites.
-Created a better client-side user experience using jQuery and Javascript.
-Sent AJAX API calls to pull third party data into the websites.
	</div>
		</div>);

}