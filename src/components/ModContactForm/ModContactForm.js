/** @format */

import React from 'react';
import Button from '../Button/Button';

import './ModContactForm.less';

function ModContactForm({ texts }) {
	return (
		<div className="ModContactForm">
			<div className="App__container">
				<div className="ModContactForm__container">
					<div className="ModContactForm__content">
						<h2>title</h2>
						<p>text</p>
					</div>
					<div className="ModContactForm__form">
						<div className="ModContactForm__inputs">
							<div className="ModContactForm__input-item">
								<label className="ModContactForm__label" htmlFor="phone">
									Twój numer telefonu
								</label>
								<div className="ModContactForm__input-holder">
									<input
										className="ModContactForm__input"
										id="phone"
										type="tel"
										pattern="+[0-9]{2} [0-9]{3}-[0-9]{3}-[0-9]{4}"
										name="phone"
									/>
									<p className="ModContactForm__error-text">error msg</p>
								</div>
							</div>
							<div className="ModContactForm__input-item">
								<label className="ModContactForm__label" htmlFor="name">
									Twój Imię
								</label>
								<div className="ModContactForm__input-holder">
									<input
										className="ModContactForm__input"
										id="name"
										type="text"
										name="name"
									/>
									<p className="ModContactForm__error-text">error msg</p>
								</div>
							</div>
							<div className="ModContactForm__input-item">
								<label className="ModContactForm__label" htmlFor="company">
									Twój nazwisko / nazwa firmy
								</label>
								<div className="ModContactForm__input-holder">
									<input
										className="ModContactForm__input"
										id="company"
										type="text"
										name="company"
									/>
									<p className="ModContactForm__error-text">error msg</p>
								</div>
							</div>
							<div className="ModContactForm__input-item">
								<label className="ModContactForm__label" htmlFor="email">
									Twój adres e-mail
								</label>
								<div className="ModContactForm__input-holder">
									<input
										className="ModContactForm__input"
										id="email"
										type="email"
										name="email"
									/>
									<p className="ModContactForm__error-text">error msg</p>
								</div>
							</div>
							<div className="ModContactForm__input-item">
								<label className="ModContactForm__label" htmlFor="company">
									Widamość (opcjonalnie)
								</label>
								<div className="ModContactForm__input-holder">
									<input
										className="ModContactForm__input"
										id="company"
										type="text"
										name="company"
									/>
									<p className="ModContactForm__error-text">error msg</p>
								</div>
							</div>
						</div>
						<div className="ModContactForm__button-container">
							<Button text={texts.buttonText} type="secondary" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModContactForm;
