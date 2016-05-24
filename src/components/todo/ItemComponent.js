'use strict';

import React from 'react';

require('styles/todo/Item.css');

class ItemComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			edition: false,
			editText: 	''
		};
	}

	render() {
		let todo = this.props.todo,
			classStr = '';

		if (todo.completed)		classStr += 'completed';
		if (this.state.edition)	classStr += ' editing';

		// console.log(this.state);

		return (
            <li className={classStr}>
              <div className="view">
                <input className="toggle" type="checkbox"	onChange={this.toggle.bind(this)}
											                checked={todo.completed}
											                />
                <label onDoubleClick={this.handleEdit.bind(this)}>{todo.name}</label>
                <button onClick={this.delete.bind(this)} className="destroy"></button>
              </div>
              <input className="edit"	value={this.state.editText}
              							onChange={this.handleChange.bind(this)}
              							onKeyDown={this.handleKeypress.bind(this)}
              							/>
            </li>
		);
	}
	
	delete() {
		this.props.delete(this.props.itemId);
	}

	toggle() {
		this.props.toggle(this.props.itemId);
	}

	handleEdit() {
		this.setState({
			edition: true,
			editText: this.props.todo.name
		});
	}

	handleChange(event) {
		this.setState({editText: event.target.value});
	}

	handleKeypress(event) {
		if (event.which === 13) {
			this.props.edit(this.props.itemId, this.state.editText);
			this.setState({ edition: false });
		}
		else if (event.which === 27) {
			this.setState({ edition: false });
		}
	}
}

ItemComponent.displayName = 'TodoItemComponent';

// Uncomment properties you need
// ItemComponent.propTypes = {};
// ItemComponent.defaultProps = {};

export default ItemComponent;
