import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = classes.Button;

  if(props.isShowing) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }

  return (
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
      <button onClick={props.login} >Login</button>
    </Aux>
  )
}

export default cockpit;
