import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import {updateList, setLoader} from './../../actions';

class PostBlog extends Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.state = {
      title: '',
      content: '',
      author: '',
      formError: ''
    }
  }

  handleTitleChange(evt){
    this.setState({
      title: evt.target.value,
      formError: ''
    })
  }

  handleContentChange(evt){
    this.setState({
      content: evt.target.value,
      formError: ''
    })
  }

  handleAuthorChange(evt){
    this.setState({
      author: evt.target.value,
      formError: ''
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    if(this.state.title !== '' && this.state.content !== '' && this.state.author !== ''){
      var request = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      }
      axios.post(`/card`, request)
        .then(res => {
          //const posts = res.data.data.children.map(obj => obj.data);
          //this.setState({ cards: res.data });
          /*this.props.setLoader(true);
          this.props.updateList();*/
          this.setState({
            title: '',
            content: '',
            author: '',
            formError: ''
          }, () => {
            this.props.setLoader(true);
            this.props.updateList();
          });
        }).catch(err => {
          this.setState({
            formError: err
          });
        });
    } else{
      this.setState({
        formError: '*All fields are mandatory'
      })
    }

  }

  render(){
    return (
      <div className='blog-form'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-header'>Add a blog</div>
          <div><input type='text' className='form-control' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title}/></div>
          <div><textarea className='form-control' placeholder='Content' onChange={this.handleContentChange} value={this.state.content}></textarea></div>
          <div><input type='text' className='form-control' placeholder='Author' onChange={this.handleAuthorChange} value={this.state.author} /></div>
          {this.state.formError !== '' ? <div className='form-error'>{this.state.formError}</div> : ''}
          <input type='submit' className='btn' />
        </form>
      </div>
    );
  }
}

export default connect(() => {return {}}, {updateList, setLoader})(PostBlog);
