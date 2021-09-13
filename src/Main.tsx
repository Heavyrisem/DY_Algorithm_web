import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import Challenge from './routes/Challenge';
import Login from './routes/Login';
import Register from './routes/Register';
import Sidemenu from './componets/Sidemenu';
import Header from './componets/Header';

export interface User_T {
	U_ID: string
	U_Token: string
	U_Nickname: string
}

function Main() {
	const [User, setUser] = useState<User_T>();
	const [path, setPath] = useState<string[]>([]);
	const [buttons, setButtons] = useState([<div>123123</div>]);

	let Path_C: PathContext_T = {
		path: path,
		setPath: setPath
	}

	let Buttons_C: HeaderButton_T = {
		buttons: buttons,
		setButtons: setButtons
	}


	return (
		<div className="Main">
		<PathContext.Provider value={Path_C}>
				<Router>
					<Header>
						{/* {buttons.map(v))} */}
						<Sidemenu User={User} />
					</Header>
					<Switch>
							<Route path="/challenge/:id" component={Challenge} />
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
			</PathContext.Provider>
		</div>
	);
}


export interface PathContext_T {
    path: string[],
    setPath: (path: string[]) => void
}
export const PathContext = React.createContext<PathContext_T>({
    path: [],
    setPath: (path: string[]) => {}
});

export interface HeaderButton_T {
    buttons: React.ReactElement[],
    setButtons: (buttons: React.ReactElement[]) => void
}
export const HeaderButton = React.createContext<HeaderButton_T>({
    buttons: [],
    setButtons: (buttons) => {}
});

export default Main;
