import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MyTypes } from './store/store-type-helper';
import * as counterActions from './features/counter/actions';
import * as userActions from './features/user/actions';

const mapStateToProps = ({
	counterReducer,
	userReducer,
}: MyTypes.RootState) => ({
	count: counterReducer.count,
	users: userReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
			asyncIncrement: counterActions.asyncIncrement,
			fetchUsers: userActions.fetchUsers,
			resetUsers: userActions.resetUsers,
		},
		dispatch
	);

type AppProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const App = (props: AppProps) => {
	return (
		<div id="app-wrapper">
			<p>Welcome!</p>
			<br />
			<p>{props.count}</p>
			<br />
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.decrement}>Decrement</button>
			<button
				onClick={ev => {
					ev.persist();
					props.asyncIncrement();
				}}
			>
				Async Increment
			</button>
			<br />
			<button
				onClick={ev => {
					ev.persist();
					props.fetchUsers();
				}}
			>
				Fetch User
			</button>
			<br />
			{props.users.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
