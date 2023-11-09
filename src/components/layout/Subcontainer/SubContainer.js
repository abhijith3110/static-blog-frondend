import React from 'react'
import "./SubContainer.css";
import ChildSub from './childSub/ChildSub';
import ChildSubCard from "./childSubCard/ChildSubCard";
import ChildSubtags from "./ChildSubTags/ChildSubtags"
const SubContainer = () => {
  return (
    <div className='SubContainer'>
      <ChildSub />
      <div className='post-div'>
        <h3 className='post-card-heading'>Popular Posts</h3>
        <ChildSubCard />
      </div>
      <div className='tag-div'>
        <h3>Tags</h3>
        <div className='tags'>
          <ChildSubtags />
        </div>
      </div>

    </div>
  )
}

export default SubContainer