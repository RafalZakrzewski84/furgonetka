/** @format */

import React from 'react';
import './HeaderBasic.less';

function HeaderBasic({ images, texts }) {
	return (
		<div className="HeaderBasic">
			<div className="HeaderBasic__container">
				<div className="HeaderBasic__content">
					<div className="HeaderBasic__box">
						<p>{texts.topCaption.toUpperCase()}</p>
						<h1>
							{texts.h1Text}
							<span>{texts.h1Span}</span>
						</h1>
						<img src={images.marker} alt="marker" />
						<p>{texts.headerText}</p>
					</div>
					<div className="HeaderBasic__box">
						<img src={images.image} alt="header basic" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderBasic;
