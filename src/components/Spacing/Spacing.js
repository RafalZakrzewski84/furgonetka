/** @format */

import React from 'react';
import './Spacing.less';

function Spacing({ type, color }) {
	//background color depend on color prop
	let background = color
		? { backgroundColor: color }
		: { backgroundColor: '#ffffff' };

	return <div className={`Spacing--${type}`} style={background}></div>;
}

export default Spacing;
