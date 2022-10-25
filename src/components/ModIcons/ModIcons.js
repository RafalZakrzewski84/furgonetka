/** @format */

import React from 'react';
import './ModIcons.less';

function ModIcons({ icons, iconsTexts }) {
	//logic for preparing icons array for rendering
	let iconsRender = [];
	for (let i = 0; i < icons.length; i++) {
		iconsRender.push(
			<div key={iconsTexts[i]} className="ModIcons__item">
				<img className="ModIcons__img" src={icons[i]} alt="ModIcon" />
				<div className="ModIcons__text-container">
					<p className="ModIcons__text">{iconsTexts[i]}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="ModIcons">
			<div className="App__container">
				<div className="ModIcons__container">
					{iconsRender.map((icon) => icon)}
				</div>
			</div>
		</div>
	);
}

export default ModIcons;
