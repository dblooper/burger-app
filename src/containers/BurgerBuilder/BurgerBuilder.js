import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients : {
                bacon: 1,
                meat: 1,
                cheese: 2,
                salad: 1
            }
        }
    }

    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>Building Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder