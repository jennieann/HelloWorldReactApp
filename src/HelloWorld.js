import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DragSource } from 'react-dnd'

import './HelloWorld.css';
import { ItemTypes } from './ItemTypes';

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const listSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		}
	},
}


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
    const { connectDragSource, isDragging, moveCard, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1
    return connectDragSource (
      <div className="HelloWorld" style={{ ...style, opacity }}>
        {this.state.greeting} {this.props.name}
        <br/>

        <button className="frenchify" onClick={this.toggleLanguage}>{this.state.language}</button>
        <button className="remove" onClick={this.removeGreeting}>Remove me!</button>
      </div>

    );
  }
};

HelloWorld.propTypes = {
  connectDragSource: PropTypes.func.isRequired,


  isDragging: PropTypes.bool.isRequired

};
export default DragSource(ItemTypes.LISTITEM, listSource, collect)(HelloWorld);
