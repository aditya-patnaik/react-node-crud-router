import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Social extends Component {
	render(){
		return (
			<div className='social-container'>
        <img src='resources/images/facebook_icon.png' />
        <img src='resources/images/Twitter_icon.png' />
        <img src='resources/images/Linkedin_icon.png' />
        <img src='resources/images/Youtube_icon.png' />
			</div>
		);
	}
}

export default Social;
