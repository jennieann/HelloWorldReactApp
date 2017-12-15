import React, { Component } from 'react';
import './HelloWorld.css';




function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
@DragSource(/* ... */)
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
    const { connectDragSource, isDragging } = this.props;
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}
        <br/>

        <button className="frenchify" onClick={this.toggleLanguage}>{this.state.language}</button>
        <button className="remove" onClick={this.removeGreeting}>Remove me!</button>
      </div>

    );
  }
};

export default HelloWorld;
