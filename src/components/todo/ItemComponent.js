'use strict';

import React from 'react';

require('styles/todo/Item.css');

class ItemComponent extends React.Component {

	render() {
		let todo = this.props.todo,
			classStr = '';

		if (todo.completed) classStr += 'completed';

		return (
            <li className={classStr}>
              <div className="view">
                <input onChange={this.toggle.bind(this)} className="toggle" type="checkbox" checked={todo.completed} />
                <label>{todo.name}</label>
                <button onClick={this.delete.bind(this)} className="destroy"></button>
              </div>
              <input className="edit" value="" />
            </li>
		);
	}
	
	delete() {
		this.props.delete(this.props.itemId);
	}

	toggle() {
		this.props.toggle(this.props.itemId);
	}
}

ItemComponent.displayName = 'TodoItemComponent';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

export default ItemComponent;
