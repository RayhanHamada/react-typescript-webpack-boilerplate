import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './state_management/store';
import './style.scss';
import { ConnectedRouter } from 'connected-react-router';
import Home from './pages/Home';
import About from './pages/About';
import { Route } from 'react-router';

// override the parameter if you desire a different initial state for your store
const store = configureStore(/*override this parameter if you desire different initial state for your store */);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route exact path="/" render={() => <Home />} />
			<Route path="/about" render={() => <About />} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);
