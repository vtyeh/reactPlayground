import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses  = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello, world!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/* This onClick handler syntax for passing arguments is more efficient than the ()=> depending on size of application*/}
            <button 
            className={btnClass}
            // onClick={this.switchNameHandler.bind(this, 'Vanessa')}>
            onClick={props.clicked}>
            Switch Name
            </button>
        </div>
    );
};

export default cockpit;