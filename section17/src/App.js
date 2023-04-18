import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import Form from "./components/Cart/Form";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showFormHandler = () => {
    setFormIsShown(true);
    setCartIsShown(false);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onShowForm={showFormHandler} onClose={hideCartHandler} />
      )}
      {formIsShown && <Form onClose={hideFormHandler}></Form>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
