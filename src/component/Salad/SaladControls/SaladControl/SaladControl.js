import React from 'react';
import classes from './SaladControl.module.css';

const SaladControl = (props) => (
    <div className={classes.SaladControl}>
        <div className={classes.Label}>{props.label}</div>
            <button className={classes.minus} onClick={props.minus} disabled={props.disabled}>-</button>
            <button className={classes.plus} onClick={props.plus}>+</button>
    </div>
);

export default SaladControl;