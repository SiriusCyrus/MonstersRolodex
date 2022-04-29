import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor()
  {
    super(); 
    this.state = 
    {
      name: {firstName: 'Aniruddha', lastName: 'Nag'},
      company: 'ZTM'
    }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello! { this.state.name.firstName } { this.state.name.lastName }, Hi! I work at {this.state.company}
          </p>
          <button 
            onClick={()=> 
            {
              this.setState({name: {firstName: 'Sirius', lastName: 'Cyrus' }}) //Shallow Merge using setState
              console.log(this.state);
            }}
          >Change Name
          </button>  
        </header>
      </div>
    );
  }
}

export default App;