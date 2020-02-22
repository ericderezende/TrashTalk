//Herman

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Converter from './components/converter'

const App = (props) => {

  const [file, setFile] = useState('');

  return (
    <div className="App">
      <Converter
        file = {file}
        setFile = {setFile}
      />
    </div>
  );
}

export default App;
