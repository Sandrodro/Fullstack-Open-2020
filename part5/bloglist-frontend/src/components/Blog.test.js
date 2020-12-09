import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Blog from "./Blog"

test("renders author and title", () => {
    const blog = {
        title: "Test Blog",
        author: "Test Author",
        url: "Test Url",
        likes: "Test Likes"
    }

    const component = render(
        <Blog blog={blog} />
    )

    expect(component.container).toHaveTextContent(blog.title);
    expect(component.container).toHaveTextContent(blog.author);
    expect(component.container).not.toHaveTextContent(blog.url);
    expect(component.container).not.toHaveTextContent(blog.likes);

})

test("renders url and likes after pressing the button", () => {
    const blog = {
        title: "Test Blog",
        author: "Test Author",
        url: "Test Url",
        likes: "Test Likes"
    }

    const component = render(
        <Blog blog={blog} />
    )

    const button = component.getByText("view");
    fireEvent.click(button);

    expect(component.container).toHaveTextContent(blog.url);
    expect(component.container).toHaveTextContent(blog.likes);
})