describe("Blog App", function () {
    beforeEach(function () {
        cy.request("POST", 'http://localhost:3001/api/testing/reset')
        const user = {
            username: "TestUser",
            password: "TestPassword",
            name: "TestName"
        }
        cy.request("POST", 'http://localhost:3001/api/users', user)
        cy.visit('http://localhost:3000')
    })

    it("Login Form is shown", function () {
        cy.contains("username")
        cy.contains("password")
        cy.contains("Submit")
    })

    describe("Login", function () {
        it("Enter correct credentials", function () {
            cy.get('input:first').type("TestUser")
            cy.get('input:last').type("TestPassword")
            cy.contains("Submit").click()
            cy.contains("blogs")
        })
    })

    describe("Can create a new Blog", function(){
            beforeEach(function(){
                cy.get('input:first').type("TestUser")
                cy.get('input:last').type("TestPassword")
                cy.contains("Submit").click()
            })

            it("Can Create a new Blog", function(){
                cy.contains("Create a new Blog").click()
                cy.get("#title").type("Test blog")
                cy.get("#author").type("Test Author")
                cy.get("#url").type("Test Url")
                cy.get("#submit").click()
                cy.contains("Test blog Test Author")
            })
    })
})