import React, { useState, useEffect } from "react"
import Blog from "./components/Blog"
import Creator from "./components/creator"
import blogService from "./services/blogs"
import LoginForm from "./components/login"
import loginService from "./services/login"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [blogIsBeingCreated, setBlogIsBeingCreated] = useState(false)

  useEffect(() => {
    blogService.getAll().then(blogs => setBlogs(blogs)
    )
  }, [])


  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("Logging in", username, password)

    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem("userLoggedIn", JSON.stringify(user));
      blogService.setToken(user.token)
      console.log(blogs)
      setUser(user);
      setUserName("");
      setPassword("")
    } catch (exception) {
      setErrorMessage("Wrong Credentials");
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const logOut = () => {
    setUser(null);
    window.localStorage.removeItem("userLoggedIn")
  }

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem("userLoggedIn");

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user)
    }
  }, [])

  if (user === null) {
    return (
      <div>
        <LoginForm
          setUserName={setUserName}
          userName={username}
          setPassword={setPassword}
          password={password}
          handleLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <p>
        {user.name} logged in <button onClick={logOut}>Log out</button>
      </p>
      {blogIsBeingCreated ?
        <div>
          <Creator
            blogs={blogs}
            setBlogs={setBlogs} />
          <button onClick={() => setBlogIsBeingCreated(false)}>cancel</button>
        </div> : <button
          onClick={() => setBlogIsBeingCreated(true)}>Create a new Blog</button>}
      {
        blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )
      }
    </div >
  )
}

export default App