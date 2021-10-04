// import { container } from "assets/jss/material-dashboard-react";
// import { green } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
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

export default function Form1() {

    const [ selectedUniversity, setUniversity  ] = useState('')
    const [ selectedCampus, setCampus  ] = useState('')
    const [ selectedDegreeProgram, setDegreeProgram  ] = useState('')


  return (
    <div
      style={{
        marginTop: "400px",
      }}
      className="form-container"
    >
      <h1>Acadmic Details</h1>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl variant="filled" fullWidth>
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
            <FormControl variant="filled" fullWidth>
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
            <FormControl variant="filled" fullWidth>
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
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="academic-email"
              fullWidth
              label="Academic Email"
              variant="filled"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="current-semester"
              fullWidth
              label="Current Semester"
              variant="filled"
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '1em' }} >
            <Link to="/admin/form1">
            <Button 
                variant="contained"  color="primary">
                Next
            </Button>
            </Link>
        </div>
      </Container>
    </div>
  );
}
