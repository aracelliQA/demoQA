import elements from "../support/pages/elements/elements";

describe('DemoQA Testing', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Validating Homepage', () => {
    cy.visit('/');
    cy.get('.home-body').should('be.visible');
  });

  it('Validating Elements - Text Box', () => {
    elements.textBox();
  });

  it('Validating Elements - Check Box', () => {
    elements.checkBox();
  });

  it('Validating Elements - Radio Button', () => {
    elements.radioButton();
  });

  it('Validating Elements - Web Tables', () => {
    elements.webTables();
  });

  it('Validating Elements - Buttons', () => {
    elements.buttons();
  });
  
  it.only('Validating Elements - Links', () => {
    elements.links();
  });

})