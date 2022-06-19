describe('The Home Page Login with Git Hub', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000/api/auth/signin') 
    })/* ,
    it('home page', () => {
      cy.visit('/')
    }) */
      
  })