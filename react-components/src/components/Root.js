import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Body from './Body';
import About from './Body/About';
import Benefits from './Body/Benefits';
import Contact from './Body/Contact';
import Resources from './Body/Resources';
import BlogEntry from './Body/BlogEntry';

class BlogPageDecider extends Component {
	render(){
		return (
			<Switch>
				<Route path='/blog/:blogId' component={BlogEntry}/>
    	  <Route exact path='/blog' component={Body}/>
    	</Switch>
		)
	}
}

class Root extends Component {
	render(){
		return (
			<div className='container'>
				<Header />
				<Switch>
					<Route path='/blog' component={BlogPageDecider}/>
					<Route path='/about' component={About}/>
					<Route path='/benefits' component={Benefits}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/resources' component={Resources}/>
				</Switch>
			</div>
		);
	}
}

export default Root;
