import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/ui/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.5,
  meat: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  };
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  addIngredientHandler = type => {
    const count = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = count;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + ingredientPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients)
  };

  removeIngredientHandler = type => {
    const count = this.state.ingredients[type] - 1;
    if (count >= 0) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = count;
      const ingredientPrice = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice - ingredientPrice;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
      this.updatePurchaseState(updatedIngredients);
    }
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disableInfo={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
