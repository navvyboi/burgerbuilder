import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {Label: 'Salad', type: 'salad'},
    {Label: 'Bacon', type: 'bacon'},
    {Label: 'Cheese', type: 'cheese'},
    {Label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.Controls}>
        <p>Current Price: ${props.price.toFixed(2)}</p>
        {controls.map(control => <BuildControl 
            key={control.type}
            label={control.Label}
            type={control.type} 
            added={() => props.ingredientAdded(control.type)}
            removed={()=> props.ingredientRemoved(control.type)}
            disabled={props.disableInfo[control.type]}/>)}
        <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)

export default buildControls