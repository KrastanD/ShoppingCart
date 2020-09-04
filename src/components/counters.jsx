import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onClear,
  onIncrement,
  onDelete,
  onAdd,
  onDecrement,
}) => {
  const [currName, setCurrName] = useState("");

  const handleText = (event) => {
    setCurrName(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            className="align-middle"
            type="text"
            value={currName}
            placeholder="Item"
            onChange={handleText}
          />
          <button
            onClick={() => {
              onAdd(currName);
              setCurrName("");
            }}
            className="btn btn-primary btn-sm m-2"
          >
            Add
          </button>
        </div>
        <button className="btn btn-primary btn-sm m-2" onClick={onClear}>
          Clear
        </button>
      </div>
      {counters.length > 0
        ? counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))
        : ""}
    </div>
  );
};

export default Counters;
