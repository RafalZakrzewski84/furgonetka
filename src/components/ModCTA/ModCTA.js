/** @format */

import React from 'react';
import './ModCTA.less';

import Button from '../Button/Button';

function ModCTA({ images, texts }) {
	return (
		<div className="ModCTA">
			<div className="App__container">
				<div className="ModCTA__container">
					<div className="ModCTA__box-img">
						<img className="ModCTA__img" src={images} alt="header basic" />
					</div>
					<div className="ModCTA__box">
						<div className="ModCTA__box-content">
							<div className="ModCTA__header">
								<h2 className="ModCTA__header">
									{texts.h1Text}
									<span className="ModCTA__span">{texts.h1Span}</span>
								</h2>
							</div>
							<p className="ModCTA__paragraph">{texts.headerText}</p>
						</div>
						<Button text={texts.buttonText} type="secondary" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModCTA;
