import forms from "../support/pages/forms/form";

describe('DemoQA Testing - Forms', () => {

  before(()=>{
    cy.clearAllCookies();
  })
  
  it('Validating form submission with empty fields', () => {
    forms.emptyFields();
  });

  it.only('Validating form submission with valid data', () => {
    forms.validForms();
  });
})