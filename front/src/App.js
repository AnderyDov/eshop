import "./app.css";
import { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function App() {
  let [base, setBase] = useState([]);

  useEffect(() => {
    fetch("/base")
      .then((res) => (res = res.json()))
      .then((res) => setBase(res));
  }, []);

  return (
    <div className="app">
      <Header base={base} setBase={setBase} />
      <Main base={base} setBase={setBase} />
      <Footer />
    </div>
  );
}

export default App;
