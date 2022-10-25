/** @format */

import React from 'react';
import './ModTitle.less';

function ModTitle({ type, texts, color }) {
	const { h2Text, h2Span, pText } = texts;

	//condition on which side od header is span
	let header;
	if (type === 'left') {
		header = (
			<h2 className="ModTitle__header">
				<span className="ModTitle__span">{h2Span}</span>
				{h2Text}
			</h2>
		);
	} else {
		header = (
			<h2 className="ModTitle__header">
				{h2Text}
				<span className="ModTitle__span">{h2Span}</span>
			</h2>
		);
	}

	//background color depend on color prop
	let background = color
		? { backgroundColor: color }
		: { backgroundColor: '#ffffff' };

	return (
		<div className="ModTitle" style={background}>
			<div className="App__container">
				<div className="ModTitle__container">
					{header}
					{pText !== '' && <p className="ModTitle__paragraph">{texts.pText}</p>}
				</div>
			</div>
		</div>
	);
}

export default ModTitle;
