import React from "react"

const Table = () => {
    const data =["3133","Internet Bundles","24th September","Approved","View"]

    return (
      <div>
        <table >
          <tbody>
            
            <tr >
                <td style={{ columnWidth:"100px",fontWeight:"bold"}}>
                {data[0]}
                </td>

                <td style={{ columnWidth:"900px",fontWeight:"bold"}}>
                {data[1]}
                </td>

                <td style={{columnWidth:"400px",fontWeight:"bold"}}>
                {data[2]}
                </td>


                <td style={{ columnWidth:"400px",fontWeight:"bold",color:"green",
              backgroundColor: "#04AA6D",
              border: "none",
              opacity:"80%",
              borderRadius: "8px",
              padding: "2px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "1px 1px",
              }}>
                {data[3]}
                </td>


                <td style={{ columnWidth:"400px",fontWeight:"bold",color:"green"}}>
                {data[4]}
                </td>

            </tr>


          </tbody>
        </table>
      </div>
    );
  };
  export default Table;
