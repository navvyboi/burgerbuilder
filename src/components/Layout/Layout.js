import React, { Component } from "react";
import classes from "./Layout.css";
import ToolBar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  SideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });
  SideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <ToolBar toggle={this.SideDrawerToggleHandler} />
        <SideDrawer
          closed={this.SideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
