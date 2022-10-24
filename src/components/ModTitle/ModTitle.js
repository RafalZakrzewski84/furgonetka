/** @format */

import React from 'react';
import './ModTitle.less';

function ModTitle({ type, texts }) {
	const { h2Text, h2Span, pText } = texts;
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

	return (
		<div className="ModTitle">
			{header}
			{pText !== '' && <p className="ModTitle__paragraph">{texts.pText}</p>}
		</div>
	);
}

export default ModTitle;
