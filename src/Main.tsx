import React from 'react';
import Header from './componets/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Challenge from './routes/Challenge';
import Login from './routes/Login';
import Register from './routes/Register';

function Main() {
	return (
		<div className="Main">
			<Router>
				<Header />
				<Switch>
					<Route path="/challenge">
						<Challenge />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Main;
