/** @format */

import React from 'react';
import './Textarea.less';

function Textarea({ label, id, setValue, setForm }) {
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
		<div className="Textarea__input-item">
			<label className="Textarea__label" htmlFor={id}>
				{label}
			</label>
			<div className="Textarea__input-holder">
				<textarea
					className="Textarea__input Textarea__input--message"
					id={id}
					name={id}
					value={setValue}
					onChange={handleChange}
					rows="1"
					cols="50"
				/>
			</div>
		</div>
	);
}

export default Textarea;
