import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  {/* <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  className="col-md-8 col-md-offset-2 intro-te"> 
          {/* <h1>
            {this.props.data ? this.props.data.title : "Loading"}
            <span></span>
          </h1>
          <p>
            {this.props.data ? this.props.data.paragraph : "Loading"}
          </p> */}
        </div>
      </header>
      
    );
  }
}

export default Header;
