import React from "react";
import "./PreviewForm.css";

const PreviewForm = ({ blogInputData }) => {
  return (
    <div className="main-child-card">
      <div className="img-sec">
        <img
          className="main-image"
          alt="NO_IMAGE"
          src={blogInputData.image || "NO IMAGE"}
        />
      </div>
      <div className="main-card-content">
        <h1>{blogInputData.title || "Title Not Available"}</h1>
        <div className="sub-title-main-child">
          <p>{blogInputData.subTitle || "Subtitle Not Available"},</p>
        </div>
        <p className="main-card-para">
          {blogInputData.description || "Description Not Available"}
        </p>
        <div className="card-ending">
          <button className="read-more-btn">
            <p>
              READ MORE
              <span className="material-symbols-outlined">double_arrow</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
