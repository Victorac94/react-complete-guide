import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log("[Persons.js] inside constructor()");
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount()");
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Persons.js] inside componentWillReceiveProps " + nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] inside shouldComponentUpdate " + nextProps + nextState);
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clickP !== this.props.clickP;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.js] inside componentWillUpdate " + nextProps + nextState);
  }

  componentDidUpdate() {
    console.log("[Persons.js] inside componentDidUpdate ");
  }

  getSnapshotBeforeUpdate() {
    console.log("[Persons.js] inside getSnapshotBeforeUpdate()");
  }

  render() {
    console.log("[Persons.js] render()");
    return this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          position={index}
          ref={this.lastPersonRef}
          changed={(event) => this.props.changed(event, person.id)}
          clickP={() => this.props.clicked(index)}
          name={person.name}
          age={person.age} />
    });
  }
}

export default Persons;
