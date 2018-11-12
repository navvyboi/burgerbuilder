import React from 'react'
import classes from './Modal.css'

const modal = (props) => (
    <div className={classes.modal}>
        {props.children}
    </div>
)

export default modal