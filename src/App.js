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

  ChangeSize=(number)=>{
    console.log(number)
    //size: 8 =< font =< 30
    if(this.state.fontsize + number >= 15 && this.state.fontsize + number <= 30) {
      this.setState({
        fontsize : this.state.fontsize + number
      });
    }else{
      this.setState({
        fontsize: this.state.fontsize
      });
    }
  }

  SettingDefault=(value)=>{
    this.setState({
      color: "red",
      fontsize: 15
    })
  } 

  render() {
    return (
      <div>        
        <div className="container" >         
          <div className="row">                       
              <ColorPicker color = { this.state.color } onReceiveColor={ this.onSetColor }/>             
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">              
              <FontSize 
                fontsize={ this.state.fontsize }
                ChangeSizeChild={this.ChangeSize}
              />
              <Reset ResetDefault={ this.SettingDefault }/>  
            </div>        
              <Result color={this.state.color} fontsize={ this.state.fontsize }/>            
          </div>
        </div>        
      </div>
  )}
}

export default App;
