import React, { Component } from 'react';

class Busqueda extends Component {

  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      colors:['Red']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
      return(
        <div>
          <div className="row">
            <div className="col-md-5">
              <input size="60" type="text" name="busqueda" value={this.state.busqueda} onChange={this.handleInputChange} required />
            </div>
          </div>
          <br/>
        </div>
      );
  }
}

export default Busqueda;
