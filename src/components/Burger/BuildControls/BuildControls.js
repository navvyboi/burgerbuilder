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
    <div className='Controls'>
        <p>Current Price: ${props.price.toFixed(2)}</p>
        {controls.map(control => <BuildControl 
            label={control.Label}
            type={control.type} 
            added={() => props.ingredientAdded(control.type)}
            removed={()=> props.ingredientRemoved(control.type)}
            disabled={props.disableInfo[control.type]}/>)}
        <button className='OrderButton' disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)

export default buildControls