import React, { Component } from 'react';

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
      <button onClick={() => this.props.fetchPosts()}>Fetch Posts</button>
      { this.props.blog.isFetching && <div>Fetching...</div>}
        post list
        {
          this.props.blog.posts.map(p => <div>{p.title}</div>)
        }
      </div>
    );
  }
}

export default PostList;
