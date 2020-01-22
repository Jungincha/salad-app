import React from 'react';
import classes from './SaladControls.module.css';
import SaladControl from './SaladControl/SaladControl';

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Chicken', type: 'chicken'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Cucumber', type: 'cucumber'},
    {label: 'Avocado', type: 'avocado'}
];

const SaladControls = (props) => {
    return (
        <div className={classes.SaladControls}>
            <p>Current price : </p>
            {controls.map(ctrl => (
                < SaladControl 
                key={ctrl.label}
                label={ctrl.label}
                />
            ))}
            <button>ORDER</button>
        </div>
    );
};

export default SaladControls;