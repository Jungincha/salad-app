import React, {Component} from 'react';
import classes from './SaladIngredient.module.css';
import PropTypes from 'prop-types';

class SaladIngredient extends Component {


    render() {
        let ingredient = null;
        switch(this.props.type) {
            case('lettuce') :
                ingredient = <span className={classes.Lettuce}><img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/233/leafy-green_1f96c.png' /></span>;
                break;
            case('egg') :
                ingredient = <span className={classes.Egg}><img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/egg_1f95a.png' /></span>;
                break;
            case('tomato') :
                ingredient = <span className={classes.Tomato}><img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/tomato_1f345.png' /></span>;
                break;
            case('cucumber') :
                ingredient = <span className={classes.Cucumber}><img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/cucumber_1f952.png' /></span>;
                break;
            case('avocado') :
                ingredient = <span className={classes.Avocado}><img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/avocado_1f951.png' /></span>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

SaladIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default SaladIngredient;

