import React, { Component } from 'react';
import ingrStyle from './BurgerIngredient.module.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case('bread-bottom'): 
                ingredient = <div className= { ingrStyle.BreadBottom}></div>
                break;
            case('bread-top'): 
                ingredient = (
                <div className={ingrStyle.BreadTop}>
                    <div className={ingrStyle.Seeds1}></div>
                    <div className={ingrStyle.Seeds2}></div>
                </div>
                );
                break;
            case('meat'): 
                ingredient = <div className={ingrStyle.Meat}></div>
                break;
            case('cheese'): 
                ingredient = <div className={ingrStyle.Cheese}></div>
                break;
            case('bacon'): 
                ingredient = <div className={ingrStyle.Bacon}></div>
                break;
            case('salad'): 
                ingredient = <div className={ingrStyle.Salad}></div>
                break;
            default: ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;