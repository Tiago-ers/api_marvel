import React from 'react';
import { HashRouter } from 'react-router-dom';

import PageContent from './components/pages/PageContent';

function App() {
  console.log('TESTE');
  return (
    <HashRouter basename='/'>
      <div>
        <PageContent />
      </div>
    </HashRouter>
  );
}

export default App;
