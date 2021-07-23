import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div class="search-panel d-flex">
				<SearchPanel />
				<PostStatusFilter/>
			</div>
			<div>
				<PostList/>
				<PostAddForm/>
			</div>
		</div>
	)
}

export default App;