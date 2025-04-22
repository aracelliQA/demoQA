# Cypress Tests for DemoQA

This repository contains a functional automated test suite for the website [https://demoqa.com/](https://demoqa.com/) using [Cypress](https://www.cypress.io/). The purpose of this project is to validate that key elements and features on the site work correctly from the end-user perspective.

## Test Coverage

### ✅ Elements 

- Validation of element visibility and interaction
- Clickability and navigation within the Elements section
- Verification of text, attributes, and state changes

### ✅ Forms 

- Filling out the form with valid data
- Validation of form submission
- Validation of empty form submission

### ✅ Alerts,Frames and Windows 

- Verification of alert messages and alert dialogs.
- Navigation and validation of new pages.
- Visualization of embedded frames.

## Structure & Organization

Tests are organized using the **Page Object Model** (POM) pattern to improve maintainability and readability. 

The folder structure is as follows:

```
cypress/
├── e2e/
│   ├── alertsFramesWindows.cy.js
│   ├── elements.cy.js
│   └── forms.cy.js
├── support/
│   ├── pages/
│   │   ├── alertsFramesWindows
│   │   |  └── alertsFramesWindows.js
│   │   ├── elements
│   │   |  └── elements.js
│   │   └── forms
│   │   |  └── form.js
│   └── commands.js
```

## Getting Started

To run the tests locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aracelliQA/demoQA.git
   cd demoQA

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests in interactive mode:
   ```bash
   npx cypress open
   ```

4. Or run the tests in headless mode:
   ```bash
   npx cypress run
   ```

## Reporting
This project uses the [mochawesome](https://github.com/adamgruber/mochawesome) reporter to generate detailed and visually rich test reports. After running the tests in headless mode, a report is automatically generated, allowing for easy visualization of passed and failed test cases, execution times, and error traces. The reports can be found in the mochawesome-report/ directory.
To ensure proper reporting, make sure mochawesome is installed and configured in cypress.config.js.

## Resources and tools

- [Cypress](https://www.cypress.io/)   
- Node.js
- [mochawesome](https://github.com/adamgruber/mochawesome)

## Improvements & Future Enhancements

To improve the scalability, maintainability, and readability of the test project, the following enhancements are suggested:

- **Deeper Use of Page Object Model:**  
  Isolate test logic from page structure by separating data, atributes, and page-specific methods into dedicated classes.

- **Add Testing Attributes to Elements (e.g., `data-cy`):**  
  Including custom test attributes will make it easier to locate elements during automation and reduce reliance on fragile selectors.





