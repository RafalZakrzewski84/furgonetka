/** @format */

import React from 'react';
import './MenuBar.less';

function MenuBar({ logo }) {
	return (
		<div className="MenuBar">
			<div className="App__container">
				<div className="MenuBar__content">
					<img className="MenuBar__logo" src={logo} alt="logo" />
				</div>
			</div>
		</div>
	);
}

export default MenuBar;
