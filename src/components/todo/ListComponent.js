'use strict';

import React from 'react';
import TodoHeader from 'components/todo/HeaderComponent';
import TodoItem from 'components/todo/ItemComponent';
import TodoFooter from 'components/todo/FooterComponent';

require('styles/todo/List.css');

class ListComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			todos: [
				{ name: 'Faire la vaisselle',	completed: true},
				{ name: 'Faire le ménage',		completed: false}
			],
			filters: ['All', 'Active', 'Completed'],
			currentFilter: 'All'
		};
	}

	render() {

		let self = this;

		let rows = this.state.todos
				.filter(function(elem){
					switch(self.state.currentFilter) {
						case 'Active' :
							return !elem.completed;
							
						case 'Completed' :
							return elem.completed;

						default:
							return true;
					}
				})
				.map(function(todo, i) {
					return (
						<TodoItem	todo={todo}
									key={i}
									itemId={i}
									delete={self.deleteItem.bind(self)}
									toggle={self.toggleItem.bind(self)}
									edit={self.editItem.bind(self)}
						/>
					);
				});

		let nbLeft = this.state.todos.filter(function(elem){ return !elem.completed }).length;

		let nbCompleted = this.state.todos.filter(function(elem){ return elem.completed }).length;

		return (
			<div>
				<TodoHeader add={this.addItem.bind(this)} />
				<section id="main">
		          <input id="toggle-all" type="checkbox" />
		          <label htmlFor="toggle-all">Mark all as complete</label>
		          <ul id="todo-list">
		            {rows}
		          </ul>
		        </section>
				<TodoFooter	nbLeft={nbLeft}
							nbCompleted={nbCompleted}
							filters={this.state.filters}
							currentFilter={this.state.currentFilter}
							filterChange={this.filterChange.bind(self)}
							clearCompleted={this.clearCompleted.bind(self)} />
	 	 </div>
		);
	}

	deleteItem(itemId) {
		this.state.todos.splice(itemId, 1);
		this.setState({todos: this.state.todos});
	}

	toggleItem(itemId) {
		this.state.todos[itemId].completed = !this.state.todos[itemId].completed;
		this.setState({todos: this.state.todos});
	}

	addItem(value) {
		this.state.todos.push({ name: value, completed: false});
		this.setState({todos: this.state.todos});
	}

	editItem(itemId, value) {
		this.state.todos[itemId].name = value;
		this.setState({todos: this.state.todos});
	}

	filterChange(filter) {
		this.setState({currentFilter: filter});
	}

	clearCompleted() {
		this.setState({todos: this.state.todos.filter(function(elem) { return !elem.completed})});
	}

}

ListComponent.displayName = 'TodoListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
