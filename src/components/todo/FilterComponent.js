'use strict';

import React from 'react';

require('styles/todo/Filter.css');

class FilterComponent extends React.Component {
	render() {
		return (
			<li>
				<a className={this.props.selected ? 'selected' : ''} onClick={this.filterAction.bind(this)} href={'#/' + (this.props.filter === 'All' ? '' : this.props.filter) }>{this.props.filter}</a>
			</li>
		);
	}

	filterAction() {
		this.props.filterChange(this.props.filter);
	}
}

FilterComponent.displayName = 'TodoFilterComponent';

// Uncomment properties you need
// FilterComponent.propTypes = {};
// FilterComponent.defaultProps = {};

export default FilterComponent;
