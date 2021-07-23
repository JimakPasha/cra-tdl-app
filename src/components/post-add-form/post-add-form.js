import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="Что необходимо сделать?"
			/>
			<buton
				className="btn btn-outline-secondary"
				type="submit">
					Добавить
			</buton>
		</form>
	)
}

export default PostAddForm;