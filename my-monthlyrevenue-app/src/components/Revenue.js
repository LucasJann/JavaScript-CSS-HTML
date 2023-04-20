import React, { useState } from "react";
import Card from "./Card";
import Item from "./Item";

import classes from "./Revenue.module.css";

const DUMMY_PROFIT = [
  {
    key: "s1",
    id: "s1",
    state: "SP",
    profit: "67.836,43",
  },
  {
    key: "s2",
    id: "s2",
    state: "RJ",
    profit: "36.678,66",
  },
  {
    key: "s3",
    id: "s3",
    state: "MG",
    profit: "29.229,88",
  },
  {
    key: "s4",
    id: "s4",
    state: "ES",
    profit: "27.165,48",
  },
];

const Revenue = () => {
  const [total, setTotal] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const buttonHandler = () => {
    let result = 0;
    for (let i = 0; i < DUMMY_PROFIT.length; i++) {
      let value = parseFloat(
        DUMMY_PROFIT[i].profit.replace(".", "").replace(",", ".")
      );
      result += value;
    }
    let total = result.toLocaleString("pt-BR");
    setTotal(total);
    setIsClicked(true);
  };
  return (
    <>
      <Card>
        <section>
          <div className={classes.section}>
            <h2 className={classes.h2}>Faturamento por Estado:</h2>
          </div>
          <ul>
            {DUMMY_PROFIT.map((item) => (
              <Item
                key={item.key}
                id={item.id}
                state={item.state}
                profit={item.profit}
                total={total}
                isClicked={isClicked}
              />
            ))}
          </ul>
        </section>
        <ul>
          <section className={classes.section}>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th className={classes.th}>Faturamento Total:</th>
                  <th className={classes.th}>{`R$${total}`}</th>
                </tr>
              </thead>
            </table>
          </section>
          <div className={classes.div}>
            <button className={classes.button} onClick={buttonHandler}>
              Calcular Percentual por Estado
            </button>
          </div>
        </ul>
      </Card>
    </>
  );
};

export default Revenue;
