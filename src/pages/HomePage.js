import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import {articles} from '../data/articles';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>記事一覧</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;