import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class BlogEntry extends Component {
  constructor(){
    super();
    this.state = {
        card: '',
        err: ''
    }
  }
  componentWillMount(){
    var id = this.props.location.pathname.substring(6, 30);
    axios.get(`/cards/${id}`)
			.then(res => {
				var data = res.data;
        this.setState({
          card: data.card
        })
			}).catch(err => {
        this.setState({err})
      });
  }
  renderBlogEntry(){
    var markup = [];
    var card = this.state.card;
    const imagePath = window.location.origin + '/resources/images/Blog_pic.jpg';
    markup.push(<div className='title'>{card.title}</div>);
    markup.push(<div className='author'>POSTED BY <b>{card.author}</b></div>);
    markup.push(<div className='blog-thumb'><img src={imagePath} className='img-responsive' /></div>);
    markup.push(<div className='content'>{card.content}</div>);
    return markup;
  }
	render(){
    const loaderPath = window.location.origin + '/resources/images/ripple.svg';
		return (
			<div className='single-blogEntry container'>
        {this.state.card === '' ? <div className='loader'><img src={loaderPath} width='50'/></div> : this.renderBlogEntry()}
			</div>
		);
	}
}

export default BlogEntry;
