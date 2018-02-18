import React from 'react';
import { range } from 'lodash';
import '../styles/components/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        App Component {range(0, 10).join(', ')}
      </div>
    );
  }
}

export default App;