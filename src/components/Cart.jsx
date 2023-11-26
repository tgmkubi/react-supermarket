import { CartContext } from "../store/cart-context";
import { useContext } from "react";

export default function Cart() {
  const { items } = useContext(CartContext);

  //   const [totalPrice, setTotalPrice] = useState(0);

  //   useEffect(() => {
  //     let total = 0;
  //     items.forEach((item) => {
  //       total += item.price * item.quantity;
  //     });
  //     total = total.toFixed(2);
  //     setTotalPrice(total);
  //   }, [items]);

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.quantity}</p>
              <p>Total Price: {(item.price * item.quantity).toFixed(2)}</p>
            </li>
          );
        })}
      </ul>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}
