import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

let data = require("./data");

const possibleWeeks = data.possibleWeeks;
const possibleYears = data.possibleYears;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.name === "Year") {
      props.setYear(event.target.value);
    } else if (event.target.name === "Week") {
      props.setWeekName(event.target.value);
      props.setWeekValue(event.currentTarget.getAttribute("weekValue"));
      props.setSeasonType(event.currentTarget.getAttribute("seasonType"));
    }
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.year}
          name="Year"
          onChange={(e) => {
            handleChange(e);
          }}
          label="Year"
        >
          {possibleYears.map((year) => (
            <MenuItem value={year}>{year}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Week</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.weekName}
          name="Week"
          onChange={(e) => {
            handleChange(e);
          }}
          label="Week"
        >
          {possibleWeeks.map((week) => (
            <MenuItem
              value={week.name}
              seasonType={week.seasonType}
              weekValue={week.value}
            >
              {week.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
