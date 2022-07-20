import "./main.css";
import Form from "../form/Form";
import Carts from "../carts/Carts";

export default function Main({ base, setBase }) {
  let out = (
    <main className="main">
      <Form base={base} setBase={setBase} />
      <Carts base={base} setBase={setBase} />
    </main>
  );

  return out;
}
