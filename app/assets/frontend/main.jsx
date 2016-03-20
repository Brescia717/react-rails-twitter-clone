import React from "react"
import ReactDOM from "react-dom"
import Index from "./components/Index"
import Follow from "./components/Follow"

import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from "history"

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router history={ appHistory }>
        <Route component={App}>
          <Route path="/" component={Index} />
          <Route path="/follow" component={Follow} />
        </Route>
      </Router>,
      reactNode);
  }
};

$(documentReady);
