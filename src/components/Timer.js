import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
import firebase from "firebase";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      exit: false,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prev) => {
        return {
          time: prev.time + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ exit: true });
        localStorage.removeItem("user")
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { time, exit } = this.state;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = time - minutes * 60 - hours * 3600;

    return (
      <div>
        {exit ? (
          <Redirect to="/" />
        ) : (
          <div>
            <div className="logOut"> {hours}:{minutes}:{seconds} </div>
            <button
              type="submit"
              onClick={this.logOut}
              className="buttonLogOut"> Log out </button>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
