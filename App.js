// import logo from './logo.svg';
import './App.css';
import './Components/Sty.css';
import './Components/Style.module.css';
import Function from './Components/Function';
import Aclass from './Components/Aclass';
import React, { Component } from 'react';

 class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
         msg:false,
         msg2:false
    }  
}

showfun=()=>{
  this.setState({msg:!this.state.msg})
}

showcls=()=>{
  this.setState({msg2:!this.state.msg2})
}
  render() {
    return (
      <div className="App">
     <h1>Styling using Functional and Class Component</h1>
     <button className='btn' onClick={this.showfun}>To see styling in functional component</button>
     <button className='btn' onClick={this.showcls}>To see styling in class component</button>

     <div className='mymaindiv'>
      {
        this.state.msg?<Function/>:null
      }
       {
        this.state.msg2?<Aclass/>:null
      }
    </div>
    </div>
    )
  }
}
export default App

