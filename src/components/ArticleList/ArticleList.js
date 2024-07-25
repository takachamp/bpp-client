import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id} className="article-item">
          <div className="article-date">{"article-item"}</div>
          <Link to={article.url} className="article-title">{article.title}</Link>
          <p>
          <Link to={article.url}>
            <img src={article.image} alt={article.title} className="article-image" />
          </Link>
          </p>
          <div className="article-excerpt">{article.excerpt}</div>
          <Link to={article.url} className="read-more">続きを読む</Link>
          <div className="article-meta">
            <span className="article-tags">{article.tags.join(', ')}</span>
            <span className="article-time">{article.time}</span>
            <span className="article-comments">{article.comments}件のコメント</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;