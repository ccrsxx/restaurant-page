import { useState, useMemo } from 'react';
import { Navbar, Content, Footer } from './components';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page: string) => () => {
    setCurrentPage(page);
  };

  const contentKey = useMemo(() => Date.now(), [currentPage]);

  return (
    <div className='App'>
      <Navbar currentPage={currentPage} handleNavClick={handleNavClick} />
      <Content currentPage={currentPage} contentKey={contentKey} />
      <Footer />
    </div>
  );
}
