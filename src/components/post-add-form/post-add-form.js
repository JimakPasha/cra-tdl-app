import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
	return (
		<div className="bottom-panel d-flex">
			<input
				className="form-control new-post-label"
				type="text"
				placeholder="Что необходимо сделать?"
			/>
			<button
				className="btn btn-outline-secondary"
				type="submit"
				onClick={() => onAdd('Hello')}>
					Добавить
			</button>
		</div>
	)
}

export default PostAddForm;