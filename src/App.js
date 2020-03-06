import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, Login, Training, JobSearch, Careers, CareerLanding, AmbassadorPage, SignUpPage, PeopleSearch, CareerDetailPage } from './pages';
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
					<Route exact path='/' component={HomePage} />
					<PrivateRoute exact path='/training' component={Training} />
					<PrivateRoute exact path='/jobsearch' component={JobSearch} />
					<PrivateRoute exact path='/career-landing' component={CareerLanding} />
					<PrivateRoute exact path='/careers' component={Careers} />
					<PrivateRoute exact path='/ambassador' component={AmbassadorPage}/>
					<PrivateRoute exact path='/signup' component={SignUpPage} />
					<PrivateRoute exact path='/peoplesearch' component={PeopleSearch}/>
					<PrivateRoute exact path='/career/welding' component={CareerDetailPage} />
					<Route path='/login' component={Login} />
				</Switch>
			</Router>
		</div>
	  );
	}
  }

  export default App;
