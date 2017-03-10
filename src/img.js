import React, { Component } from 'react';
class Imagen extends Component {
    render() {
        var img="http://farm5.staticflickr.com/"+this.props.imagen.server+"/"+this.props.imagen.id+"_"+this.props.imagen.secret+".jpg";
        return(
            <div>
                <img className="imagen" key={this.props.index} src={img}/>
            </div>
        );
    }
}
export default Imagen;