/** @format */

import React from 'react';
import './ModLogos.less';

function ModLogos({ logos }) {
	return (
		<div className="ModLogos">
			<div className="App__container">
				<div className="ModLogos__container">
					{logos.map((logo, idx) => (
						<div key={idx} className="ModLogos__img-container">
							<img src={logo} alt="ModLogo" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ModLogos;
