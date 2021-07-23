import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
	return (
		<div className="btn-group">
			<button className="btn btn-info" type="button">Все</button>
			<button className="btn btn-outline-secondary" type="button">Понравились</button>
		</div>
	)
}

export default PostStatusFilter;