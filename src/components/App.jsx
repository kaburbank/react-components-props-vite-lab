import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";
import blogData from "../data/blog.js";

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;