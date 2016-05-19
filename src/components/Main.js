require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoList from 'components/todo/ListComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <TodoList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
