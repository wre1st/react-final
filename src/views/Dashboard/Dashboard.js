import React from "react";
// react plugin for creating charts
// @material-ui/core
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";

import PersonIcon from "assets/img/person.png"
import Wifi from "assets/img/wifi.png"
import Bholloo from "assets/img/bholloo.png"
import Coffee from "assets/img/coffee.png"
import { Link } from "react-router-dom";
import BackImg from "assets/img/bg.PNG";


export default function Dashboard() {
  return (
    <div >
      <div style={{ backgroundImage: `url(${BackImg})` }}>
        <img src={PersonIcon} style={{
          marginTop: "10px", width: "265px", height: "297px", marginBottom: "0PX", position: "absolute", zIndex: "1767"
          , right: "100px"
        }}
        />
      </div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <h3 style={{ marginLeft: "10px" }}>Internet Bundle
           </h3>
            <p style={{ marginTop: "5px", marginLeft: "10px", width: "200px", height: "50px" }}>
              Lorem Ipsum is simply dummy text 0
           <img src={Wifi} style={{ marginLeft: "180px", marginBottom: "250px", position: "absolute", marginTop: "0px" }} />
            </p>
            <CardFooter stats>
              <div style={{ color: "green" }}>
                <Link to="/admin/internet/bundles" >
                  Apply Now
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <h3 style={{ marginLeft: "10px" }}>Education Bundle
           </h3>
            <p style={{ marginTop: "5px", marginLeft: "10px", width: "200px", height: "50px" }}>
              Lorem Ipsum is simply dummy text 0
           <img src={Coffee} style={{ marginLeft: "180px", marginBottom: "250px", position: "absolute", marginTop: "0px" }} />
            </p>


            <CardFooter stats>
              <div style={{ color: "green" }}>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  Apply Now
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem >
          <Card>

            <table style={{ borderRadius: "3px", columnSpan: "initial" }}>
              <row >
                <td style={{ verticalAlign: "top", marginTop: "20px", width: "150px" }}>More Bundles to be <br /> announced</td>
                <td> <img src={Bholloo} style={{ height: "175px", width: "150px" }} /> </td>
              </row>

            </table>


          </Card>

        </GridItem>


      </GridContainer>
    </div>
  );
}
