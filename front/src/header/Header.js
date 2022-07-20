import "./header.css";

export default function Header({ base, setBase }) {
  let out = (
    <header className="header">
      <h1 className="header__title">Добавление товара</h1>
      <select className="header__select" onChange={handlerChange}>
        <option value="1" className="header__option">
          по умолчанию
        </option>
        <option value="2" className="header__option">
          цена &#129045;
        </option>
        <option value="3" className="header__option">
          цена &#129047;
        </option>
        <option value="4" className="header__option">
          название A-Z, А-Я
        </option>
        <option value="5" className="header__option">
          название Z-A, Я-А
        </option>
        <option value="6" className="header__option">
          сначала новые
        </option>
      </select>
    </header>
  );

  function handlerChange(e) {
    if (e.target.value === "1") sortDefault();
    if (e.target.value === "2") sortCostUp();
    if (e.target.value === "3") sortCostDown();
    if (e.target.value === "4") sortNameUp();
    if (e.target.value === "5") sortNameDown();
    if (e.target.value === "6") sortNewProd();
  }

  function sortDefault() {
    let arr = [...base].sort((a, b) => a.id - b.id);
    setBase(arr);
  }

  function sortCostUp() {
    let arr = [...base].sort((a, b) => a.cost - b.cost);
    setBase(arr);
  }

  function sortCostDown() {
    let arr = [...base].sort((a, b) => b.cost - a.cost);
    setBase(arr);
  }

  function sortNameUp() {
    let arr = [...base].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name >= b.name) return 1;
      else return false;
    });
    setBase(arr);
  }

  function sortNameDown() {
    let arr = [...base].sort((a, b) => {
      if (a.name > b.name) return -1;
      if (a.name <= b.name) return 1;
      else return false;
    });
    setBase(arr);
  }

  function sortNewProd() {
    let arr = [...base].sort((a, b) => b.id - a.id);
    setBase(arr);
  }

  return out;
}
