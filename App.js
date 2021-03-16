import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";

import TextField from "@material-ui/core/TextField";
import { FormControlLabel } from "@material-ui/core";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="outlined"
          color="secondary"
          type="email"
          label="Enter Email"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size="large"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size="large"
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
