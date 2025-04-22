import elements from "../support/pages/elements/elements";

describe('DemoQA Testing - Elements', () => {

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
  
  it('Validating Elements - Links', () => {
    elements.links();
  });

  it('Validating Elements - Broken Links / Images', () => {
    elements.brokenLinksImages();
  });

  it('Validating Elements - Upload and Download', () => {
    elements.uploadDownload();
  });

  it('Validating Elements - Dynamic Properties', () => {
    elements.dynamicProperties();
  });


})