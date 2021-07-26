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
				{ label: 'Lorem-1', important: false, like: false, id: 1 },
				{ label: 'Lorem-2', important: true, like: false, id: 2 },
				{ label: 'Lorem-3', important: false, like: false, id: 3 }
			]
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);

		this.maxId = 4;
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
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

	render() {
		const {data} = this.state;

		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		return (
			<div className="app">
				<AppHeader 
					liked={liked}
					allPosts={allPosts}/>
				<div class="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<div>
					<PostList
						posts={this.state.data}
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