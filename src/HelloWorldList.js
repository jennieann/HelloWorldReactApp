import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';


class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jennie-Ann', 'Kerstin', 'Bo']};
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  addGreeting(newName){
    this.setState({greetings: [...this.state.greetings, newName]});
  }

  removeGreeting(removeName){

    // const filteredGreetings = this.state.greetings.filter(name => {
    //   return name !== removeName;
    // });

    var name = this.state.greetings.indexOf(removeName);

    if(name !== -1) {
	    this.state.greetings.splice(name, 1);
    }
    const filteredGreetings = this.state.greetings;

    this.setState({ greetings: filteredGreetings });
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld
        key={name}
        name={name}
        removeGreeting={this.removeGreeting}
      />
    ));
  }
  render(){
    return(
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    )
  }
}

// export default HelloWorldList;
export default DragDropContext(HTML5Backend)(HelloWorldList);
