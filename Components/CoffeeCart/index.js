import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

import { checkoutCart } from "../../store/actions/cartActions";

class CoffeeCart extends Component {
  handleCheckout = () => {
    this.props.checkout();
    alert("items has been emptied :)");
    console.log("handleCheckout => items: ", this.props.items);
  };
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handleCheckout}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkoutCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
