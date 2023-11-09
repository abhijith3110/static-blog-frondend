import React, { useEffect, useState } from "react";
import "./ChildMain.css";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";

// import Moment from 'react-moment';
// import 'moment-timezone';

const ChildMain = () => {
  // const [data,setData] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:8080/api")
  //         .then(res => res.json())
  //         .then((data) => setData(data));
  // }, []);

  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((response) => setBlogData(response.data))
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  const [expandedBlog, setExpandedBlog] = useState(0);

  const handleReadMore = (BlogDescription) => {
    setExpandedBlog(BlogDescription === expandedBlog ? 0: BlogDescription);
  };

  var showDate = Date(setBlogData.date);
  return (
    <>
      {blogdata.map((blogdata) => (
        <div className="main-child-card" key={blogdata.id}>
          <div>
            <img className="main-image" alt="error" src={blogdata.image} />
          </div>
          <div className="main-card-content">
            <h1>{blogdata.title}</h1>
            <div className="sub-title-main-child">
              <p>{blogdata.subTitle} ,</p>
              <p className="sub-title-date">
                <ReactTimeAgo date={showDate} locale="en-US" />
              </p>
            </div>
            <p className="main-card-para">
              {blogdata.BlogDescription === expandedBlog
                ? blogdata.description
                : blogdata.description.slice(0, 370)}
            </p>
            <div className="card-ending">
              <button
                className="read-more-btn"
                onClick={() => handleReadMore(blogdata.BlogDescription)}>
                <p>
                  {blogdata.BlogDescription === expandedBlog
                    ? " READ LESS"
                    : " READ MORE"}

                  <span className="material-symbols-outlined">
                    double_arrow
                  </span>
                </p>
              </button>
              <div className="comments">
                <p>comments</p>
                <p className="comment-count">8</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChildMain;
