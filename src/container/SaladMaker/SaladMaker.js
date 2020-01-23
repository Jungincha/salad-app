import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import './SaladMaker.module.css';
import Salad from '../../component/Salad/Salad';
import SaladControls from '../../component/Salad/SaladControls/SaladControls';

class SaladMaker extends Component {

    state ={
        ingredients: {
            lettuce: 1,
            egg: 2,
            tomato: 1,
            cucumber: 1,
            avocado: 1
        },
        totalPrice: 4
    }
    render() {
        return (
            <Aux>
                <p>Modal</p>
                <Salad 
                    ingredients={this.state.ingredients} 
                    totalPrice={this.state.totalPrice} />
                <SaladControls />
            </Aux>
        );
    }
}

export default SaladMaker;