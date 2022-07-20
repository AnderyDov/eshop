import "./cart.css";

export default function Cart({ data, base, setBase }) {
  let out = (
    <div className="cart">
      <div className="cart__wrap">
        <img src={data.url} alt="cart" className="cart__img" />
      </div>
      <div className="cart__name">{data.name}</div>
      <div className="cart_descr">{data.descr}</div>
      <div className="cart__cost">{data.cost} rub</div>
      <div className="cart__del" onClick={() => handlerDel(data.id)}>
        <svg
          enableBackground="new 0 0 32 32"
          id="Editable-line"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="  M25,10H7v17c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V10z"
            fill="none"
            id="XMLID_129_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="  M20,7h-8V5c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2V7z"
            fill="none"
            id="XMLID_145_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            d="  M28,10H4V8c0-0.552,0.448-1,1-1h22c0.552,0,1,0.448,1,1V10z"
            fill="none"
            id="XMLID_146_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            id="XMLID_148_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="16"
            x2="16"
            y1="15"
            y2="24"
          />
          <line
            fill="none"
            id="XMLID_147_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="12"
            x2="12"
            y1="15"
            y2="24"
          />
          <line
            fill="none"
            id="XMLID_149_"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="20"
            x2="20"
            y1="15"
            y2="24"
          />
        </svg>
      </div>
    </div>
  );

  function handlerDel(id) {
    fetch("/del", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((res) => setBase(res));
  }

  return out;
}
