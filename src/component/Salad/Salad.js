import React from 'react';
import classes from './Salad.module.css';


const Salad = (props) => {
    return (
        <div className={classes.Salad}>

            <img className={classes.Plate} src="https://target.scene7.com/is/image/Target/GUEST_ae819d39-43d0-4927-a55d-ea36ade0e33d?wid=488&hei=488&fmt=pjpeg" alt='saladPlate'/>
        </div>
    );
}

export default Salad;