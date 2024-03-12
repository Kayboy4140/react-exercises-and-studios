import React from "react"
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className = {classes.choresHeading}>My Chores</h3>
         <ul>
            <li className ={classes.choresText}>Cleaning the house</li>
            <li className ={classes.choresText}>Laundry</li>
            <li className ={classes.choresText}>Organizing the house</li>
         </ul>
      </div>
   )
}