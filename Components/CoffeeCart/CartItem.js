import React, { Component } from "react";
import { removeItemFromCart } from "../../store/actions/cartActions";

import { connect } from "react-redux";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  handleTrash = () => {
    const { item } = this.props;
    console.log("ZERO => CartItem => ", item);
    this.props.removeItem(item);
  };
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent onPress={this.handleTrash}>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
