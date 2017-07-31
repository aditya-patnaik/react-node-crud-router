import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Social from './Social';
import SecondaryMenu from './SecondaryMenu';
import MainMenu from './MainMenu';

class Header extends Component {
	render(){
		return (
			<div className='container header'>
				<Social />
        <SecondaryMenu />
        <MainMenu />
			</div>
		);
	}
}

export default Header;
