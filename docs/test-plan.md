# Test Plan - Hora do QA Website

## Introduction

This document describes the testing approach for the Login and User Registration modules of the Hora do QA web application. The purpose of this test plan is to define the testing scope, objectives, resources, environment, schedule, and deliverables required to ensure the quality and functionality of these modules.

---

# 1. Test Strategy

## 1.1 Testing Scope

### 1.1.1 Features to be Tested

#### Login Module

* Login with valid credentials
* Login with invalid credentials
* Required field validation
* Password masking
* Error message validation
* Navigation to related pages

#### Registration Module

* User registration with valid data
* Required field validation
* Invalid data validation
* Password confirmation validation
* Duplicate user validation (if applicable)
* Success message validation

### 1.1.2 Out of Test Scope

The following items are not included in this test cycle:

* Performance testing
* Security testing
* Accessibility testing
* Mobile application testing
* API testing
* Database validation
* Third-party integrations

---

## 1.2 Test Types

The following test types will be executed:

* Functional Testing
* UI Testing
* Positive Testing
* Negative Testing
* Smoke Testing
* Regression Testing

---

## 1.3 Risks and Issues

| Risk                                | Impact                         |
| ----------------------------------- | ------------------------------ |
| Changes in application requirements | Test cases may require updates |
| Environment instability             | Testing delays                 |
| Incomplete functionality            | Test execution may be blocked  |
| Lack of test data                   | Reduced test coverage          |

---

## 1.4 Test Logistics

### 1.4.1 Who Will Test?

* QA Tester: Thiago

### 1.4.2 When Will the Testing Occur?

Testing will be performed after the test environment is available and the application is deployed.

---

# 2. Test Objective

The objective of this testing effort is to verify that the Login and Registration modules function according to the specified requirements and provide a reliable user experience.

---

# 3. Test Criteria

## 3.1 Suspension Criteria

Testing activities may be suspended if:

* The application is unavailable.
* Critical defects prevent further testing.
* Test environment becomes unstable.
* Required test data is unavailable.

---

## 3.2 Exit Criteria

Testing will be considered complete when:

* All planned test cases have been executed.
* All critical and high-severity defects have been resolved or documented.
* Test results have been reviewed.
* Test summary report has been completed.

---

# 4. Resource Planning

## 4.1 System Resource

* Windows 11
* Google Chrome
* Microsoft Edge
* GitHub
* Visual Studio Code

---

## 4.2 Human Resource

| Role      | Resource |
| --------- | -------- |
| QA Tester | Thiago   |

---

# 5. Test Environment

| Component        | Details                       |
| ---------------- | ----------------------------- |
| Application      | Hora do QA                    |
| Environment      | Test Environment              |
| Browser          | Google Chrome, Microsoft Edge |
| Operating System | Windows 11                    |
| Documentation    | GitHub Repository             |

---

# 6. Schedule & Estimation

## 6.1 All Project Tasks and Estimation

| Task                   | Estimated Effort |
| ---------------------- | ---------------- |
| Requirement Analysis   | 2 hours          |
| Test Planning          | 2 hours          |
| Test Scenario Creation | 2 hours          |
| Test Case Creation     | 4 hours          |
| Test Execution         | 4 hours          |
| Bug Reporting          | 2 hours          |
| Test Summary Report    | 2 hours          |

---

## 6.2 Schedule to Complete These Tasks

| Activity         | Duration |
| ---------------- | -------- |
| Planning         | Day 1    |
| Test Design      | Day 1    |
| Test Execution   | Day 2    |
| Defect Reporting | Day 2    |
| Test Closure     | Day 3    |

---

# 7. Test Deliverables

## 7.1 Before the Testing Phase

* Test Plan
* Test Scenarios
* Test Cases
* Test Data

---

## 7.2 During the Testing

* Test Execution Results
* Defect Reports
* Evidence (Screenshots)

---

## 7.3 After the Testing Cycle is Over

* Test Summary Report
* Defect Summary
* Lessons Learned
* Updated Test Artifacts

---

# Approval

| Name   | Role      |
| ------ | --------- |
| Thiago | QA Tester |
