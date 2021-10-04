import React from "react";
// react plugin for creating charts
// @material-ui/core
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";

import Warid from "assets/img/warid.png";

import Telenor from "assets/img/telenor.png";
import Ufone from "assets/img/ufone.png";
import Zong from "assets/img/zong.png";
import Jazz from "assets/img/jazz.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function InternetBundles() {
  return (
    <div>
      <div></div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={2}>
          <Card style={{ height: "100px", textAlign: "center" }}>
            <p>
              <img src={Jazz} />
            </p>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card style={{ height: "100px", textAlign: "center" }}>
            <p>
              <img src={Telenor} />
            </p>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card style={{ height: "100px", textAlign: "center" }}>
            <p>
              <img src={Zong} />
            </p>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card style={{ height: "100px", textAlign: "center" }}>
            <p>
              <img src={Ufone} />
            </p>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={2}>
          <Card
            style={{
              height: "100px",
              textAlign: "center",
            }}
          >
            <p>
              {" "}
              <img src={Warid} />
            </p>
          </Card>
        </GridItem>
      </GridContainer>
      <div style={{ float:'right' }}>
        <Link to="/admin/form1">
          <Button 
            variant="contained"  color="primary">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
