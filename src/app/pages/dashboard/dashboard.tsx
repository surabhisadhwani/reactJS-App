import React, { useState, useEffect } from "react";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import "./dashboard.scss";
import axios from "axios";
import ProductListComponent from "../../shared/productList/productList";
import CategoryListComponent from "../../shared/categoryList/categoryList";
import CustomerListComponent from "../../shared/customerList/customerList";
import ProductCountComponent from "../../shared/productCount/productCount";
import LatestProductComponent from "../../shared/latestProduct/latestProduct";

const DashboardComponent = (props: Dashboardprops) => {
  const [productList, setProductList] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<any>();
  const [customerList, setCustomerList] = useState<any>([]);
  const [categoryList, setCategoryList] = useState<any>([]);
  const [randomProduct, setRandomProduct] = useState<any>();

  useEffect(() => {
    getProductList();
    getCustomers();
    getCategories();
  }, []);

  useEffect(() => {
    if (productList.length > 0) {
      var random = productList[Math.floor(Math.random() * productList.length)];
      setRandomProduct(random);
      console.log("ran", random);
    }
  }, [productList]);

  const getProductList = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data);
        setTotalCount(response.data.length);
      })
      .catch((error) => console.log(error));
  };

  const getCustomers = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        console.log("customer", response.data);
        setCustomerList(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log("category", response.data);
        setCategoryList(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="main-div">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductListComponent productList={productList} />
        </Grid>
        <Grid item xs={6}>
          <ProductCountComponent productList={productList} />
        </Grid>
        <Grid item xs={6}>
          <LatestProductComponent
            productList={productList}
            randomProduct={randomProduct}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomerListComponent customerList={customerList} />
        </Grid>
        <Grid item xs={6}>
          <CategoryListComponent categoryList={categoryList} />
        </Grid>
      </Grid>
    </div>
  );
};

interface Dashboardprops {}

export default DashboardComponent;
