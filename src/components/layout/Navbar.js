import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Navbar() {
  return (
    <AppBar>
      <Typography position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Todo
          </Typography>
        </Toolbar>
      </Typography>
    </AppBar>
  )
}

export default Navbar
