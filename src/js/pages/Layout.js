import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <Header/>
        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
