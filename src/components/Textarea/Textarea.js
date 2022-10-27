/** @format */

import React from 'react';
import './Textarea.less';

function Textarea({ label, id, errText, formError }) {
	function handleChange(evt) {
		console.log(evt.target.value);
	}

	return (
		<div className="Textarea__input-item">
			<label className="Textarea__label" htmlFor={id}>
				{label}
			</label>
			<div className="Textarea__input-holder">
				<textarea
					onChange={handleChange}
					className="Textarea__input Textarea__input--message"
					id={id}
					rows="1"
					cols="50"
					name={id}
				/>
				{formError && <p className="Textarea__error-text">{errText}</p>}
			</div>
		</div>
	);
}

export default Textarea;
