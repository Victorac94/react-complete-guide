import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] inside constructor()");
    this.state = {
      persons: [
        { id: 'asldfkj1', name: "Victor", age: 23 },
        { id: 'fjlskdf1', name: "Igor", age: 20 },
        { id: 'oiunsdf1', name: "Jessica", age: 18 }
      ],
      isShowing: false,
      toggleClicked: 0,
      isAuthenticated: false
    };
  }


  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[App.js] inside shouldComponentUpdate()");
  //   return nextState.persons !== this.state.persons ||
  //   nextState.isShowing !== this.state.isShowing;
  // }

  componentWillUpdate() {
    console.log("[App.js] inside componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("[App.js] inside componentDidUpdate()");
  }

  updateNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

// const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    this.setState( (prevState, props) => {
      return {
        isShowing: !(this.state.isShowing),
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    })
  }

  render() {
    console.log("[App.js] render()");
    let persons = null;

    if(this.state.isShowing) {
      persons = <Persons
        persons={this.state.persons}
        changed={this.updateNameHandler}
        clicked={this.deletePersonHandler} />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({isShowing: true})}} >Show Persons</button>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          isShowing={this.state.isShowing}
          login={this.loginHandler}
          toggle={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.isAuthenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
