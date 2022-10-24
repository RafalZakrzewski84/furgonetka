/** @format */

import React from 'react';
import './Button.less';

function Button({ text }) {
	return <button className="Button Button--primary">{text}</button>;
}

export default Button;
