import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

	const data = [
		{label: 'Lorem-1', important: false, id: '41asfqweasf'},
		{label: 'Lorem-2', important: true, id: 'asf342gasf'},
		{label: 'Lorem-3', important: false, id: 'g34asft233asf'}
	];

	return (
		<div className="app">
			<AppHeader />
			<div class="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter/>
			</div>
			<div>
				<PostList posts={data}/>
				<PostAddForm/>
			</div>
		</div>
	)
}

export default App;