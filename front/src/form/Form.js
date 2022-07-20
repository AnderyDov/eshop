import "./form.css";
import { useState, useRef } from "react";

export default function Form({ base, setBase }) {
  let [obj, setObj] = useState({ name: "", url: "", descr: "", cost: "" });
  let nameInp = useRef();
  let urlInp = useRef();
  let costInp = useRef();
  let nameErr = useRef();
  let urlErr = useRef();
  let costErr = useRef();

  let out = (
    <form className="form" onSubmit={handlerSubmit}>
      <label htmlFor="name" className="form__label">
        Наименование товара <span className="form__rec"></span>
      </label>
      <input
        ref={nameInp}
        type="text"
        className="form__inp"
        id="name"
        name="name"
        placeholder="Введите наименование товара"
        value={obj.name}
        onChange={(e) => setObj({ ...obj, name: e.target.value })}
      />
      <div className="form__error" ref={nameErr}>
        Поле является обязательным
      </div>
      <label htmlFor="descr" className="form__label">
        Описание товара
      </label>
      <textarea
        type="text"
        className="from__text"
        id="descr"
        name="descr"
        placeholder="Введите описание товара"
        value={obj.descr}
        onChange={(e) => setObj({ ...obj, descr: e.target.value })}
      />
      <label htmlFor="url" className="form__label">
        Ссылка на изображение товара <span className="form__rec"></span>
      </label>
      <input
        ref={urlInp}
        type="text"
        className="form__inp"
        id="url"
        name="url"
        placeholder="Введите ссылку"
        value={obj.url}
        onChange={(e) => setObj({ ...obj, url: e.target.value })}
      />
      <div className="form__error" ref={urlErr}>
        Поле является обязательным
      </div>
      <label htmlFor="cost" className="form__label">
        Цена товара <span className="form__rec"></span>
      </label>
      <input
        ref={costInp}
        type="number"
        className="form__inp"
        id="cost"
        name="cost"
        placeholder="Введите цену"
        value={obj.cost}
        onChange={(e) => setObj({ ...obj, cost: e.target.value })}
      />
      <div className="form__error" ref={costErr}>
        Поле является обязательным
      </div>
      <input
        type="submit"
        className="form__sub"
        value="Добавить товар"
        disabled={!(obj.name !== "" && obj.url !== "" && obj.cost !== "")}
      />
      <div
        className="false-but"
        onClick={handlerValid}
        style={{
          display: !(obj.name !== "" && obj.url !== "" && obj.cost !== "")
            ? "block"
            : "none",
        }}
      ></div>
    </form>
  );

  function handlerValid() {
    if (obj.name === "") {
      nameInp.current.style.outline = "1px solid red";
      nameErr.current.style.visibility = "visible";
    } else {
      nameInp.current.style.outline = "none";
      nameErr.current.style.visibility = "hidden";
    }
    if (obj.url === "") {
      urlInp.current.style.outline = "1px solid red";
      urlErr.current.style.visibility = "visible";
    } else {
      urlInp.current.style.outline = "none";
      urlErr.current.style.visibility = "hidden";
    }
    if (obj.cost === "") {
      costInp.current.style.outline = "1px solid red";
      costErr.current.style.visibility = "visible";
    } else {
      costInp.current.style.outline = "none";
      costErr.current.style.visibility = "hidden";
    }
  }

  function handlerSubmit(e) {
    e.preventDefault();
    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        descr: obj.descr,
        url: obj.url,
        cost: obj.cost,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setBase(res);
        setObj({ name: "", url: "", descr: "", cost: "" });
      });
    // setBase([...base, obj]);
  }

  return out;
}
