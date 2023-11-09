import React from 'react'
import "./ChildSubCard.css";
const ChildSubCard = () => {
    let postCard = [
        {
            id: 1,
            image: "https://www.w3schools.com/w3images/workshop.jpg",
            mainHeading: "Lorem",
            subHeading: "Sed mattis nunc",
        },
        {
            id: 2,
            image: "https://www.w3schools.com/w3images/gondol.jpg",
            mainHeading: "Lorem",
            subHeading: "Sed mattis nunc",
        },
        {
            id: 3,
            image: "https://www.w3schools.com/w3images/skies.jpg",
            mainHeading: "Lorem",
            subHeading: "Sed mattis nunc",
        },
        {
            id: 4,
            image: "https://www.w3schools.com/w3images/rock.jpg",
            mainHeading: "Lorem",
            subHeading: "Sed mattis nunc",
        }
    ]
    return (
        <>
            {postCard.map((value) => {
                return (
                    <div className='post-card'>
                        <div className='post-card-content'>
                            <div className='card-content' key={value.id}>
                                <div className='post-card-img'>
                                    <img alt='img' src={value.image} />
                                </div>
                                <div className='popular-post-content'>
                                    <span className='mainHeading'>{value.mainHeading}</span>
                                    <span>{value.subHeading}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                )

            })}
        </>
    )
}

export default ChildSubCard