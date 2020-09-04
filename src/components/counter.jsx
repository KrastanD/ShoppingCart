import React from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="row border-bottom">
      <div className="col my-auto">
        <span>{counter.productName}</span>
      </div>
      <div>
        <span className="badge m-2 badge-primary">{counter.value}</span>
        <button
          onClick={() => {
            onIncrement(counter);
          }}
          className="btn btn-secondary btn-sm custom"
        >
          +
        </button>
        &nbsp; &nbsp;
        <button
          onClick={() => {
            onDecrement(counter);
          }}
          className="btn btn-secondary btn-sm custom"
          disabled={counter.value === 1 ? true : false}
        >
          -
        </button>
        <button
          onClick={() => {
            onDelete(counter.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
};

export default Counter;
