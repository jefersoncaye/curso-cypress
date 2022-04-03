Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome, {log: false});
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();  
})

Cypress.Commands.add('cadastro_usuario', (email, fulName, userName, password) => {
    cy.contains('a', 'Register now').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fulName)
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="password"]').type(password)
    cy.contains('button', 'Register').click()
})