import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Header from './Header';

import AppData from './AppData'

class App extends Component {
    render() {
        window.appData = AppData.appData().categories;

        return (
            <div className="App">
                <Board/>
            </div>
        );
    }
}

export default App;
