// import { container } from "assets/jss/material-dashboard-react";
// import { green } from "@material-ui/core/colors";
import React, { useState } from "react";
// react plugin for creating charts
// @material-ui/core
// core components
// import GridItem from "components/Grid/G
// ridItem.js"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
  Container,
  Button,
} from "@material-ui/core";
import axios from 'axios';


export default function Form1() {

    const [ selectedUniversity, setUniversity  ] = useState('')
    const [ selectedCampus, setCampus  ] = useState('')
    const [ selectedDegreeProgram, setDegreeProgram  ] = useState('')

    const [ rollNumber, setRollNumber  ] = useState('')
    const [ email, setEmail  ] = useState('')
    const [ semester, setSemester  ] = useState('')


    const handleSubmit = (e)=>{
      e.preventDefault()
        console.log('handle submit. ',e);
        const reqBody = {
         institutionName: selectedUniversity,
          campus: selectedCampus,
          degreeProgram: selectedDegreeProgram
        }
        axios.post("http://localhost:1767/users/user/save", reqBody)
        .then( response => {
            console.log(response)
        })
        .catch( error => {
            console.log(error)
        })
      }

    const submitHandler = (e) => {
      e.preventDefault();
   
      console.log(e);
  }

  return (
    <div
      style={{
        marginTop: "200px",
      }}
      className="form-container"
    >
      <h1>Acadmic Details</h1>

      <Container maxWidth="xl">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
     
            <FormControl variant="filled" fullWidth onSubmit={submitHandler }>
              <InputLabel id="university-select-label">University</InputLabel>
              <Select
                labelId="university-select-label"
                id="university"
                value={selectedUniversity}
                label="University"
                onChange={ e => setUniversity( e.target.value ) }
              >
                <MenuItem value={"FAST"}>Fast</MenuItem>
                <MenuItem value={"NUST"}>Nust</MenuItem>
                <MenuItem value={"KARACHI UNIVERSITY"}>Karachi University</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="filled" fullWidth onSubmit={submitHandler }>
              <InputLabel id="campus-select-label">Campus</InputLabel>
              <Select
                labelId="campus-select-label"
                id="campus"
                value={selectedCampus}
                label="Campus"
                onChange={ e => setCampus( e.target.value ) }
              >
                <MenuItem value={"OLD CITY CAMPUS"}>Old - City Campus</MenuItem>
                <MenuItem value={"NEW CAMPUS"}>New Campus</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="filled" fullWidth onSubmit={submitHandler }>
              <InputLabel id="degree-select-label">Degree Program</InputLabel>
              <Select
                labelId="degree-select-label"
                id="degree"
                value={selectedDegreeProgram}
                label="Degree"
                onChange={ e => setDegreeProgram( e.target.value ) }
              >
                <MenuItem value={"BCS"}>Bechlors in Computer Science</MenuItem>
                <MenuItem value={"BE"}>Bechlors in Engineering</MenuItem>
                <MenuItem value={"MSC"}>Master in Computer Science</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="roll-number"
              fullWidth
              label="Roll Number"
              variant="filled"
              value={rollNumber}
              onChange={ e => setRollNumber( e.target.value ) }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="academic-email"
              fullWidth
              label="Academic Email"
              variant="filled"
              value={email}
              onChange={ e => setEmail( e.target.value ) }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="current-semester"
              fullWidth
              label="Current Semester"
              variant="filled"
              value={semester}
              onChange={ e => setSemester( e.target.value ) }
/>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '1em' }} >
 
            <Button 
              type="submit"
                variant="contained"  color="primary">
                Next
            </Button>
        
        </div>
        </form>

      </Container>

    </div>
  );
}
