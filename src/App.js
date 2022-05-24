import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor()
  {
    super(); 
    this.state = {
      monsters: [
        {
          name: 'Linda'
        },
        {
          name: 'Frank'
        },
        {
          name: 'Jackie'
        },
        {
          name: 'Cyrus'
        }
      ]
    };
  }

  render()
  {
    return (
      <div className="App">
       {
        //Passing a callback function through .map to invoke every single elements from the array.
         this.state.monsters.map((monster)=> 
         {
           return <h1>{monster.name}</h1>
         })
       }
      </div> 
    );
  }
}
export default App;