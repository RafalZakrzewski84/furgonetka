/** @format */

import React from 'react';
import './ModSmallIllustration.less';

function ModSmallIllustration({ type, image, texts, color }) {
	const { h3Text, pText } = texts;

	//condition on which side of container is image
	let content;
	if (type === 'left') {
		content = (
			<>
				<div className="ModSmallIllustration__img-container">
					<img
						className="ModSmallIllustration__img"
						src={image}
						alt="ModSmallIllustration"
					/>
				</div>
				<div className="ModSmallIllustration__content">
					<h3 className="ModSmallIllustration__header">{h3Text}</h3>
					<p className="ModSmallIllustration__paragraph">{pText}</p>
				</div>
			</>
		);
	} else {
		content = (
			<>
				<div className="ModSmallIllustration__content">
					<h3 className="ModSmallIllustration__header">{h3Text}</h3>
					<p className="ModSmallIllustration__paragraph">{pText}</p>
				</div>
				<div className="ModSmallIllustration__img-container">
					<img
						className="ModSmallIllustration__img"
						src={image}
						alt="ModSmallIllustration"
					/>
				</div>
			</>
		);
	}

	//background color depend on color prop
	let background = color
		? { backgroundColor: color }
		: { backgroundColor: '#ffffff' };

	return (
		<div className="ModSmallIllustration" style={background}>
			<div className="App__container">
				<div className="ModSmallIllustration__container">{content}</div>
			</div>
		</div>
	);
}

export default ModSmallIllustration;
