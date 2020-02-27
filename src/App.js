import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, Login, Training, JobSearch, Careers, CareerLanding } from './pages';
import { PrivateRoute } from './components';

import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
	  
	}
  
	render() {
		console.log(window.pageYOffset)
	  return (
		<div className="App">
			<Router>
				<Switch>
					<PrivateRoute exact path='/' component={HomePage} />
					<PrivateRoute exact path='/training' component={Training} />
					<PrivateRoute exact path='/jobsearch' component={JobSearch} />
					<PrivateRoute exact path='/career-landing' component={CareerLanding} />
					<PrivateRoute exact path='/careers' component={Careers} />
					<Route path='/login' component={Login} />
				</Switch>
			</Router>
		</div>
	  );
	}
  }

  export default App;
