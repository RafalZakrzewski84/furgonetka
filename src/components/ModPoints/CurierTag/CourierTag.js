/** @format */

import React from 'react';
import './CourierTag.less';

function CourierTag({ courierName }) {
	let courierClass = !courierName
		? 'CourierTag'
		: `CourierTag CourierTag--${courierName.toLowerCase().slice(0, 6)}`;
	return (
		<div className={courierClass}>
			<p className="CourierTag__text">{courierName}</p>
		</div>
	);
}

export default CourierTag;
