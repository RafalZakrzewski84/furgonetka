/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

import './ModContactForm.less';

function ModContactForm({ texts }) {
	const [form, setForm] = useState({
		phone: undefined,
		name: undefined,
		company: undefined,
		email: undefined,
		message: undefined,
	});
	const [formSent, setFormSent] = useState(false);
	const [noFormErr, setNoFormError] = useState(false);
	const [phoneErrText, setPhoneErrText] = useState('');
	const [phoneToggleClass, setPhoneToggleClass] = useState('initial');
	const [nameErrText, setNameErrText] = useState('');
	const [nameToggleClass, setNameToggleClass] = useState('initial');
	const [companyErrText, setCompanyErrText] = useState('');
	const [companyToggleClass, setCompanyToggleClass] = useState('initial');
	const [mailErrText, setMailErrText] = useState('');
	const [mailToggleClass, setMailToggleClass] = useState('initial');

	useEffect(() => {
		//validation based on input change
		// let err = false;
		//phone validation
		if (form.phone === '') {
			// err = true;
			setPhoneErrText('wpisz numer telefonu');
			setPhoneToggleClass('invalid');
		} else if (form.phone !== '' && form.phone !== undefined) {
			setPhoneErrText('');
			setPhoneToggleClass('valid');
		}

		//name validation
		if (form.name === '') {
			// err = true;
			setNameErrText('wpisz imię');
			setNameToggleClass('invalid');
		} else if (form.name !== '' && form.name !== undefined) {
			setNameErrText('');
			setNameToggleClass('valid');
		}

		//company validation
		if (form.company === '') {
			// err = true;
			setCompanyErrText('wpisz nazwisko/nazwę firmy');
			setCompanyToggleClass('invalid');
		} else if (form.company !== '' && form.company !== undefined) {
			setCompanyErrText('');
			setCompanyToggleClass('valid');
		}

		//email validation
		const emailRegExp =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
		if (form.email === '') {
			// err = true;
			setMailErrText('wpisz email');
			setMailToggleClass('invalid');
		} else if (form.email !== undefined && !emailRegExp.test(form.email)) {
			// err = true;
			setMailErrText('wpisz prawidłowy mail');
			setMailToggleClass('invalid');
		} else if (form.email !== '' && emailRegExp.test(form.email)) {
			setMailErrText('');
			setMailToggleClass('valid');
		}
	}, [form]);

	function handleSubmit(evt) {
		evt.preventDefault();

		//validation on submit form
		let err = false;
		//phone validation
		if (form.phone === undefined || form.phone === '') {
			err = true;
			setPhoneErrText('wpisz numer telefonu');
			setPhoneToggleClass('invalid');
		}

		//name validation
		if (form.name === undefined || form.name === '') {
			err = true;
			setNameErrText('wpisz imię');
			setNameToggleClass('invalid');
		}

		//company validation
		if (form.company === undefined || form.company === '') {
			err = true;
			setCompanyErrText('wpisz nazwisko/nazwę firmy');
			setCompanyToggleClass('invalid');
		} else if (form.company !== '' && form.company !== undefined) {
			setCompanyErrText('');
			setCompanyToggleClass('valid');
		}

		//email validation
		if (form.email === undefined || form.email === '') {
			err = true;
			setMailErrText('wpisz email');
			setMailToggleClass('invalid');
		}

		console.log('submit', err);
		//if validation error prevent submit form
		if (err) return;

		//if validation passed show message box
		setFormSent(true);

		//reset form states
		setForm({
			phone: undefined,
			name: undefined,
			company: undefined,
			email: undefined,
			message: undefined,
		});
		setNoFormError(false);
		setPhoneErrText('');
		setPhoneToggleClass('initial');
		setNameErrText('');
		setNameToggleClass('initial');
		setCompanyErrText('');
		setCompanyToggleClass('initial');
		setMailErrText('');
		setMailToggleClass('initial');
	}

	function handleClick(evt) {
		evt.preventDefault();

		//closing message box
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
										toggleClass={phoneToggleClass}
										setValue={form.phone}
										setForm={setForm}
									/>
									<Input
										label="Twój Imię"
										type="text"
										id="name"
										errText={nameErrText}
										toggleClass={nameToggleClass}
										setValue={form.name}
										setForm={setForm}
									/>
									<Input
										label="Twój nazwisko / nazwa firmy"
										type="text"
										id="company"
										errText={companyErrText}
										toggleClass={companyToggleClass}
										setValue={form.company}
										setForm={setForm}
									/>
									<Input
										label="Twój adres e-mail"
										type="email"
										id="email"
										errText={mailErrText}
										toggleClass={mailToggleClass}
										setValue={form.email}
										setForm={setForm}
									/>
									<Textarea label="Widamość (opcjonalnie)" id="message" />
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
								<i className="fa-solid fa-rectangle-xmark"></i>
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModContactForm;
