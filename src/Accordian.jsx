
import { useState } from "react";
import { data } from "./data";
import "./styles.css";
export function Accordian() {
  const [selected, setSelected] = useState(null);
debugger
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <button onClick={() => handleSingleSelection(dataItem.id)}>
                  {selected === dataItem.id ? "-" : "+"}
                </button>
              </div>
              {selected === dataItem.id ? (
                <div className="contenty"> {dataItem.answar} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
}
