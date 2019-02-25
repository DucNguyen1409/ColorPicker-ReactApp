import React, { Component } from 'react';
import './App.css'

import Reset from './components/Reset'
import Result from './components/Result'
import ColorPicker from './components/ColorPicker'
import FontSize from './components/FontSize'

class App extends Component { 

  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontsize : 15
    }
  }
  onSetColor = (param) =>{
    this.setState({
      color : param
    });
  }

  render() {
    return (
      <div>        
        <div className="container" >         
          <div className="row">                       
              <ColorPicker color = { this.state.color } onReceiveColor={ this.onSetColor }/>             
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">              
              <FontSize />
              <Reset />  
            </div>        
              <Result color={this.state.color}/>            
          </div>
        </div>        
      </div>
  )}
}

export default App;
