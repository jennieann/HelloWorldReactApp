import React, { Component } from 'react';
import {render} from 'react-dom';
import {SortableElement, arrayMove} from 'react-sortable-hoc';


import './HelloWorld.css';

const SortableItem = SortableElement(({name, removeGreeting}) => <HelloWorld name={name} removeGreeting={removeGreeting}/>);


class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' , language: 'Frenchify'};

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }
  toggleLanguage(){
    console.log(this.state.greeting)
    this.setState(this.state.greeting === 'Hello' ? {greeting: 'Bonjour', language: 'In english'} : {greeting: 'Hello', language: 'Frenchify'})
  }

  render(){

    return  (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}
        <br/>

        <button className="frenchify" onClick={this.toggleLanguage}>{this.state.language}</button>
        <button className="remove" onClick={this.removeGreeting}>Remove me!</button>
      </div>
    );
  }
};


export default SortableItem;
