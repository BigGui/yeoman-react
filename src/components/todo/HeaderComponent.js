'use strict';

import React from 'react';

require('styles/todo/Header.css');

let yeomanImage = require('../../images/yeoman.png');

class HeaderComponent extends React.Component {

	constructor() {
		super();
		this.state = {val: ''};
	}

	render() {
		return (
		    <header id="header">
		      <h1>todos</h1>
       		  <img src={yeomanImage} alt="Yeoman Generator" />
		      <form onSubmit={this.add.bind(this)}>
		      	<input id="new-todo"	onChange={this.handleChange.bind(this)}
		      							value={this.state.val}
		      							placeholder="What needs to be done?" autofocus />
		      </form>
		    </header>
		);
	}

	handleChange(event) {
		this.setState({val: event.target.value});
	}

	add(event) {
		event.preventDefault();

		this.props.add(this.state.val);
		this.setState({val: ''});

		return false;
	}
}

HeaderComponent.displayName = 'TodoHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
