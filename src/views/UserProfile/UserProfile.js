import React from "react";
// @material-ui/core components
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Table from "views/UserProfile/Table1.js"


export default function UserProfile() {
  const data =["3133","Internet Bundles","24th September","Approved","View"]
  return (
    <div>
      <GridContainer >
        
        
        <GridItem xs={12} sm={12} md={12}  >

          <Card style={{backgroundColor:"#eeeeee", border:null}}>
<table>
<tbody>
<tr>
          <td> Application Id</td>
          <td> Bundle </td>
          <td> Apply Date </td>
          <td> Status</td>
          <td> Action</td>
          
          </tr>      
          </tbody>
</table>

            <CardBody style={{border:"0.5px solid grey",
         
          opacity:"40%",
          borderRadius: "8px",
          padding: "2px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "1px 1px",
          }}>
              <Table data={data}/>
 
            </CardBody>

<br/>
            <CardBody style={{border:"0.5px solid grey ",
           opacity:"40%",
           borderRadius: "8px",
           padding: "2px",
           textAlign: "center",
           textDecoration: "none",
           display: "inline-block",
           fontSize: "16px",
           margin: "1px 1px",
          }}>
              <Table data={data}/>
            </CardBody>
   
          </Card>


        </GridItem>   
      </GridContainer>
    </div>
  );
}
