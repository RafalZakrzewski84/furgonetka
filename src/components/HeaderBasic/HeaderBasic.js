/** @format */

import React from 'react';
import './HeaderBasic.less';

function HeaderBasic({ images, texts }) {
	return (
		<div className="HeaderBasic">
			<div className="HeaderBasic__container">
				<div className="HeaderBasic__content">
					<div className="HeaderBasic__box">
						<div className="HeaderBasic__box-container">
							<div className="HeaderBasic__box-content">
								<div className="HeaderBasic__header">
									<p className="HeaderBasic__topCaption">
										{texts.topCaption.toUpperCase()}
									</p>
									<h1 className="HeaderBasic__h1Text">
										{texts.h1Text}
										<span className="HeaderBasic__h1Span">{texts.h1Span}</span>
									</h1>
									<img
										className="HeaderBasic__marker"
										src={images.marker}
										alt="marker"
									/>
								</div>
								<p className="HeaderBasic__headerText">{texts.headerText}</p>
							</div>
							<button>Button</button>
						</div>
					</div>
					<div className="HeaderBasic__box">
						<img
							className="HeaderBasic__img"
							src={images.image}
							alt="header basic"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderBasic;
