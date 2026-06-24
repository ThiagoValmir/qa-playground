# QA Playground - Manual and Automated Testing Project

![Cypress](https://img.shields.io/badge/Cypress-Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![QA](https://img.shields.io/badge/QA-Portfolio-orange)

## 📌 About the Project

This project was developed to demonstrate Software Quality Assurance (QA) practices by testing the authentication features of the **QA Playground** application.

The project covers the complete QA lifecycle, from planning and test design to execution, defect reporting, and test automation.

The main modules under test are:

* **Sign Up (User Registration)**
* **Sign In (User Authentication)**

---

## 🎯 Objectives

* Validate the application's authentication functionalities.
* Apply manual and automated testing techniques.
* Create professional QA documentation.
* Report defects with proper evidence.
* Demonstrate Cypress automation skills.

---

## 🔍 Scope of Testing

### Sign Up Module

* Successful registration
* Required field validation
* Invalid email validation
* Password validation
* Duplicate user registration
* Error handling and validation messages

### Sign In Module

* Successful login
* Invalid credentials
* Required field validation
* Incorrect password validation
* Error handling and validation messages

---

## 📂 Project Structure

```text
qa-playground/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│   └── screenshots/
│
├── docs/
│   ├── bug-report-template.md
│   ├── test-cases.md
│   ├── test-plan.md
│   └── test-summary-report.md
│
├── evidences/
│   ├── bugs/
│   └── screenshots/
│
├── manual-tests/
│   ├── sign in page/
│   └── sign up page/
│
├── README.md
├── cypress.config.js
├── package-lock.json
└── package.json
```

---

## 📋 QA Deliverables

This repository includes the following testing artifacts:

| Artifact            | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| Test Plan           | Defines the testing strategy, objectives, scope, and approach. |
| Test Cases          | Detailed test cases for Sign Up and Sign In modules.           |
| Manual Tests        | Manual execution of the designed test cases.                   |
| Automated Tests     | End-to-end automated tests developed with Cypress.             |
| Bug Reports         | Defect documentation with evidence and reproduction steps.     |
| Test Summary Report | Final testing results and execution metrics.                   |

---

## 🤖 Test Automation

Currently, the **Sign Up module** has been automated using **Cypress**, covering the main registration scenarios.

### Automated Scenarios

* Successful user registration
* Validation of required fields
* Invalid email format
* Password validation
* Duplicate user registration
* Error message validation

---

## 🛠️ Technologies Used

* JavaScript
* Cypress
* Node.js
* Git
* GitHub
* Markdown

---

## 🚀 Running the Project

### Clone the repository

```bash
git clone https://github.com/your-username/qa-playground.git
```

### Access the project folder

```bash
cd qa-playground
```

### Install dependencies

```bash
npm install
```

### Run Cypress in interactive mode

```bash
npx cypress open
```

### Run Cypress in headless mode

```bash
npx cypress run
```

---

## 📸 Test Evidence

The project contains evidence of:

* Test execution screenshots
* Bug screenshots
* Defect documentation
* Manual testing records

All evidence can be found inside the `evidences` directory.

---

## 💡 Skills Demonstrated

* Test Planning
* Test Design Techniques
* Manual Testing
* Functional Testing
* Bug Reporting
* Test Documentation
* End-to-End Automation
* Cypress
* Git & GitHub

---

## 🚧 Future Improvements

* Automate Sign In scenarios.
* Implement Page Object Model (POM).
* Add API testing.
* Integrate CI/CD with GitHub Actions.
* Generate automated reports.

---

## 👨‍💻 Author

**Thiago**

Junior QA Engineer | Software Testing Enthusiast
