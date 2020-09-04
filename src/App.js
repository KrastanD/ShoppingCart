import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const App = () => {
  const [counters, setCounters] = useState([]);
  const [receipt, setReceipt] = useState([]);

  const handleDelete = (counterId) => {
    const locCounters = counters.filter((c) => c.id !== counterId);
    setCounters(locCounters);
  };

  const handleAdd = (prodName) => {
    if (prodName === "") {
      return;
    }
    let id;
    counters.length > 0
      ? (id = counters[counters.length - 1].id + 1)
      : (id = 1);

    setCounters(
      counters.concat({
        id: id,
        value: 1,
        productName: prodName,
      })
    );
    setReceipt([]);
  };

  const handleClear = () => {
    setCounters([]);
  };

  const handleIncrement = (counter) => {
    const locCounters = [...counters];
    const index = locCounters.indexOf(counter);
    locCounters[index] = { ...counter };
    locCounters[index].value++;
    setCounters(locCounters);
  };

  const handleDecrement = (counter) => {
    const locCounters = [...counters];
    const index = locCounters.indexOf(counter);
    locCounters[index] = { ...counter };
    if (locCounters[index].value > 1) {
      locCounters[index].value--;
    }
    setCounters(locCounters);
  };

  const handleSubmit = () => {
    const rcpt = counters.map((counter) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={counter.id}
      >
        {counter.productName}
        <span className="badge badge-primary badge-pill">{counter.value}</span>
      </li>
    ));
    setReceipt(rcpt);
    setCounters([]);
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={
          counters.length > 0
            ? counters
                .map((item) => item.value)
                .reduce((prev, next) => prev + next)
            : 0
        }
      />
      <div className="container">
        <Counters
          counters={counters}
          onClear={handleClear}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onDecrement={handleDecrement}
        />
        {counters.length > 0 ? (
          <button
            className="btn btn-primary align-bottom"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          ""
        )}
        <ul className="list-group">
          {receipt.length !== 0 ? <h3>Receipt</h3> : ""}
          {receipt}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
