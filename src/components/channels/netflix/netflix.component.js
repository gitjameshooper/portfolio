
import React, {useContext} from 'react';
import ChannelNumber from './../channel-number/channel-number.component';
import { Context } from './../../../store';
import './netflix.scss';


export default function Netflix(props) {
	const [store, setStore] = useContext(Context); 

	return(<div className="netflix channels"><iframe width="100%" height="100%" className={store.isTvOn ? 'active' : 'hidden'}  src="https://www.youtube.com/embed/acTdxsoa428?autoplay=1&controls=0&rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>)

}