import React, { Component } from 'react';

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
      <button onClick={() => this.props.fetchPosts()}>Fetch Posts</button>
      { this.props.blog.isFetching && <div>Fetching...</div>}
        post list
      </div>
    );
  }
}

export default PostList;
