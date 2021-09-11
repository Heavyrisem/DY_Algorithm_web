import React, { useState } from 'react';
import Header from './componets/Header';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import Challenge from './routes/Challenge';
import Login from './routes/Login';
import Register from './routes/Register';

export interface User_T {
	U_ID: string
	U_Token: string
	U_Nickname: string
}

function Main() {
	const [User, setUser] = useState<User_T>();


	return (
		<div className="Main">
			<Router>
				<Header User={User}/>
				<Switch>
					<Route path="/challenge">
						<Challenge />
					</Route>
					<Route path="/login">
						{User? <Redirect to="/" /> : <Login setUser={setUser} />}
					</Route>
					<Route path="/register">
						{User? <Redirect to="/" /> : <Register setUser={setUser} />}
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
