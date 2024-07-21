import React, {useState} from 'react';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // ここで検索処理を実装。
    console.log(`Searching for: ${searchQuery}`)
  }
  return (
    <header className="header">
      <div className="header-title">
        <h1>My Blog</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <form className="header-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header