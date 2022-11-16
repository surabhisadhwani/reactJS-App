import { Typography, Card, CardContent } from "@material-ui/core";
import "./latestProduct.scss";

const LatestProductComponent = (props: latestProductProps) => {
  return (
    <div className="latest-product">
      <Card className="card">
        {props.productList.length > 0 && props.randomProduct !== undefined && (
          <CardContent className="card-content-detail">
            <Typography
              variant="h4"
              className="product-detail"
              align="center"
              gutterBottom
            >
              Latest Product
            </Typography>
            <Typography variant="h6" className="product-detail" gutterBottom>
              Title :{" "}
              {props.randomProduct.title ? props.randomProduct.title : "NA"}
            </Typography>
            <Typography className="product-detail" gutterBottom>
              Description :{" "}
              {props.randomProduct.description
                ? props.randomProduct.description
                : "NA"}
            </Typography>
            <Typography className="product-detail" gutterBottom>
              Category :{" "}
              {props.randomProduct.category
                ? props.randomProduct.category
                : "NA"}
            </Typography>
            <Typography className="product-detail" gutterBottom>
              Price :{" "}
              {props.randomProduct.price ? props.randomProduct.price : "NA"}
            </Typography>

            <img
              src={props.randomProduct.image}
              alt="NoImage"
              width="50"
              height="60"
            />
          </CardContent>
        )}
      </Card>
    </div>
  );
};

interface latestProductProps {
  productList: any;
  randomProduct: any;
}

export default LatestProductComponent;
