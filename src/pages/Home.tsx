import React from 'react';
import { MyTypes } from '../store/types';
import { bindActionCreators } from 'redux';
import * as counterActions from '../features/counter/actions';
import { connect } from 'react-redux';
import { history } from '../store';

const mapStateToProps = ({ counterReducer }: MyTypes.RootState) => {
	return {
		count: counterReducer.count,
	};
};

const mapDispatchToProps = (dispatch: MyTypes.AppDispatch) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
		},
		dispatch
	);

type HomeProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const Home = (props: HomeProps) => {
	return (
		<div id="wrapper-home">
			<p>Home Page</p>
			<p>{props.count}</p>
			<button onClick={() => history.push('/about')}>To About Page</button>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.decrement}>Decrement</button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
