import React from 'react';
import './Notifications.css';
import closeicon from './close-icon.png';
import { getLatestNotification } from './utils';

export const Noti = () => {
	const btn = {
		position: 'absolute',
		right: '1rem',
		top: '1rem',
		border: 'none',
		background: 'transparent',
		outline: 'none'
	};

	const cicon = {
	    width: '10px',
	    height: '10px',
	};
	
	return (
		<div className='Notifications'>
			<p>Here is the list of notifications</p>
			<button style={btn} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
				<img src={closeicon} alt='close-icon' style={cicon} />
			</button>
			<ul>
				<li data-priority='default'>New course available</li>
				<li data-priority='urgent'>New resume available</li>
				<li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
		</div>
	);
};

export default Noti;
