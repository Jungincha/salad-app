import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import './SaladMaker.module.css';
import Salad from '../../component/Salad/Salad';
import SaladControls from '../../component/Salad/SaladControls/SaladControls';

class SaladMaker extends Component {
    render() {
        return (
            <Aux>
                <p>Modal</p>
                <Salad />
                <SaladControls />
            </Aux>
        );
    }
}

export default SaladMaker;