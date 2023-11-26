import { forwardRef, useImperativeHandle, useRef } from "react";
import Cart from "./Cart";

const CartModal = forwardRef(function CartModal(props, ref) {

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
          open: () => {
            dialog.current.showModal();
          },
        };
      });

  return (
    <dialog id="cart-dialog" ref={dialog}>
      <p>Sepetiniz Boş</p>
      <Cart/>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default CartModal;