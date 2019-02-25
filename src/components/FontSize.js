import React from 'react'

class FontSize extends React.Component {
    
  ChangeSize = (number)=>{
    this.props.ChangeSizeChild(number)
  }

    render() {
        return(    
            <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size : { this.props.fontsize }px</h3>
                  </div>
                  <div className="panel-body">                    
                    <button type="button" className="btn btn-success" onClick={() => this.ChangeSize(+1)}>increase</button>
                    <button type="button" className="btn btn-success" onClick={() => this.ChangeSize(-1)}>reduce</button>
                  </div>
              </div>                             
        );
    }
        
}

export default FontSize;