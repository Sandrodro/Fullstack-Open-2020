import React, { useState } from "react"
import DetailView from "./detailView"
import PropTypes from "prop-types"
const Blog = ({ blog }) => {
  const [details, setDetails] = useState(false)
  return (
    <div>
      {blog.title} {blog.author}
      {details ? <button onClick={() => setDetails(false)}>hide</button > :
        <button onClick={() => setDetails(true)}>view</button>}
      {details ?
        <DetailView
          blog={blog}
          setDetails={setDetails} /> :
        null
      }
    </div >
  )
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog
