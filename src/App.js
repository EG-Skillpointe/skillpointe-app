import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	HomePage,
	Login,
	Training,
	JobSearch,
	Careers,
	CareerLanding,
	AmbassadorPage,
	SignUpPage,
	PeopleSearch,
	CareerDetailPage,
	FinanceSearch,
	TrainingLanding,
	TrainingDetailPage,
	ConstructionPage
} from './pages';
import { PrivateRoute } from './components';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	componentDidMount() {
		this.redirectNonMobile();
	}
	
	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.redirectNonMobile();
	};

	isMobile = () => {
		if (window.innerWidth > 500){
			return false
		}
		return true
	}
	
	redirectNonMobile = () => {
		if (!this.isMobile()) {
			if (window.location.href.includes('construction')){
				return
			}
			window.location.replace('/construction')
		}
	}
  
	render() {
		console.log(window.pageYOffset)
	  return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/jobsearch' component={JobSearch} />
					<Route exact path='/peoplesearch' component={PeopleSearch}/>

					<Route exact path='/careers' component={Careers} />
					<Route exact path='/career-landing' component={CareerLanding} />
					<Route exact path='/career/welding' component={CareerDetailPage} />

					<Route exact path='/ambassador' component={AmbassadorPage}/>
					<Route path='/login' component={Login} />
					<Route exact path='/signup' component={SignUpPage} />

					<Route exact path='/training' component={TrainingLanding} />
					<Route exact path='/training/finance' component={FinanceSearch} />
					<Route exact path='/training/detail' component={TrainingDetailPage} />
					<Route exact path='/training/search' component={Training} />

					<Route path='/construction' component={ConstructionPage}/>
				</Switch>
			</Router>
		</div>
	  );
	}
  }

  export default App;