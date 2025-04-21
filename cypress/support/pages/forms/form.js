import '../../commands'

class forms {
    emptyFields(){
        cy.visit('/automation-practice-form');
        cy.get('#submit').click();
        cy.get('.modal-content').should('not.exist')
    }

    validForms(){
        cy.visit('/automation-practice-form');
        cy.get('#firstName').type('Testing');
        cy.get('#lastName').type('Last Name');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#userNumber').type('1265986325');
        cy.get('#dateOfBirthInput').type('21 Apr 1995{enter}');
        cy.get('.subjects-auto-complete__value-container').type('Chemistry{enter}');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#uploadPicture').selectFile('./cypress/support/uploadFiles/test.docx')
        cy.get('#currentAddress').type('testing 123');
        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        cy.get('#react-select-3-option-0').click();
        cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
        cy.get('#react-select-4-option-0').click();
        cy.get('#submit').click();
        cy.get('.modal-content').should('be.visible').and('contain', 'Testing Last Name');


    }

}

export default new forms();