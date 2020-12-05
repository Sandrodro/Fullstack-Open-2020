const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const Blog = require("../models/blog");

const api = supertest(app)

test("blogs are returned as json", async () => {
    await api
        .get("/")
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test("post requests add blogs", async () => {
    await api
        .post("/", (request, response, next) => {
            const req = new Blog({
                title: "test",
                author: "test",
                likes: 0,
                url: "test"
            })

            req.save().then(() => {
                Blog.findById({})
                    .then(res => expect(res.length == 4))
                    .then(() => Blog.remove({ title: "test" }, true))
            })
        })
})

afterAll(() => mongoose.connection.close())