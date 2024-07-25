import React from 'react';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <div className="article-meta">
            <span>Date: {article.date}</span>
            <span>Author: {article.author}</span>
            <span>Category: {article.category}</span>
            <span>Tags: {article.tags.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;