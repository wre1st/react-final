import React from 'react';

  
export default function Login(){
       const handleChange = (e)=>{
        console.log(e);
        }
        let Id='', Location='',Name='',salary='' 
        const handleSubmit = (e) =>{
            console.log(e)
            console.log('submit')
        }
    return (
        
    <div style={{backgroundColor:"grey"}}>
    <h2>Enter Employee Details...</h2>
    <form onSubmit={handleSubmit}>
      <p>
      <label htmlFor="Id">Employee ID </label>
      <input
        id="Id"
        name="Id"
        type="text"
        onChange={handleChange}
        value={Id}
      />
      </p>
      
      <p>
      <label htmlFor="Name">Employee Name </label>
      <input
        id="Name"
        name="Name"
        type="text"
        onChange={handleChange}
        value={Name}
      />
      </p>
      <p>
      <label htmlFor="Location">Employee Location </label>
      <input
        id="Location"
        name="Location"
        type="text"
        onChange={handleChange}
        value={Location}
      />
      </p>
      <p>
      <label htmlFor="Salary">Employee Salary </label>
      <input
        id="Salary"
        name="Salary"
        type="text"
        onChange={handleChange}
        value={salary}
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
  }