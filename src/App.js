import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        {/* ここに他のコンポーネントやページを追加 */}
      </main>
      <Footer />
    </div>
  );
};

export default App;