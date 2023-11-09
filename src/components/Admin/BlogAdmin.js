import React from "react";
import AdminForm from "./AdminForm/AdminForm";
import Header from "../common/Header/Header";
import "./BlogAdmin.css";
const BlogAdmin = () => {
  return (
    <div className="admin-form">
      <div className="conatiner">
        <div className="admin-header">
          <Header name={"Admin Panel"} />
        </div>
        <AdminForm />
      </div>
    </div>
  );
};

export default BlogAdmin;
