import React from "react";
export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>hello ,{this.props.username}</h1>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}
