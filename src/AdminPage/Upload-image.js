// imports the React Javascript Library
import React from "react";
//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import blue from "@material-ui/core/colors/blue";

import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  input: {
    display: "none"
  },
  button: {
    color: blue[900],
    margin: 10
  }
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: "initial", // initial, uploaded
    imageUploaded: 0,
    selectedFile: null
  };
  handleUploadClick = event => {
    var file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result]
      });
    }.bind(this);// Would see a path?
    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  renderInitialState() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  }

  renderUploadedState() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          <img alt=""
            width="100%"
            className={classes.media}
            src={this.state.selectedFile} // obj img đã lấy được
          />
          {/* truyền props ra bên ngoài */}
          {this.props.children(this.state.selectedFile)} 
        </CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = event => {
    console.log("Reset Click!");
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0
    });
  };

  render() {
    const { classes} = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Card>
            {/* chuyển đổi trạng thái khởi tạo icon upload và sau khi upload */}
            {(this.state.mainState ==="initial" && this.renderInitialState()) ||
              (this.state.mainState === "uploaded" &&
                this.renderUploadedState())}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
