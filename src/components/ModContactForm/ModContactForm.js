/** @format */

import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

import './ModContactForm.less';

function ModContactForm({ texts }) {
	const [formSent, setFormSent] = useState(false);
	const [phoneErrText, setPhoneErrText] = useState('');
	const [phoneNoErrorClass, setPhoneNoErrorClass] = useState('');
	const [nameErrText, setNameErrText] = useState('');
	const [nameNoErrorClass, setNameNoErrorClass] = useState('');
	const [companyErrText, setCompanyErrText] = useState('');
	const [companyNoErrorClass, setCompanyNoErrorClass] = useState('');
	const [mailErrText, setMailErrText] = useState('');
	const [mailNoErrorClass, setMailNoErrorClass] = useState('');

	function handleSubmit(evt) {
		evt.preventDefault();
		setFormSent(false);
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
			/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
		const emailRegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

		let err = false;
		if (phone === '') {
			err = true;
			setPhoneErrText('Uzupełnij proszę numer telefonu');
		}
		if (!phoneRegExp.test(phone)) {
			err = true;
			setPhoneErrText('Format nr telefonu +XXXXXXXXXXX');
		}
		if (name === '') {
			err = true;
			setNameErrText('Podaj proszę swoje imię');
		}
		if (company === '') {
			err = true;
			setCompanyErrText('Podaj proszę swoje nazwisko lub nazwę firmy');
		}
		if (email === '') {
			err = true;
			setMailErrText('Uzupełnij proszę adres email');
		}
		if (!emailRegExp.test(email)) {
			err = true;
			setMailErrText('Podaj proszę własciwy adres email');
		}
		if (err) return;
		setFormSent(true);
		setPhoneNoErrorClass('');
		setNameNoErrorClass('');
		setCompanyNoErrorClass('');
		setMailNoErrorClass('');
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
									<Input
										label="Twój numer telefonu"
										type="tel"
										id="phone"
										errText={phoneErrText}
										reset={setPhoneErrText}
										noErrorClass={phoneNoErrorClass}
										setNoErrorClass={setPhoneNoErrorClass}
									/>
									<Input
										label="Twój Imię"
										type="text"
										id="name"
										errText={nameErrText}
										reset={setNameErrText}
										noErrorClass={nameNoErrorClass}
										setNoErrorClass={setNameNoErrorClass}
									/>
									<Input
										label="Twój nazwisko / nazwa firmy"
										type="text"
										id="company"
										errText={companyErrText}
										reset={setCompanyErrText}
										noErrorClass={companyNoErrorClass}
										setNoErrorClass={setCompanyNoErrorClass}
									/>
									<Input
										label="Twój adres e-mail"
										type="email"
										id="email"
										errText={mailErrText}
										reset={setMailErrText}
										noErrorClass={mailNoErrorClass}
										setNoErrorClass={setMailNoErrorClass}
									/>
									<Textarea label="Widamość (opcjonalnie)" id="wiadomosc" />
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
								Wkrótce się z Tobą skontaktujemy, żeby porozmawiać o ofercie.
							</p>
							<p
								className="ModContactForm__close-msg-sent"
								onClick={handleClick}>
								<i class="fa-solid fa-rectangle-xmark"></i>
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModContactForm;
