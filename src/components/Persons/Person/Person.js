import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)}!</p>
    // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }
    
    // props.children allows you to add text,html elements, react components inside the Person tag
    return (

        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;

// import React from 'react';
// import Radium from 'radium';
// import './Person.css';

// const person = (props) => {
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)}!</p>

    // const style = {
    //     '@media (min-width: 700px)': {
    //         width: '450px'
    //     }
    // };

    // props.children allows you to add text,html elements, react components inside the Person tag
//     return (
//         <div className="Person" style={style}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     );
// };

// export default Radium(person);