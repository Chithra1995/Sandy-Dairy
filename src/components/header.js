import React from "react";
import { useEffect, useState } from "react";
import {
  IconButton,
  Button,
  Modal,
  Backdrop,
  Fade,
  Menu,
  MenuItem,
  makeStyles,
  withStyles,
  Drawer,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import $ from "jquery";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import data from "../data.json";
import CloseIcon from "@material-ui/icons/Close";
import LoadingBox from "./LoadingBox";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Cart from "../screens/Cart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Header() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo } = userSignin;
  const [cart, setCart] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      console.log("login success");
      setOpen(false);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const onlogout = () => {
    setUsername("");
    setPassword("");
    dispatch(logout());
  };

  const togglemenu = () => {
    $(".exo-menu").toggleClass("display");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const profileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const profileClose = () => {
    setAnchorEl(null);
  };

  const filterproduct = () => {
    var value = $("#search_fetch").val().toLowerCase();
    $("#product_list .filter_list").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCart(open);
  };
  return (
    <div className="header">
      {loading && loading ? (
        <div>
          <LoadingBox />
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap align-items-center top-header">
            <div className="cst_brand">
              <Link to="/">
                <img src="images/logo.png" className="header-logo" />
              </Link>
            </div>
            <div className="cst_top_nav">
              <ul className="d-flex flex-wrap align-items-center m-0 p-0">
                {/* <li>
                  <Link to="/story">Our Story</Link>
                </li>
                <li>
                  <a>Our Suppliers</a>
                </li>
                <li>
                  <a>Our Blog</a>
                </li> */}
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      id="search_fetch"
                      placeholder="Search"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text p-0" id="basic-addon2">
                        <IconButton
                          className="icon-btn"
                          onClick={filterproduct}
                        >
                          <SearchIcon />
                        </IconButton>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-wrap flex-column align-items-center">
                    <Link to="/subscribe">
                      <DateRangeIcon className="mr-1" />
                      Subscriptions
                    </Link>
                  </div>
                </li>
                <li>
                  {userInfo ? (
                    <div className="d-flex align-items-center">
                      <Button className="ml-3" onClick={profileClick}>
                        <AccountCircleIcon className="mr-1" />
                        <b>
                          {userInfo.data.firstname}
                          {""}
                          {userInfo.data.lastname}
                        </b>
                      </Button>
                      <StyledMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={profileClose}
                      >
                        <MenuItem onClick={profileClose}>
                          <Link to="/profile">Profile</Link>
                        </MenuItem>
                        <MenuItem onClick={onlogout}>Log Out</MenuItem>
                      </StyledMenu>
                    </div>
                  ) : (
                    <Button className="login-btn" onClick={handleOpen}>
                      <PersonOutlineIcon />
                      Sign In / Register
                    </Button>
                  )}
                </li>
                <li>
                  <div className="d-flex flex-wrap flex-column align-items-center">
                    <Link onClick={toggleDrawer(true)}>
                      <ShoppingCartIcon />
                      My Cart
                    </Link>
                    <Drawer
                      className="custom-cart"
                      anchor="right"
                      open={cart}
                      onClose={toggleDrawer(false)}
                    >
                      <Cart close={toggleDrawer(false)} />
                    </Drawer>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-header">
            <div class="content">
              <ul class="exo-menu">
                <li>
                  <Link to="/location">
                    {" "}
                    Location
                    <LocationOnIcon fontSize="small" className="menu_icn" />
                  </Link>
                  <div class="contact"></div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Dairy
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.Dairy.map((dairy) => (
                        <div class="col-md-1 text-center px-2">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Vegetables
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.vegetables.map((dairy) =>
                        dairy.id < 8 ? (
                          <div class="col-md-1 text-center px-2">
                            <a>
                              <img
                                width="100%"
                                class="img-responsive"
                                src={dairy.image}
                              />
                              <h4>{dairy.title}</h4>
                            </a>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <div class="row m-0">
                      {data.vegetables.map((dairy) =>
                        dairy.id >= 8 ? (
                          <div class="col-md-1 text-center px-2">
                            <a>
                              <img
                                width="100%"
                                class="img-responsive"
                                src={dairy.image}
                              />
                              <h4>{dairy.title}</h4>
                            </a>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    EGGS
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.eggs.map((dairy) => (
                        <div class="col-md-1 text-center px-2">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    RICES & PULSES
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.rice.map((dairy) => (
                        <div class="col-md-1 text-center px-2">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    FERTILIZERS
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.fertilizers.map((dairy) => (
                        <div class="col-md-1 text-center px-2">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Services
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.services.map((dairy) => (
                        <div class="col-md-1 text-center px-2">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <Link to="/user" className="calls">
                    Calls
                  </Link>
                </li>
                <a
                  href="#"
                  class="toggle-menu visible-xs-block"
                  onClick={togglemenu}
                >
                  |||
                </a>
              </ul>
            </div>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className="modal_close">
                  <IconButton className="close_icn" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div class="login">
                  <Signin />
                  <Signup />
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      )}
    </div>
  );
}
