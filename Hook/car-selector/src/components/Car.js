import { useState, useEffect } from "react";

function Car() {
  let [carSelect, setCarSelect] = useState("0");
  let [colorSelect, setColorSelect] = useState("0");
  let [colorValueSelected, setColorValueSelected] = useState("");
  let [valueSelected, setValueSelected] = useState("");

  const carChoice = (e) => {
    setCarSelect(e.target.value);
  };
  const colorChoice = (e) => {
    setColorSelect(e.target.value);
  };

  useEffect(() => {
    switch (carSelect) {
      case "0":
        setValueSelected("Ferrari");
        break;
      case "1":
        setValueSelected("Lamborgini");
        break;
      case "2":
        setValueSelected("BMW");
        break;
      case "3":
        setValueSelected("Innova");
        break;
    }
  }, [carSelect]);

  useEffect(() => {
    switch (colorSelect) {
      case "0":
        setColorValueSelected("Black");
        break;
      case "1":
        setColorValueSelected("Red");
        break;
      case "2":
        setColorValueSelected("Yellow");
        break;
      case "3":
        setColorValueSelected("Blue");
        break;
    }
  }, [colorSelect]);

  return (
    <div>
      <div>
        Select your car :
        <select
          onChange={(e) => {
            carChoice(e);
          }}
        >
          <option value="0">Ferrari</option>
          <option value="1">Lamborgini</option>
          <option value="2">BMW</option>
          <option value="3">Innova</option>
        </select>
        <div>
          Select your color :
          <select
            onChange={(e) => {
              colorChoice(e);
            }}
          >
            <option value="0">Black</option>
            <option value="1">Red</option>
            <option value="2">Yellow</option>
            <option value="3">Blue</option>
          </select>
        </div>
        <h2>
          You selected: {colorValueSelected} - {valueSelected}
        </h2>
      </div>
    </div>
  );
}

export default Car;
