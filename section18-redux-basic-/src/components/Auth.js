import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/index";
import UserProfile from "./UserProfile";

const Auth = () => {
  const login = useSelector((state) => {
    return state.auth.login;
  });
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.login());
  };
  return (
    <main className={classes.auth}>
      {login && <UserProfile></UserProfile>}
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
