import React from 'react'

class FontSize extends React.Component {

    render() {
        return(    
            <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size : 15px</h3>
                  </div>
                  <div className="panel-body">                    
                    <button type="button" className="btn btn-success">increase</button>
                    <button type="button" className="btn btn-success">reduce</button>
                  </div>
              </div>                             
        );
    }
        
}

export default FontSize;