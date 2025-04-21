import '../../commands'

class elements {
    textBox(){

        cy.visit('/text-box');
        cy.get('#userName').type('Testing Full Name');
        cy.get('#userEmail').type('Testing@email.com');
        cy.get('#currentAddress').type('Testing Adress');
        cy.get('#permanentAddress').type('Testing Permantent Adress');
        cy.get('#submit').click();
        cy.get('#name').should('be.visible').and('contain', 'Testing Full Name');
        cy.get('#email').should('be.visible').and('contain', 'Testing@email.com');
        cy.get('.border > #currentAddress').should('be.visible').and('contain', 'Testing Adress');
        cy.get('.border > #permanentAddress').should('be.visible').and('contain', 'Testing Permantent Adress');

    }

    checkBox(){
        cy.visit('/checkbox');
        cy.contains('Home').should('be.visible');
        cy.get('.rct-collapse > .rct-icon').click();
        cy.contains('Desktop').should('be.visible');
        cy.contains('Documents').should('be.visible');
        cy.contains('Downloads').should('be.visible');
        cy.get('.rct-node-expanded > :nth-child(1) > label > .rct-checkbox').click();
        cy.get('#result').should('be.visible');
        cy.get('.rct-option-expand-all').click();
        cy.contains('Commands').should('be.visible');
        cy.contains('Angular').should('be.visible');
        cy.contains('General').should('be.visible');
        cy.contains('Word File.doc').should('be.visible');
        cy.get('.rct-option-collapse-all').click();
        cy.get('.rct-checkbox').click();
        cy.get('#result').should('not.exist')
    }

    radioButton(){
        cy.visit('/radio-button');
        cy.contains('Do you like the site?').should('be.visible');
        cy.contains('Yes').click();
        cy.get(':nth-child(3) > :nth-child(3)').should('not.be.checked');
        cy.get('.text-success').should('be.visible');
        cy.contains('Impressive').click();
        cy.get('.col-md-6 > :nth-child(3) > :nth-child(2)').should('not.be.checked');
        cy.get('.custom-control.disabled').should('have.class', 'disabled');

    }

    webTables(){
        cy.visit('/webtables');
        cy.get('.ReactTable').should('be.visible')
        cy.get('#addNewRecordButton').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#registration-form-modal').should('be.visible');
        cy.get('#firstName').type('Test');
        cy.get('#lastName').type('Test 2');
        cy.get('#userEmail').type('email@test.com');
        cy.get('#age').type('26');
        cy.get('#salary').type('3000');
        cy.get('#department').type('Project')
        cy.get('#submit').click();
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('contain','Test')
        cy.get('#searchBox').type('Test 2');
        cy.get('#basic-addon2').click();
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').should('contain','Test 2')
    }

    buttons(){
        cy.visit('/buttons');
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible')
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('be.visible')
        cy.get('.mt-4 .btn.btn-primary').eq(2).click();
        cy.get('#dynamicClickMessage').should('be.visible')
    }

    links(){
        cy.visit('/links');
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'demoqa.com');
        cy.visit('/links');
        cy.get('#dynamicLink').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'demoqa.com');
        cy.visit('/links');
        cy.get('#created').click();
        cy.intercept('GET', '/created', {statusCode: 201});
        cy.get('#no-content').click();
        cy.intercept('GET', '/no-content', {statusCode: 204});
        cy.get('#moved').click();
        cy.intercept('GET', '/moved',{statusCode: 301});
        cy.get('#bad-request').click();
        cy.intercept('GET', '/bad-request', {statusCode: 400});
        cy.get('#unauthorized').click();
        cy.intercept('GET', '/unauthorized', {statusCode: 401});
        cy.get('#forbidden').click();
        cy.intercept('GET', '/forbidden', {statusCode: 403});
        cy.get('#invalid-url').click();
        cy.intercept('GET', '/invalid-url', {statusCode: 404});
    }

    brokenLinksImages() {
        cy.visit('/broken');
        cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]').should('be.visible');
        cy.get('[src="/images/Toolsqa_1.jpg"]').should('be.visible');
        cy.contains('Click Here for Valid Link').should('have.attr', 'href', 'http://demoqa.com');
        cy.contains('Click Here for Broken Link').should('have.attr', 'href', 'http://the-internet.herokuapp.com/status_codes/500');
    }

    uploadDownload() {
    cy.visit('/upload-download');
    cy.get('#downloadButton').click()
    cy.readFile('cypress/downloads/samplefile.jpeg').should('exist');
    cy.get('#uploadFile').selectFile('./cypress/support/uploadFiles/test.docx');
    cy.get('#uploadedFilePath').should('be.visible').and('contain', 'test.docx')
}
    dynamicProperties() {
    cy.visit('/dynamic-properties');
    cy.get('#enableAfter').should('be.visible');
    cy.wait(5000)
    cy.get('#visibleAfter').should('be.visible');
    cy.get('#colorChange').should('have.css', 'color', 'rgb(220, 53, 69)');
}





}

export default new elements();