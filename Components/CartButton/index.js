import React, { Component } from "react";
import { Icon, Content, Badge, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  totalItems = () => {
    let res = 0;
    let items = this.props.items;
    items.forEach(elm => {
      res += elm.quantity;
    });
    return res;
    // return items.reduce((acc = 0, val) => acc + val.quantity);
  };
  render() {
    return (
      <Content>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
        <Badge style={{ marginTop: -20, width: 23, height: 23 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", right: 2 }}>
            {this.totalItems()}
          </Text>
        </Badge>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));

// export default withNavigation(CartButton);
