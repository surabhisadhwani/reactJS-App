import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import "./productList.scss";

const ProductListComponent = (props: productListProps) => {
  return (
    <div className="product-list">
      <Typography
        variant="h4"
        className="product-detail"
        align="center"
        gutterBottom
      >
        Product-list
      </Typography>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Picture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.productList.map((product: any, index: any) => (
              <TableRow key={index}>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">{product.description}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="left">{product.price}</TableCell>
                <TableCell align="left">
                  <img
                    src={product.image}
                    alt="NoImage"
                    width="50"
                    height="60"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

interface productListProps {
  productList: any;
}

export default ProductListComponent;
