import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FolderIcon from "@material-ui/icons/Folder";
import SaveIcon from "@material-ui/icons/Save";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import PersonIcon from "@material-ui/icons/Person";
import { Textbox } from "react-inputs-validation";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddIcon from "@material-ui/icons/Add";

export default function Userprofile() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo } = userSignin;

  const [firstname, setFirstname] = useState(
    userInfo ? userInfo.data.firstname : ""
  );
  const [lastname, setLastname] = useState(
    userInfo ? userInfo.data.lastname : ""
  );
  const [mobile, setMobile] = useState(userInfo ? userInfo.data.telephone : "");
  const [email, setEmail] = useState(userInfo ? userInfo.data.email : "");
  const [edit, setEdit] = useState(true);
  const [tab, setTab] = useState("tab1");

  const editable = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const tabChange = (e) => {
    setTab(e.target.id);
  };
  return (
    <div>
      {userInfo && (
        <div className="user-profile-design">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="user-profile-bg user-profile-data py-2">
                    <div className="dis-flx algn-itm-cntr">
                      <div className="wid-25">
                        <img src="images/profile-pic.svg" width="80%" />
                      </div>
                      <div className="wid-75">
                        <h6>Hello,</h6>
                        <h6>
                          <b>{userInfo.data.firstname}</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div
                    className="user-profile-bg user-profile-acc"
                    id="profileaccordian"
                  >
                    <div className="pb-3">
                      <div data-toggle="collapse" data-target="#myaccounts">
                        <PersonIcon
                          className="profile-set-icn"
                          color="primary"
                        ></PersonIcon>
                        <h6>Account Settings</h6>
                        <ExpandMoreIcon className="float-right collapsedown"></ExpandMoreIcon>
                        <ExpandLessIcon className="float-right collapseup"></ExpandLessIcon>
                      </div>
                      <div
                        className="mt-1 pl-5 collapse show"
                        id="myaccounts"
                        data-parent="#profileaccordian"
                      >
                        <p className="mb-1">
                          <Link id="tab1" onClick={(e) => tabChange(e)}>
                            Profile Information
                          </Link>
                        </p>
                        <p className="mb-1 pb-1">
                          <Link id="tab2" onClick={(e) => tabChange(e)}>
                            Manage Address
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div>
                      <FolderIcon className="profile-set-icn"></FolderIcon>
                      <h6>MY ACCOUNTS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="user-profile-bg">
                <div className={tab === "tab1" ? "tab active" : "tab"}>
                  {" "}
                  <form>
                    <div className="row">
                      <div className="col-md-12 text-right">
                        <Link onClick={editable}>
                          {edit ? (
                            <EditIcon></EditIcon>
                          ) : (
                            <CloseIcon></CloseIcon>
                          )}
                        </Link>
                        <Link>
                          <SaveIcon className="text-success ml-2  "></SaveIcon>
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="FirstName">FirstName</label>
                          <input
                            type="text"
                            class="form-control"
                            id="FirstName"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="LastName">LastName</label>
                          <input
                            type="text"
                            class="form-control"
                            id="LastName"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="Email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="Mobile">Mobile</label>
                          <input
                            type="text"
                            class="form-control"
                            id="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={tab === "tab2" ? "tab active" : "tab"}>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div class="form-group">
                          <label for="FirstName">Manage Addresses</label>
                          <div id="add-address-accordian">
                            <div>
                              <div
                                className="user-add-cnt bot-bor px-2 py-3 user-address"
                                data-toggle="collapse"
                                data-target="#addaddress"
                              >
                                <div className="inline-block address-txt-blu">
                                  <AddIcon></AddIcon> ADD A NEW ADDRESS
                                </div>
                              </div>
                              {/* <Textbox value=" + ADD A NEW ADDRESS" /> */}
                              <div
                                className="mt-1 pl-5 collapse"
                                id="addaddress"
                                data-parent="#add-address-accordian"
                              >
                                <form>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>Name</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>Pincode</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>Locality</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <div class="form-group">
                                        {" "}
                                        <label>Address (Area and Street)</label>
                                        <input
                                          type="textarea"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>City/District/Town</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>State</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>Landmark</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group">
                                        <label>
                                          Alternate Phone (Optional)
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <p> Address Type</p>
                                      <input
                                        type="radio"
                                        name="Selectaddress"
                                      />
                                      <label className="pl-2 pr-2">Home</label>
                                      <input
                                        type="radio"
                                        name="Selectaddress"
                                      />

                                      <label className="pl-2">Work</label>
                                    </div>
                                    <div className="col-md-6">
                                      <div class="form-group mt-2">
                                        <button className="user-add-save-btn mr-3">
                                          Save
                                        </button>
                                        <button className="user-add-cancel-btn">
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                        <div class="form-group">
                          <label for="LastName">LastName</label>
                          <input
                            type="text"
                            class="form-control"
                            id="LastName"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="Email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <label for="Mobile">Mobile</label>
                          <input
                            type="text"
                            class="form-control"
                            id="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            disabled={edit}
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="user-address px-3 py-3 mt-3">
                      <div className="row">
                        <div className="col-md-12 px-0">
                          <div className="user-add-cnt bot-bor px-2 py-3">
                            <MoreVertIcon className="float-right"></MoreVertIcon>
                            <h6 className="user-add-type-hlight">Home</h6>
                            <h6>
                              <b>
                                L.Balasubramaniyan
                                <span className="pl-3">9790206418</span>
                              </b>
                            </h6>
                            <h6>
                              197/2, Vallikkollaikkadu, Adiramapattinam, Tamil
                              Nadu - 614701
                            </h6>
                          </div>
                        </div>
                        <div className="col-md-12 px-0">
                          <div className="user-add-cnt py-3 px-2">
                            <MoreVertIcon className="float-right"></MoreVertIcon>
                            <h6 className="user-add-type-hlight">Office</h6>
                            <h6>
                              <b>
                                L.Balasubramaniyan
                                <span className="pl-3">9790206418</span>
                              </b>
                            </h6>
                            <h6>
                              197/2, Vallikkollaikkadu, Adiramapattinam, Tamil
                              Nadu - 614701
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
