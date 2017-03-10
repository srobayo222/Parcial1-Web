import React, { Component } from 'react';
import './App.css';

const ROOT_URL = "http://localhost:9000/flickr";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagenes: {}
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Flickr Rainbow</h1>
          </div>
        </div>
        <br/>
        <Busqueda url={ROOT_URL}/>
      </div>
    );
  }
}

export default App;
