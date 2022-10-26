/** @format */

import React from 'react';
import './Button.less';

function Button({ text, type }) {
	let buttonClass =
		type === 'primary'
			? `Button Button--${type.toLowerCase()}`
			: `Button Button--${type.toLowerCase()}`;
	return <button className={buttonClass}>{text}</button>;
}

export default Button;
