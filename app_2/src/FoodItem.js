import React from 'react';

export default function FoodItem (props) { //props was not declared in parameter
    return (
        <p>{props.foodItem}</p>
    )
}