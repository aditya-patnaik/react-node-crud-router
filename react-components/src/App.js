import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Root from './components/Root';

class App extends Component {
	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store} >
				<BrowserRouter>
					<Route path="/" component={Root} />
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
