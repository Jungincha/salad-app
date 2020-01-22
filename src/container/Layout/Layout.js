import React, { Component } from 'react';
import './Layout.module.css';
import Aux from '../../hoc/Aux/Aux';
class Layout extends Component {
    render() {
        return (
            <Aux>
                <p>Toolbar</p>
                <p>Sidebar</p>
                <main>
                   {this.props.children} 
                </main>
            </Aux>
        );
    }
}

export default Layout;