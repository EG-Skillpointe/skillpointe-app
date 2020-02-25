import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, Login, Training, JobSearch, Careers } from './pages';
import { PrivateRoute, Footer } from './components';

import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
	  
	}
  
	render() {
	  return (
		<div className="App">
			<Router>
				<Switch>
					<PrivateRoute exact path='/' component={HomePage} />
					<PrivateRoute exact path='/training' component={Training} />
					<PrivateRoute exact path='/jobsearch' component={JobSearch} />
					<PrivateRoute exact path='/careers' component={Careers} />
					<Route path='/login' component={Login} />
				</Switch>
			</Router>
			<Footer />
		</div>
	  );
	}
  }

  export default App;