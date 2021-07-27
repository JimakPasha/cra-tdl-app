import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [
				{ label: 'Lorem-1', important: false, like: false, id: 120052454888 },
				{ label: 'Lorem-2', important: true, like: false, id: 56766800045672 },
				{ label: 'Lorem-3', important: false, like: false, id: 35456400056 }
			],
			term: '',
			filter: 'all'
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			like: false,
			id: Math.floor(Date.now() / Math.random())
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	deleteItem(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const before = data.slice(0, index);
			const after = data.slice(index +1);

			const newArr = [...before, ...after];

			return {
				data: newArr
			}

		});
	}

	refreshState(id, key) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = { ...old, [key]: !old.[key] };

			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, newItem, ...after];

			return {
				data: newArr
			}
		});
	}

	onToggleImportant(id) {
		this.refreshState(id, 'important');
	}

	onToggleLiked(id) {
		this.refreshState(id, 'like');
	}

	searchPost(items, term) {
		if(term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}

	filterPost(items, filter) {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	}

	onUpdateSearch(term) {
		this.setState({term});
	}

	onFilterSelect(filter) {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state;

		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<div className="app">
				<AppHeader 
					liked={liked}
					allPosts={allPosts}/>
				<div class="search-panel d-flex">
					<SearchPanel 
						onUpdateSearch={this.onUpdateSearch}/>
					<PostStatusFilter 
						filter={filter}
						onFilterSelect={this.onFilterSelect}/>
				</div>
				<div>
					<PostList
						posts={visiblePosts}
						onDelete={this.deleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleLiked={this.onToggleLiked} />
					<PostAddForm 
						onAdd={this.addItem}/>
				</div>
			</div>
		)
	}
}