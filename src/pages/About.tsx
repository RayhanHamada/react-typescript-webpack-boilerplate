import React from 'react';
import { MyTypes } from './../types';
import * as counterActions from '../features/counter/counterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from '../store';

const mapStateToProps = ({ counterReducer }: MyTypes.RootState) => ({
	count: counterReducer.count,
});

const mapDispatchToProps = (dispatch: MyTypes.AppDispatch) =>
	bindActionCreators(
		{
			increment: counterActions.increment,
			decrement: counterActions.decrement,
		},
		dispatch
	);

type AboutProps = ReturnType<typeof mapDispatchToProps> &
	ReturnType<typeof mapStateToProps>;

const About = (props: AboutProps) => {
	return (
		<div id="wrapper-about">
			<p>{props.count}</p>
			<button onClick={() => history.goBack()}>GoBack</button>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.decrement}>Decrement</button>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
