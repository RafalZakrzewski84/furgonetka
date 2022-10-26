/** @format */

import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';

import './ModContactForm.less';

function ModContactForm({ texts }) {
	const [formSent, setFormSent] = useState(false);
	const [formError, setFormError] = useState(false);
	const [phoneErrText, setPhoneErrText] = useState('');
	const [nameErrText, setNameErrText] = useState('');
	const [companyErrText, setCompanyErrText] = useState('');
	const [mailErrText, setMailErrText] = useState('');

	function handleSubmit(evt) {
		evt.preventDefault();
		setFormSent(false);
		setFormError(false);
		setPhoneErrText('');
		setNameErrText('');
		setCompanyErrText('');
		setMailErrText('');

		const data = new FormData(evt.target);
		const phone = data.get('phone');
		const name = data.get('name');
		const company = data.get('company');
		const email = data.get('email');

		const phoneRegExp =
			/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

		let err = false;
		if (phone === '') {
			err = true;
			setFormError(true);
			setPhoneErrText('Uzupełnij proszę numer telefonu');
		}
		if (!phoneRegExp.test(phone)) {
			err = true;
			setFormError(true);
			setPhoneErrText('Format nr telefonu +XXXXXXXXXXX');
		}
		if (name === '') {
			err = true;
			setFormError(true);
			setNameErrText('Podaj proszę swoje imię');
		}
		if (company === '') {
			err = true;
			setFormError(true);
			setCompanyErrText('Podaj proszę swoje nazwisko lub nazwę firmy');
		}
		if (email === '') {
			err = true;
			setFormError(true);
			setMailErrText('Uzupełnij proszę adres email');
		}
		if (err) return;

		setFormSent(true);
	}

	function handleClick() {
		setFormSent(false);
	}

	return (
		<div className="ModContactForm">
			<div className="App__container">
				<div className="ModContactForm__container">
					<div className="ModContactForm__content">
						<h2 className="ModContactForm__header">
							{texts.h2Text}
							<span className="ModContactForm__span">{texts.h2Span}</span>
						</h2>
						<p className="ModContactForm__paragraph">{texts.pText}</p>
					</div>
					{!formSent ? (
						<form onSubmit={handleSubmit}>
							<div className="ModContactForm__form">
								<div className="ModContactForm__inputs">
									<div className="ModContactForm__input-item">
										<label className="ModContactForm__label" htmlFor="phone">
											Twój numer telefonu
										</label>
										<div className="ModContactForm__input-holder">
											<input
												className="ModContactForm__input ModContactForm__input--error "
												id="phone"
												type="tel"
												name="phone"
											/>
											{formError && (
												<p className="ModContactForm__error-text">
													{phoneErrText}
												</p>
											)}
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
											{formError && (
												<p className="ModContactForm__error-text">
													{nameErrText}
												</p>
											)}
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
											{formError && (
												<p className="ModContactForm__error-text">
													{companyErrText}
												</p>
											)}
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
											{formError && (
												<p className="ModContactForm__error-text">
													{mailErrText}
												</p>
											)}
										</div>
									</div>
									<div className="ModContactForm__input-item">
										<label className="ModContactForm__label" htmlFor="company">
											Widamość (opcjonalnie)
										</label>
										<div className="ModContactForm__input-holder">
											<input
												className="ModContactForm__input ModContactForm__input--message"
												id="company"
												type="text"
												name="company"
											/>
										</div>
									</div>
								</div>
								<div className="ModContactForm__button-container">
									<Button text={texts.buttonText} type="secondary" />
								</div>
							</div>
						</form>
					) : (
						<div className="ModContactForm__content-msg-sent">
							<h2 className="ModContactForm__header">Wiadomość Wysłana</h2>
							<p className="ModContactForm__paragraph">
								Wkrótce się z Tobą skontaktujemy, żeby porozmawiać o
								indywidualnej ofercie.
							</p>
							<p onClick={handleClick}>Close</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModContactForm;
