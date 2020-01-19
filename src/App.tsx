import React from 'react';
import { connect } from 'react-redux';
import { MyTypes } from './types';
import * as counterActions from './state_management/actions/counterActions';
import { bindActionCreators, Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
			incrementBy: counterActions.incrementBy,
			decrementBy: counterActions.decrementBy,
		},
		dispatch
	);

const mapStateToProps = ({ counterReducer }: MyTypes.RootState) => {
	return {
		count: counterReducer.count,
	};
};

type AppPropsType = ReturnType<typeof mapDispatchToProps> &
	ReturnType<typeof mapStateToProps>;

const App = (props: AppPropsType) => {
	return (
		<div>
			<p>It &rsquo; s Alllllllll Typescript !!!</p>
			<p>{props.count}</p>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.decrement}>Decrement</button>
			<button onClick={() => props.incrementBy(7)}>Increment By</button>
			<button onClick={() => props.decrementBy(2)}>Decrement By</button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
