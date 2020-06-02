import React from 'react';
import classes from './Spinner.module.css'

const Spinner = () => (
    <div>
        <div className={classes.Loader}></div>
        <p style={{textAlign: 'center'}}>Processing...</p>
    </div>
    
);

export default Spinner;