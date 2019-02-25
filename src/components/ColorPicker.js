import React from 'react'

class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            colors: ["red", "green","blue", "purple", "yellow"]           
        };
    }

    ShowColor(color){
        return {
            backgroundColor : color
        };
    }

    SetActiveColor = (color)=>{
        this.props.onReceiveColor(color);
    }

    render() {

        var elmColors = this.state.colors.map((color, index) => {
            return <span 
                        key={index} 
                        style={ this.ShowColor(color) }
                        className={ this.props.color === color ? 'active' : '' }
                        onClick={ ()=>this.SetActiveColor(color)}
                    />
        });

        return(    
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">              
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        { elmColors }
                        <hr/>
                    </div>
                </div>              
            </div>                             
        );
    }
        
}

export default Product;