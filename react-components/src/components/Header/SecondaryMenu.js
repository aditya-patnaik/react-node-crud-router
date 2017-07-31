import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

class SecondaryMenu extends Component {
	render(){
		return (
			<div className='sec-menu-container'>
        <NavLink to='/about'><div>ABOUT</div></NavLink>
        <NavLink to='/benefits'><div>MEMBERSHIP BENEFITS</div></NavLink>
        <NavLink to='/resources'><div>RESOURCES</div></NavLink>
        <NavLink to='/blog'><div>BLOG</div></NavLink>
        <NavLink to='/contact'><div>CONTACT</div></NavLink>
        <div className='spl-menu'>
          <div>CLAIM FREE REPORT</div>
          <div>LOGIN</div>
        </div>
			</div>
		);
	}
}

export default SecondaryMenu;
