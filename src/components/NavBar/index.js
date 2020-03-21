import React, { Component } from "react";


class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5">AO CoDGSN</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default NavBar;
