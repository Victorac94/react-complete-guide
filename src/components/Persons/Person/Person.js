import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()");
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if(this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          { auth => auth ? <p>I'm logged in</p> : null }
        </AuthContext.Consumer>
        <p onClick={this.props.clickP}>My name is {this.props.name} and I am {this.props.age} years old.</p>
        <input ref={ this.inputElement } type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  clickP: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
