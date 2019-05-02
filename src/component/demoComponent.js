import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export default class DemoComponent extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">
                <PostTitle>{post.title}</PostTitle>
              </span>
              <PostBody>{post.body}</PostBody>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <PostList className="container">
          <Title className="center">Demo component</Title>
          {postList}
        </PostList>
        <PostEnd>
          ########################################################################################################################
        </PostEnd>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #6c5ce7;
`;

const PostList = styled.div`
  text-align: center;
`;

const PostTitle = styled.h4`
  font-size: 1em;
  color: #30336b;
`;

const PostBody = styled.p`
  font-size: 1em;
  color: #130f40;
`;

const PostEnd = styled.p`
  text-align: center;
  font-size: 1em;
  color: #22a6b3;
`;
