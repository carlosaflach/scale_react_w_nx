import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '12px'
  },
  title: {
    flexGrow: 1
  }
}))

export interface HeaderProps {
  title: string;
}


export const Header = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
