import { Typography, Card, CardContent } from "@material-ui/core";
import "./productCount.scss";

const ProductCountComponent = (props: productCountProps) => {
  return (
    <div className="product-count">
      <Card className="card">
        <CardContent className="card-content">
          <Typography className="count" gutterBottom>
            Total Products = {props.productList.length}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

interface productCountProps {
  productList: any;
}

export default ProductCountComponent;
