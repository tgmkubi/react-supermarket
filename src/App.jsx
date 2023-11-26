import "./App.css";
import Header from "./components/Header";
import Market from "./components/Market";
import CartContextProvider from "./store/CartContextProvider.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Market />
    </CartContextProvider>
  );
}

export default App;
