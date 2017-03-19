import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Ankush</h2>
                </div>

            </div>
        );
    }
}

export default App;
