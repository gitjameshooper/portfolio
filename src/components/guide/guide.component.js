import React from 'react';
import './guide.scss';
import cdLogo from './../../assets/img/logos/cart-designers.png';
import floLogo from './../../assets/img/logos/flosports.png';
import sfLogo from './../../assets/img/logos/spredfast.jpg';
import c from './../../assets/img/logos/mass-relevance.png';
import tcLogo from './../../assets/img/logos/travel-channel.svg';
import espnLogo from './../../assets/img/logos/espn.png';
import netLogo from './../../assets/img/logos/netflix.jpg';
import inspLogo from './../../assets/img/logos/insp.jpg';
import stocksLogo from './../../assets/img/logos/stocks.jpg';
import austinLogo from './../../assets/img/logos/austin.jpg';
import chattLogo from './../../assets/img/logos/chatt.png';
import newsLogo from './../../assets/img/logos/news.png';


export default function Guide(props) {
    const guidelist = [
    	{name: 'Chattanooga', channel: '1', href: '/channel-1', imgSrc: chattLogo, info: 'Moving from Chattanooga, TN to Austin, TX'},
    	{name: 'Cart Designers', channel: '2', href: '/channel-2', imgSrc: cdLogo, info: 'Working at Cart Designers'},
    	{name: 'Spredfast', channel: '3', href: '/channel-4', imgSrc: sfLogo, info: 'Working at Spredfast'},
    	{name: 'Volusion & Flosports', channel: '4', href: '/channel-4', imgSrc: floLogo, info: 'Working at Volusion and Flosports'},
    	{name: 'Stock Trading', channel: '5', href: '/channel-5', imgSrc: stocksLogo, info: 'Stock trading Lifestyle'},
    	{name: 'Live News', channel: '6', href: '/channel-6', imgSrc: newsLogo, info: 'The latest projects I have been working'},
    	{name: 'Travel', channel: '7', href: '/channel-7', imgSrc: tcLogo, info: 'Where my sense of adventure has taken me.'},
    	{name: 'Sports', channel: '8', href: '/channel-8', imgSrc: espnLogo, info: 'Sports and fitness activities'},
    	{name: 'Inspiration', channel: '9', href: '/channel-8', imgSrc: inspLogo, info: 'People who inspire and I admire'},
    	{name: 'Netflix', channel: 'N', href: '/netflix', imgSrc: netLogo, info: 'Sit back and chill with a movie and some popcorn'}
	];
	const channels = guidelist.map((x) => (<li><a href={x.href} ><img src={x.imgSrc} /><span className="guide-number">{x.channel}</span><span className="guide-name">{x.name}</span><span className="guide-info">{x.info}</span></a></li>));

return (<div className="guide-component"><ul>{channels}</ul></div>)
}