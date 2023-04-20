import classes from "./Item.module.css";

const Item = (props) => {

  let profitsPorcentage =
    parseFloat(props.profit) / parseFloat(props.total) * 100;
  let value = parseFloat(profitsPorcentage).toFixed(2);

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}>Estado</th>
            <th className={classes.th}>Faturamento</th>
            {props.isClicked ? (
              <th className={classes.th}>Contribuição por Estado</th>
            ) : (
              <></>
            )}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          <tr>
            <td className={classes.td}>{props.state}</td>
            <td className={classes.td}>{`R$ ${props.profit}`}</td>
            {props.isClicked ? <td className={classes.td}>{`%${value}`}</td> : <></>}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Item;
