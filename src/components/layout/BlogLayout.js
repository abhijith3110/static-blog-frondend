import React from "react";
import Header from "../common/Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import SubContainer from "./Subcontainer/SubContainer";
import Footer from "./footer/Footer";
import "./BlogLayout.css";
const BlogLayout = () => {
  return (
    <div className="body">
      <div className="container">
        <Header name={"MY BLOG"} />
        <div className="sub-header">
          <p className="sub-heading">Welcome to the blog of</p>
          <p className="sub-heading-bold">unknown</p>
        </div>
        <div className="card-container">
          <div className="main-container">
            <MainContainer />
          </div>
          <div className="sub-container">
            <SubContainer />
          </div>
        </div>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
};

export default BlogLayout;
