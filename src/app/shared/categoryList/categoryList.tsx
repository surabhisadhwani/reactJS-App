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
import "./categoryList.scss";

const CategoryListComponent = (props: categoryListProps) => {
  return (
    <div className="category-list">
      <Typography
        variant="h4"
        className="product-detail"
        align="center"
        gutterBottom
      >
        Category
      </Typography>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableBody>
            {props.categoryList.map((category: any, index: any) => (
              <TableRow key={index}>
                <TableCell align="center">{category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

interface categoryListProps {
  categoryList: any;
}

export default CategoryListComponent;
