import React from 'react';
import './guide.scss';
import c from './../../assets/img/cart-designers.png';


export default function Guide(props) {
    const guidelist = [
    	{name: 'Chattanooga', channel: '1', href: '/channel-1', imgSrc: c},
    	{name: 'Austin', channel: '2', href: '/channel-2', imgSrc: c},
    	{name: 'Cart Designers', channel: '3', href: '/channel-3', imgSrc: c},
    	{name: 'MR/Spredfast', channel: '4', href: '/channel-4', imgSrc: c},
    	{name: 'Volusion & Flosports', channel: '5', href: '/channel-5', imgSrc: c},
    	{name: 'Stock Trading', channel: '6', href: '/channel-6', imgSrc: c},
    	{name: 'Travel', channel: '7', href: '/channel-7', imgSrc: c},
    	{name: 'Sports', channel: '8', href: '/channel-8', imgSrc: c},
    	{name: 'Inspiration', channel: '9', href: '/channel-8', imgSrc: c},
    	{name: 'Netflix', channel: 'N', href: '/netflix', imgSrc: c}
	];
	const channels = guidelist.map((x) => (<li><a href={x.href} ><img src={x.imgSrc} /><span className="guide-number">{x.channel}</span><span className="guide-name">{x.name}</span></a></li>));

return (<div className="guide-component"><ul>{channels}</ul></div>)
}