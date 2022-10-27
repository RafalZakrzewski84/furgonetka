/** @format */

import React from 'react';
import './Input.less';

function Input({
	label,
	type,
	id,
	errText,
	reset,
	noErrorClass,
	setNoErrorClass,
}) {
	function handleChange(evt) {
		console.log(evt.target.value);

		let inputValue = evt.target.value;
		const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3}$/;
		const emailRegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

		if (type === 'tel' && phoneRegExp.test(inputValue)) {
			setNoErrorClass('Input__input--noError');
			reset('');
		}
		if (type === 'text' && inputValue !== '') {
			setNoErrorClass('Input__input--noError');
			reset('');
		}
		if (type === 'email' && emailRegExp.test(inputValue)) {
			setNoErrorClass('Input__input--noError');
			reset('');
		}
	}

	return (
		<div className="Input__input-item">
			<label className="Input__label" htmlFor={id}>
				{label}
			</label>
			<div className="Input__input-holder">
				<input
					className={
						errText || noErrorClass
							? `Input__input Input__input--error ${noErrorClass}`
							: 'Input__input'
					}
					id={id}
					type={type}
					name={id}
					onChange={handleChange}
				/>
				{errText && <p className="Input__error-text">{errText}</p>}
			</div>
		</div>
	);
}

export default Input;
