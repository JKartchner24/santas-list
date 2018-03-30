import React, { Component } from 'react';
import SantaForm from './santa_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">

          <div className="santa-heading">
            <h1>Christmas list for Santa</h1>  
            <div className="santa-subheading">
              Fill out the fields below with the 12 gifts you want from santa<br/>then click the generate button to create the letter to santa.
            </div>
          </div>
          <SantaForm />
        </div>
      </div>
    );
  }
}