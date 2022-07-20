import "./carts.css";
import Cart from "../cat/Cart";
export default function Carts({ base, setBase }) {
  let showCarts = [];

  let row = [];
  for (let i = 0; i < base.length; i++) {
    row.push(<Cart data={base[i]} key={i} base={base} setBase={setBase} />);
    if ((i + 1) % 3 === 0) {
      showCarts.push(
        <div className="rowcarts" key={i}>
          {row}
        </div>
      );
      row = [];
    }
    if (i === base.length - 1) {
      showCarts.push(
        <div className="rowcarts" key={i + 1}>
          {row}
        </div>
      );
      row = [];
    }
  }

  let out = <div className="carts">{showCarts}</div>;

  return out;
}
