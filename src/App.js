import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageContent from './components/pages/PageContent';

function App() {
  console.log('TESTE');
  return (
    <BrowserRouter>
      <div>
        <PageContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
