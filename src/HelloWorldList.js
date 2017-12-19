import React, { Component } from 'react';
import {SortableContainer, arrayMove} from 'react-sortable-hoc';

import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';


const SortableList = SortableContainer(({greetings, removeGreeting}) => {
  return (
    <div>
      {greetings.map((name, index) => (
        <HelloWorld
           index={index}
           key={name}
           name={name}
           removeGreeting={removeGreeting}
         />
      ))}
    </div>
  );
});

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jennie-Ann', 'Kerstin', 'Bo']};
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      greetings: arrayMove(this.state.greetings, oldIndex, newIndex),
    });
  };
  addGreeting (newName) {
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

  // renderGreetings() {
  //   return this.state.greetings.map(name => (
  //     <HelloWorld
  //       key={name}
  //       name={name}
  //       removeGreeting={this.removeGreeting}
  //     />
  //   ));
  // }
  render(){
    return(
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting}/>
        <SortableList greetings={this.state.greetings} removeGreeting={this.removeGreeting} onSortEnd={this.onSortEnd}/>
      </div>
    )
  }
}

// export default HelloWorldList;
export default (HelloWorldList);
