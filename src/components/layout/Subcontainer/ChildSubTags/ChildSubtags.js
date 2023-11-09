import React from "react";
import "./ChildSubtags.css";
const ChildSubtags = () => {
    let tags = [
        {
            id: 1,
            tag: "travel",
        },
        {
            id: 2,
            tag: "New York",
        },
        {
            id: 3,
            tag: "London",
        },
        {
            id: 4,
            tag: "IKEA",
        },
        {
            id: 4,
            tag: "Norway",
        },
        {
            id: 4,
            tag: "DIY",
        },
        {
            id: 4,
            tag: "IDEAS",
        },
        {
            id: 4,
            tag: "Baby",
        },
        {
            id: 1,
            tag: "travel",
        },
        {
            id: 2,
            tag: "New York",
        },
        {
            id: 3,
            tag: "London",
        },
        {
            id: 4,
            tag: "IKEA",
        },
        {
            id: 4,
            tag: "Norway",
        },
        {
            id: 4,
            tag: "DIY",
        },
        {
            id: 4,
            tag: "IDEAS",
        },
        {
            id: 4,
            tag: "Baby",
        },
    ];
    return (
        <>
            {tags.map((value) => {
                return (
                    <div className="tags-list" key={value.id}>
                        <div className="tags-names">
                            <p>{value.tag}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ChildSubtags;
