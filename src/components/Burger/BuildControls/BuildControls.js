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
        {controls.map(control => <BuildControl label={control.Label} type={control.type}/>)}
    </div>
)

export default buildControls