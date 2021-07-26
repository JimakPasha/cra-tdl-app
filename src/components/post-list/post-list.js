import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked}) => {

	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return (
			<li className='list-group-item' key={id}>
				<PostListItem 
					label={itemProps.label}
					important={itemProps.important}
					like={itemProps.like}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		) 
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul> 
	)
}

export default PostList;