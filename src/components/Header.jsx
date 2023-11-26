import logo from "../assets/logo_transparent.png";
import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header() {
  const dialog = useRef();

  function handleClick() {
    dialog.current.open();
  }

  return (
    <>
      <CartModal ref={dialog}/>
      <header className="main-header">
        <nav>
          <div className="main-logo">
            <img src={logo} alt="KUBIS MARKET" />
          </div>
          <p>
            <button onClick={handleClick} className="main-button">
              Sepet
            </button>
          </p>
        </nav>
      </header>
    </>
  );
}
