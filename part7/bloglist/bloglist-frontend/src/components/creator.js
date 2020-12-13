import React, { useState } from "react";
import blogService from "../services/blogs"
const Creator = ({ blogs, setBlogs }) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")
    const handleBlog = async (e) => {
        e.preventDefault();
        console.log("adding a new blog", title, author, url)
        try {
            const newBlog = await blogService.addBlog({ title, author, url });
            setBlogs(blogs.concat(newBlog))
            setTitle("");
            setAuthor("");
            setUrl("")
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h2>Create a new Blog</h2>
            <form onSubmit={handleBlog}>
                title: <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={e => setTitle(e.target.value)}
                    value={title} />
                <br />
                author: <input
                    type="text"
                    name="author"
                    id="author"
                    onChange={e => setAuthor(e.target.value)}
                    value={author} />
                <br />
                url: <input
                    type="text"
                    name="url"
                    id="url"
                    onChange={e => setUrl(e.target.value)}
                    value={url} />
                <br />
                <button 
                type="submit"
                id="submit">Create</button>
            </form>
        </div>
    )
}

export default Creator;