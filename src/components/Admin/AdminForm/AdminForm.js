import React, { useState } from "react";
import "./AdminForm.css";
import PreviewForm from "../PreviewForm/PreviewForm";
import axios from "axios";

const AdminForm = () => {
  const data = {
    image: "",
    title: "",
    subTitle: "",
    description: "",
  };
  const [blogInputData, setBlogInputData] = useState(data);

  const handleData = (e) => {
    setBlogInputData({ ...blogInputData, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api", blogInputData)
      .then((response) => console.log(response));
  };

  return (
    <div className="admin-form-layout">
      <div className="admin-form-card">
        <div className="admin-form-header">
          <h1>ADMIN FORM</h1>
        </div>
        <div className="form-input">
          <input
            type="text"
            className="imageURL"
            name="image"
            value={blogInputData.image}
            onChange={handleData}
            placeholder="Enter Image URL"
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            className="blog-title"
            name="title"
            value={blogInputData.title}
            onChange={handleData}
            placeholder="Enter Title"
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            className="blog-sub-title"
            name="subTitle"
            value={blogInputData.subTitle}
            onChange={handleData}
            placeholder="Enter subtitle"
          />
        </div>

        <div className="form-input">
          <textarea
            type="text"
            className="description"
            name="description"
            value={blogInputData.description}
            onChange={handleData}
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className=".upload-btn-div ">
          <button className="upload-btn" onClick={handleSumbit}>
            Create Blog
          </button>
        </div>
      </div>

      <div className="preview-form">
        <PreviewForm blogInputData={blogInputData} />
      </div>
    </div>
  );
};

export default AdminForm;
