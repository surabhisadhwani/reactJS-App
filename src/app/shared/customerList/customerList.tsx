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
import "./customerList.scss";

const CustomerListComponent = (props: customerListProps) => {
  return (
    <div className="customer-list">
      <Typography
        variant="h4"
        className="product-detail"
        align="center"
        gutterBottom
      >
        Customer-list
      </Typography>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.customerList.map((customer: any, index: any) => (
              <TableRow key={index}>
                <TableCell align="left">{customer.name.firstname}</TableCell>
                <TableCell align="left">{customer.email}</TableCell>
                <TableCell align="left">{customer.address.city}</TableCell>
                <TableCell align="left">{customer.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

interface customerListProps {
  customerList: any;
}

export default CustomerListComponent;
