import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';
import './App.scss';
import { PostList } from './components/PostList/PostList';

const ListOfPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={ListOfPosts} />
  </div>
);

export default App;
