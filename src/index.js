import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quiz from './quiz-components/Quiz'
import './index.css';
import Users from './Users'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Todo from './todo-components/Todo';

const Routing = <Router>
                <ul className="links">
                  <li> <Link to="/more" className="link" > ALL APPS </Link> </li>
                  <li> <Link to="/" className="link"> HOME </Link> </li>
                  <li> <Link to="/todo" className="link"> TODO LIST </Link> </li>
                  <li> <Link to="/quiz" className="link"> QUIZ </Link> </li>
                  <li> <Link to="/budget" className="link"> BUDGET </Link> </li>
                </ul>
              <Route exact path="/budget" component={App} />
              <Route path="/users" component={Users} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/todo" component={Todo} />
          </Router>

ReactDOM.render(Routing, document.getElementById('root'));
// ReactDOM.render(<Quiz />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();