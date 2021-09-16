import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import Home from './routes/Home';
import Challenge, { Challenge_RouteParams } from './routes/Challenge';
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
	const [Buttons, setButtons] = useState<React.ReactElement[]>([]);

	let Path_C: PathContext_T = {
		path: path,
		setPath: setPath
	}

	let Buttons_C: HeaderButton_T = {
		Buttons: Buttons,
		setButtons: setButtons
	}


	return (
		<div className="Main">
		<HeaderButtonsContext.Provider value={Buttons_C}>
		<PathContext.Provider value={Path_C}>
			<Router>
				<Header>
					{/* <>{Buttons.map(Btn => Btn)}</> */}
					<Sidemenu User={User} />
				</Header>
				<Switch>
						<Route path="/challenge/:id" component={(match: RouteComponentProps<Challenge_RouteParams>) => <Challenge match={match} />} />
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
		</HeaderButtonsContext.Provider>
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
    Buttons: React.ReactElement[],
    setButtons: (Buttons: React.ReactElement[]) => void
}
export const HeaderButtonsContext = React.createContext<HeaderButton_T>({
    Buttons: [],
    setButtons: (Buttons) => {}
});

export default Main;
