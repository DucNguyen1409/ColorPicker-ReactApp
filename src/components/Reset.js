import React, { Component } from 'react';

class Reset extends Component { 

  ResetDefault=()=>{
     this.props.ResetDefault(true);
  }

  render() {
    return (
        <button type="button" className="btn btn-default" onClick={this.ResetDefault}>Reset All</button> 
    );
  }
}

export default Reset;