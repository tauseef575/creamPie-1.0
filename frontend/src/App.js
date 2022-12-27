import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import Newsletter from "./components/Newsletter";
import Chat from "./Chat/chat";

import About from "./screens/About";
// import CustomOrderScreen from "./screens/CustomOrderScreen";
import Contributors from "./components/Contributors";
import CustomEditScreen from "./screens/CustomEditScreen";
import CustomListScreen from "./screens/CustomListScreen";
import Success from "./screens/Success";
import Hooray from "./screens/Hooray";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/custom" component={CustomEditScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/success" component={Success} />
          <Route path="/hooray" component={Hooray} />

          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/customlist" component={CustomListScreen} exact />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/customlist/:pageNumber"
            component={CustomListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />

          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={About} exact />
        </Container>
      </main>
      <Contributors />

      <Newsletter />
      <Chat />
      <Footer />
    </Router>
  );
};

export default App;
