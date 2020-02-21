import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, Login, Training, JobSearch, SignUp } from './pages';
import { PrivateRoute } from './components';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<PrivateRoute exact path='/' component={HomePage} />
					<PrivateRoute exact path='/training' component={Training} />
					<PrivateRoute exact path='/jobsearch' component={JobSearch} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={SignUp}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
