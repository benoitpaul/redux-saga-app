import React, { Component } from 'react';
import {connect} from 'react-redux';

import { fetchPosts } from './actions'

import PostList from './PostList';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        posts
        <PostList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    blog: state.blog
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

//export default Blog;
