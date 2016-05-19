'use strict';

import React from 'react';

require('styles/todo/Footer.css');
import TodoFilter from 'components/todo/FilterComponent';


class FooterComponent extends React.Component {

	render() {

		let self = this;

		let filters = this.props.filters.map(function(filter, i){
			return <TodoFilter filter={filter} key={i} selected={filter === self.props.currentFilter} filterChange={self.props.filterChange} />
		});

		return (
	        <footer id="footer">
	          <span id="todo-count"><strong>{this.props.nbLeft}</strong> item left</span>
	          <ul id="filters">{filters}</ul>
	          <button	id="clear-completed"
	          			onClick={this.clearCompleted.bind(self)}>Clear completed ({this.props.nbCompleted})</button>
	        </footer>
		);
	}
	
	clearCompleted(event) {
		event.preventDefault();
		this.props.clearCompleted();
	}
}

FooterComponent.displayName = 'TodoFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
