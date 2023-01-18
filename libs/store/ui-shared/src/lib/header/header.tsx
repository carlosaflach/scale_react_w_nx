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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Board Game Hoard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
