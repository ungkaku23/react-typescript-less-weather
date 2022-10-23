import * as React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import './App.less';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}
export default App;
