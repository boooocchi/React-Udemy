import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const loginState = useSelector((state) => {
    return state.auth.login;
  });
  return (
    <>
      <Header></Header>
      {loginState ? <UserProfile></UserProfile> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
