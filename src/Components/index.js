import React, { Component } from "react";
import "./style.scss";

class ListComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <div className="container-col-1">
          <img
            alt="profile"
            src="http://educative.io/udata/1m5lkL7p9Q0/dog.jpeg"
          />
        </div>
        <div className="container-col-2">
          <span className="content">{data}</span>
        </div>
        <div className="container-col-3">
          <img
            alt="actions"
            src="http://educative.io/udata/w66j6pMjng6/down_icon.svg"
          />
        </div>
      </div>
    );
  }
}

export default ListComponent;
