import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => {
    return state.ui.cartIsVisible;
  });

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle(cartState));
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={cartToggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
