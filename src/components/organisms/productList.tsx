import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BaseComponentProps } from '../../utils';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props extends BaseComponentProps {
  items: {
    name: string,
    category?: {
      name: string,
    }
    weight: number,
    price: number
  }[]
}

const ProductList: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>商品名</TableCell>
            <TableCell align="right">カテゴリー</TableCell>
            <TableCell align="right">重量(g)</TableCell>
            <TableCell align="right">価格(円)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.category?.name}
              </TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
