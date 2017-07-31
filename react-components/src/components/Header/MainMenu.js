import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainMenu extends Component {
	render(){
		return (
			<div className='main-menu-container container'>
        <div>ALL</div>
        <div>INVESTMENTS</div>
        <div>FINANCE</div>
        <div>CREDIT</div>
        <div>OTHER</div>
        <div>MORE</div>
        <div>FAMILY</div>
        <div>RUPEE</div>
			</div>
		);
	}
}

export default MainMenu;
