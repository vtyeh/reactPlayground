import React, { Component} from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from './App.module.css';
// Use uppercase for custom components
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }

class App extends Component {
  // Property (variable for class) should not be initialized with const or let
  // Special property can only be used in component that extends another component (i.e. class-based component)
  // State is when props are passed from inside not outside component
  // Should use function components as often as possible 
  // because applying state to components allows your component to be manipulated from anywhere in the app and makes your app hard to manage
  state = {
    persons: [
      { id: 1, name: 'Venessa', age: 24 },
      { id: 2, name: 'Loc', age: 24 },
      { id: 3, name: 'Warren', age: 30}
    ],
    showPersons: false
  }

  // Handler: a method you're not actively calling but using as event handler. Good practice, not required
  // When calling this method (function) for the onClick, DON'T use () because that will call the function to run immediately. We just want to reference it and run it IF the event (button click) occurs
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   // setState is inherited from component. Takes in an object as argument and will merge it with existing state
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 24 },
  //       { name: 'Loc', age: 24 },
  //       { name: 'Warren', age: 29.5}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {...this.state.persons[personIndex]};
    // const person - Object.assign({}, this.state.persons[personIndex]); An older approach

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // Update state in an immutable fashion, aka without mutating the original state
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // Only two things lead React to update the DOM: changing state and props

  render() {
    // Style the button
    // const style = {
    //   backgroundColor: 'green', // or 'background-color' : 'white'
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid orange',
    //   padding: '8px',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color:'black'
      // }
    // }

    let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       <Person 
    //         name={this.state.persons[0].name} 
    //         age={this.state.persons[0].age} 
    //         changed={this.nameChangedHandler}>I am so cool.</Person>
    //       <Person 
    //         name={this.state.persons[1].name} 
    //         age={this.state.persons[1].age} 
    //         click={() => this.switchNameHandler('Vincent')}>I am a guinea pig.</Person>
    //       <Person 
    //         name={this.state.persons[2].name} 
    //         age={this.state.persons[2].age}>I smell like poo.</Person>
    //     </div> 
    //   );
    // }
    
    if (this.state.showPersons) {
      persons =<Persons 
            persons={this.state.persons}
            deleted={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
          /* {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })} */
  
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }


    // JSX code. Note that class in HTML is turned into className
    // We are not actually using HTML tags. React is converting them behind the scenes
    // We can only have one root element. Best practice to do this
    return (
      // <StyleRoot> // only wrap with StyleRoot for media queries (transforming selectors)
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
          {persons}

          {/* <h1>Hello, world!!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p> */}
          {/* This onClick handler syntax for passing arguments is more efficient than the ()=> depending on size of application*/}
          {/* <button 
            className={btnClass} */}
            {/* // onClick={this.switchNameHandler.bind(this, 'Vanessa')}>
            onClick={this.togglePersonsHandler}>
            Switch Name */}
          {/* </button> */}
          {/*{} inside JSX means you can render Javascript functions, properties (variables), and also conditional statements*/}
          {/* Can only use ternary/simple logic, not block statements (i.e. if/else) */}
          {/* this.state.showPersons ? <div></div> : null */}
          {/* Referencing the persons variable below, does the same thing as the tenary expression above */}
          
        </div>
      // </StyleRoot>
    );
    // This is the equivalent of the JSX code above. JSX gets compiled by React into this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  };
}

// Radium is a higher-order component. Parse your files and add extra features
export default App;

// More dumb, presentational, stateless components. Less smart, container, stateful components: easier to maintain/manage. Clear flow of data, clear where main logic sits and data changes
