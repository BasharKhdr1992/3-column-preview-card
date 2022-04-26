import React from 'react';
import './App.css';
import PreviewCard from './components/PreviewCard';
import Appendix from './components/Appendix';

const App = () => {
  return (
    <div className="wrapper">
      <PreviewCard />
      <Appendix />
    </div>
  );
};

export default App;
