import React from 'react';
import classes from './Salad.module.css';
import SaladIngredient from './SaladIngredient/SaladIngredient';


const Salad = (props) => {

    let selectedIngredients = Object.keys(props.ingredients)
                                .map(igKey => {
                                    return [...Array(props.ingredients[igKey])].map((_, i) => {
                                        return < SaladIngredient key={igKey + i} type={igKey}/>
                                    })
                                })
                                .reduce((arr, el) => arr.concat(el), [])

    if (selectedIngredients.length === 0) {
        selectedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Salad}>
            <div className={classes.Plate}>
                <div className={classes.PlateInner}>

                </div>
                { selectedIngredients }
            </div>    
        </div>
    );
}

export default Salad;