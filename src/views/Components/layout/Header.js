import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Header
        brand="Fetch"
        color="info"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="/dogsareawesome"
                className={classes.navLink + " " + classes.navLinkActive}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Discover
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                hoverColor="info"
                buttonText="Profile"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  "Action",
                  "Another action",
                  "Something else here",
                  { divider: true },
                  "Logout"
                ]}
              />
            </ListItem>
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);