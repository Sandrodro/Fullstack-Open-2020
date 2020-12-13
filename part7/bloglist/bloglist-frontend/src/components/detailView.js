import React from "react";

const DetailView = ({ blog }) => {
    return (
        <>
            <br />
            {blog.url}
            <br />
            {blog.likes}
            <br />
            {blog.author}
            <br />
        </>
    )
}

export default DetailView;