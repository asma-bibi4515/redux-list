import "./App.css";
import { Cart } from "./component";
import { useSelector } from "react-redux";

function App() {
  const { items } = useSelector((state) => state?.cart);
  return (
    <>
      <h2>Total items in your cart are {items?.length}</h2>
      <Cart />
    </>
  );
}

export default App;
