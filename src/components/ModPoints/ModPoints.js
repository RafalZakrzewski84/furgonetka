/** @format */

import React from 'react';
import CourierTag from './CurierTag/CourierTag';
import './ModPoints.less';

function ModPoints({ images, texts }) {
	return (
		<div className="ModPoints">
			<div className="App__container">
				<div className="ModPoints__container">
					<div className="ModPoints__image-container">
						<img className="ModPoints__img" src={images[0]} alt="ModPoints" />
					</div>
					<div className="ModPoints__content">
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[0]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="InPost" />
							</div>
						</div>
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[1]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="DHL" />
								<CourierTag courierName="InPost" />
								<CourierTag courierName="DPD" />
							</div>
						</div>
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[2]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="DPD" />
							</div>
						</div>
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[3]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="DPD" />
							</div>
						</div>
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[4]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="Pocztex" />
							</div>
						</div>
						<div className="ModPoints__item">
							<img
								className="ModPoints__item-img"
								src={images[1]}
								alt="ModPoints"
							/>
							<p className="ModPoints__text">{texts[5]}</p>
							<div className="ModPoints__icon-container">
								<CourierTag courierName="DeliGoo" />
								<CourierTag courierName="Xpress Delivery" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModPoints;
