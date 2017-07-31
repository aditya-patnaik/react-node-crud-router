import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import axios from 'axios';

import PostBlog from './PostBlog';
import {updateList} from '../../actions';

class Body extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
    this.state = {
      error: '',
      cards: []
    }
  }
  componentDidMount(){
    this.props.updateList();
    /*axios.get(`/cards`)
      .then(res => {
        //const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ cards: res.data });
      });*/
  }
  renderList(){
    //var cards = this.state.cards;
    var cards = this.props.blogList;
    var output = [];
    for(var i = cards.length - 1; i > -1; i--){
      var markup = [];
      markup.push(<NavLink key={'blog/' + cards[i]._id} to={'blog/' + cards[i]._id}><div className='title' key={'title-' + i}>{cards[i].title}</div></NavLink>);
      markup.push(<div className='author' key={'author-' + i}>POSTED BY <b>{cards[i].author}</b></div>);
      markup.push(<div className='blog-thumb' key={'blog-thumb-' + i}><img src='resources/images/Blog_pic.jpg' className='img-responsive' /></div>);
      markup.push(<div className='content' key={'content-' + i}>{cards[i].content}</div>);
      output.push(<div className='card' key={i}>{markup}</div>);
    }
    return output;
  }
	render(){
		return (
			<div className='body-container container'>
        <div className='cards-container'>
          {
            this.props.loader ?
            <div className='loader'>
              <img src='resources/images/ripple.svg' width='50'/>
            </div>
            :
            ''
          }
          {this.state.error === '' ? this.renderList() : this.state.error}
        </div>
        <PostBlog />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  const {blogList, loader} = state.blog
  return {blogList, loader};
}

export default connect(mapStateToProps, {updateList})(Body);
