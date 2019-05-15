import React from 'react';
import './style.css'
import RouterConfig from './router/index'
import MainHeader from './views/main-header'
import MainFooter from './views/main-footer'

function App() {
  return (
    <div className="wrap">
      <MainHeader />
      <RouterConfig />
      <MainFooter />
    </div>
  );
}

export default App;
