import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

import CartButton from "../CartButton";
// Style
import styles from "./styles";

//List
// import coffeeshops from "../CoffeeList/list";

// Actions
import { addItemToCart } from "../../store/actions/cartActions";

class CoffeeDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("coffeeShop").name,
      headerRight: <CartButton navigation={navigation} />
    };
  };
  state = {
    drink: "Cappuccino",
    option: "Small",
    quantity: 1
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    console.log("====================");
    console.log("ZERO current value: ", this.state);
    this.props.addItem(this.state);
    const { items } = this.props.cartReducer;
    console.log("ZERO Items in the cart : ", items);
  };
  componentDidMount() {}
  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    const { items } = this.props.cartReducer;
    console.log("ZERO => items: ", items);
    console.log();
    if (loading) return <Content />;
    // const coffeeshop = coffeeShops[0];
    const coffeeshop = this.props.navigation.getParam(
      "coffeeShop",
      "default still loading"
    );
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer,
  cartReducer: state.cartReducer
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeDetail);
