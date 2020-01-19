import React from 'react';
import { connect } from 'react-redux';
import { MyTypes } from './types';
import { Switch, Route } from 'react-router';
import * as counterActions from './state_management/actions/counterActions';
import { bindActionCreators, Dispatch } from 'redux';
import Home from './pages/Home';
import About from './pages/About';

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
		// <div>
		// 	<p>It &rsquo; s Alllllllll Typescript !!!</p>
		// 	<p>{props.count}</p>
		// 	<button onClick={props.increment}>Increment</button>
		// 	<button onClick={props.decrement}>Decrement</button>
		// 	<button onClick={() => props.incrementBy(7)}>Increment By</button>
		// 	<button onClick={() => props.decrementBy(2)}>Decrement By</button>
		// </div>
		<Switch>
			<Route exact path="/" render={() => <Home />} />
			<Route path="/about" render={() => <About />} />
		</Switch>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
