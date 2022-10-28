/** @format */

import React from 'react';
import './Input.less';

function Input({ label, type, id, errText, toggleClass, setValue, setForm }) {
	//setting class of
	let inputClassName = 'Input__input';
	if (toggleClass === 'invalid') {
		inputClassName = 'Input__input Input__input--error';
	} else if (toggleClass === 'valid') {
		inputClassName = 'Input__input Input__input--noError';
	}

	function handleBlur(evt) {
		evt.preventDefault();
		const { name } = evt.target;
		if (setValue === undefined) {
			setForm((prevState) => {
				return {
					...prevState,
					[name]: '',
				};
			});
		}
	}

	function handleChange(evt) {
		evt.preventDefault();
		const { name, value } = evt.target;

		setForm((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	return (
		<div className="Input__input-item">
			<label className="Input__label" htmlFor={id}>
				{label}
			</label>
			<div className="Input__input-holder">
				<input
					className={inputClassName}
					id={id}
					type={type}
					name={id}
					onChange={handleChange}
					onBlur={handleBlur}
					value={setValue}
				/>
				{errText && <p className="Input__error-text">{errText}</p>}
			</div>
		</div>
	);
}

export default Input;
