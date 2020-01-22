import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import * as counterActions from './features/counter/counterActions';
import { MyTypes } from './types';
import { connect } from 'react-redux';

const mapStateToProps = ({ counterReducer }: MyTypes.RootState) => ({
	count: counterReducer.count,
});

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
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
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
