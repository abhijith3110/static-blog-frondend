import React from 'react'
import "./ChildSub.css"
const ChildSub = () => {
  let ChildSubData = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/avatar_g.jpg",
      titile: "My Name",
      description: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    }
  ]
  return (
    <>
      {ChildSubData.map((value) => {
        return (
          <div className='sub-child-card' key={value.id}>
            <div>
              <img className='sub-image' alt='error' src={value.image} />
            </div>
            <div className='sub-card-content'>
              <h2 className='sub-content-heading'>{value.titile}</h2>
              <p className='sub-content-descrption'>{value.description}</p>
            </div>

          </div>
        )
      })}
    </>
  )
}

export default ChildSub