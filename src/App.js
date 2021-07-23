import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Main from './views/Main';
import Update from './views/Update'
import AuthorForm from './components/AuthorForm'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthorForm path="/author/new"/>
        <Main path="/author/"/>
        <Detail path="/author/:id"/>
        <Update path="/author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
