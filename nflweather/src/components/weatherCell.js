import React, { useState, useEffect } from "react";
import { getSchedule } from "../schedules";
import { getWeather } from "../weather"
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";


export default function weatherCell(props) {
    
    return(
        <TableCell>
            {props.string}
              </TableCell>
    )
}

