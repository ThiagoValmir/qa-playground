describe('Sign up Tests', () => {

    beforeEach(() => {
    cy.deleteRegisteredUser();
    cy.visit("https://carlosfelixpenha-create.github.io/QAPlayground/");
    cy.get(':nth-child(2) > :nth-child(1) > .btn').click();
  });

  it('TC-020 Navigate to Home page using Back button', () => {
    cy.get('button[type="button"]').contains('Voltar').click();
    cy.url().should('eq', 'https://carlosfelixpenha-create.github.io/QAPlayground/index.html');
    cy.title().should('eq', 'QAPlayground');
  })

    it('TC-021 Navigate to Registration Requirements page', () => {
    cy.get('.requisitos').contains('Requisitos').click();
    cy.url().should('eq', 'https://carlosfelixpenha-create.github.io/QAPlayground/frontend/pages/cadastro-requisitos.html');
    cy.title().should('eq', 'QAPlayground - Requisitos Cadastro');
  })

    it('TC-017 Register successfully with valid data', () => {
    cy.get('#nome').type('Carlos Felix Penha');
    cy.get('#email').type('carlos.felix.penha@example.com');
    cy.get('#senha').type('Senha123!');
    cy.get('#confirmarSenha').type('Senha123!');
    cy.get('button[type="submit"]').contains('Cadastrar').click();
    cy.get('#modalTexto').should('be.visible').and('contain', 'Cadastro realizado com sucesso!');
  })

    it('TC-018 Verify fields are disabled after successful registration', () => {
    cy.get('#nome').type('Carlos Felix Penha');
    cy.get('#email').type('carlos.felix.penha@example.com');
    cy.get('#senha').type('Senha123!');
    cy.get('#confirmarSenha').type('Senha123!');
    cy.get('button[type="submit"]').contains('Cadastrar').click();
    cy.get('#modalOk').click();
    cy.get('#nome').should('be.disabled');
    cy.get('#email').should('be.disabled');
    cy.get('#senha').should('be.disabled');
    cy.get('#confirmarSenha').should('be.disabled');
  })

    it('TC-019 Verify QA buttons become visible after successful registration', () => {
    cy.get('#nome').type('Carlos Felix Penha');
    cy.get('#email').type('carlos.felix.penha@example.com');
    cy.get('#senha').type('Senha123!');
    cy.get('#confirmarSenha').type('Senha123!');
    cy.get('button[type="submit"]').contains('Cadastrar').click();
    cy.get('#modalOk').click();
    cy.get('#btnVerUsuario').should('be.visible');
    cy.get('#btnLimparCadastro').should('be.visible');
  })
  
})