import React from 'react'
import classes from './DrawerToggle.css'

const toggleDrawer = props => (
    <div className={classes.DrawerToggle} onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default toggleDrawer