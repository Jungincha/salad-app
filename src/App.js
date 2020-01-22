import React, { Component } from 'react';
import Layout from './container/Layout/Layout';
import SaladMaker from './container/SaladMaker/SaladMaker';

import './App.module.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Layout>
          <SaladMaker />
        </Layout>
      </div>
    );
  }
}

export default App;
