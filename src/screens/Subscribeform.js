import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogActions,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Deliveryschedule from "./Deliveryschedule";

export default function Subscribeform(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Dialog
        open={props.open}
        fullWidth
        onClose={props.handleClose}
        className="subscription_popup"
      >
        <h2 className="text-center">SUBSCRIPTION</h2>
        <DialogContent>
          <form>
            <div class="row">
              <div class="col-md-8 mb-3">
                <label for="mobileno">Mobile Number</label>
                <TextField
                  id="mobileno"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="date">Date</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date"
                      size="small"
                      inputVariant="outlined"
                      value={selectedDate}
                      minDate={new Date()}
                      onChange={(date) => setSelectedDate(date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="size">Add Size</label>
                <FormControl
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <Select id="size">
                    <MenuItem value="200 ml">200 ml</MenuItem>
                    <MenuItem value="500 ml">500 ml</MenuItem>
                    <MenuItem value="1 ltr">1 ltr</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div class="col-md-4 mb-3">
                <label for="qty">Add Quantity</label>
                <TextField
                  id="qty"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="pincode">Pincode</label>
                <TextField
                  id="pincode"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="coupon">Apply Coupon</label>
                <TextField
                  id="coupon"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Choose Delivery Schedule</label>
                <Deliveryschedule selectedDate={selectedDate} />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Instructions for Delivery Partners</label>
                <TextField
                  id="instruct"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Door Bell</label>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="ring_btn btn"
                      onClick={props.handleClose}
                    >
                      <NotificationsNoneIcon /> Don't Ring
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="ring_btn btn"
                      onClick={props.handleClose}
                    >
                      <NotificationsOffIcon /> Ring Bell
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="d-block text-center">
          <button
            type="button"
            className="btn pop_subscribe"
            onClick={props.handleClose}
          >
            Subscribe
          </button>
          <a className="d-block pop_subscribe_link">Close</a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
