import "./App.css";
import React from "react";
import { Button, Grid } from "@mui/material";
import NavBar from "./NavBar";
import "./NavBar.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container>
        <Grid xs={12}>
          <Button variant="outlined">Test</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
