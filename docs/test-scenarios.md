# Test Scenarios - QAPlayground Authentication Modules

## Document Information

| Item    | Value                  |
| ------- | ---------------------- |
| Project | QAPlayground           |
| Modules | Registration and Login |
| Tester  | Thiago                 |
| Version | 1.0                    |
| Status  | Draft                  |

---

# 1. Registration Module

## Registration - Name Field

### TS-REG-001

Validate registration when the Name field is left empty.

### TS-REG-002

Validate registration when only the first name is provided.

### TS-REG-003

Validate registration when the Name field contains numbers.

### TS-REG-004

Validate registration when the Name field contains special characters.

### TS-REG-005

Validate registration when the Name field contains consecutive spaces.

### TS-REG-006

Validate registration when the first name contains fewer than 3 characters.

### TS-REG-007

Validate registration when the last name contains fewer than 3 characters.

### TS-REG-008

Validate registration when the full name contains fewer than 7 characters.

### TS-REG-009

Validate registration when the Name field exceeds 64 characters.

### TS-REG-010

Validate registration using a valid full name.

---

## Registration - Email Field

### TS-REG-011

Validate registration when the Email field is empty.

### TS-REG-012

Validate registration when the Email field does not contain '@'.

### TS-REG-013

Validate registration when the Email field contains an invalid domain.

### TS-REG-014

Validate registration when the Email field contains spaces.

### TS-REG-015

Validate registration when the Email field exceeds 64 characters.

### TS-REG-016

Validate registration using a valid email address.

---

## Registration - Password Field

### TS-REG-017

Validate registration when the Password field is empty.

### TS-REG-018

Validate registration when the Password does not contain a number.

### TS-REG-019

Validate registration when the Password does not contain an uppercase letter.

### TS-REG-020

Validate registration when the Password does not contain a special character.

### TS-REG-021

Validate registration when the Password contains fewer than 6 characters.

### TS-REG-022

Validate registration when the Password exceeds 12 characters.

### TS-REG-023

Validate password masking functionality.

### TS-REG-024

Validate password visibility toggle functionality.

### TS-REG-025

Validate registration using a valid password.

---

## Registration - Confirm Password Field

### TS-REG-026

Validate registration when Confirm Password is empty.

### TS-REG-027

Validate registration when Password and Confirm Password do not match.

### TS-REG-028

Validate registration when Password and Confirm Password match.

---

## Registration Process

### TS-REG-029

Validate successful registration using valid data.

### TS-REG-030

Validate registration attempt with mandatory fields left empty.

### TS-REG-031

Validate success message after successful registration.

### TS-REG-032

Validate field clearing after successful registration.

### TS-REG-033

Validate form disabling after successful registration.

### TS-REG-034

Validate user data storage in localStorage after successful registration.

---

## Registration Navigation

### TS-REG-035

Validate navigation to the Requirements page.

### TS-REG-036

Validate navigation to the Home page using the Back button.

---

## Registration QA Features

### TS-REG-037

Validate viewing saved user information.

### TS-REG-038

Validate viewing saved user information when no user exists.

### TS-REG-039

Validate clearing registration data.

### TS-REG-040

Validate form reactivation after clearing registration data.

---

# 2. Login Module

## Login - Email Field

### TS-LOG-001

Validate login when the Email field is empty.

### TS-LOG-002

Validate login using an invalid email format.

### TS-LOG-003

Validate login using a valid email.

---

## Login - Password Field

### TS-LOG-004

Validate login when the Password field is empty.

### TS-LOG-005

Validate password masking functionality.

### TS-LOG-006

Validate password visibility toggle functionality.

### TS-LOG-007

Validate login using a valid password.

---

## Login Authentication

### TS-LOG-008

Validate login using registered credentials.

### TS-LOG-009

Validate login using an incorrect password.

### TS-LOG-010

Validate login using an unregistered email.

### TS-LOG-011

Validate login when both email and password are incorrect.

### TS-LOG-012

Validate successful login message.

### TS-LOG-013

Validate failed login message.

---

## Login Navigation

### TS-LOG-014

Validate navigation to the Requirements page.

### TS-LOG-015

Validate navigation to the Home page using the Back button.

---

## Login QA Features

### TS-LOG-016

Validate display of registered user information.

### TS-LOG-017

Validate behavior when no registered user exists.

---

# 3. Accessibility

## Accessibility Validation

### TS-ACC-001

Validate VLibras avatar availability on Registration page.

### TS-ACC-002

Validate VLibras avatar availability on Login page.

### TS-ACC-003

Validate Audio Reader button availability.

### TS-ACC-004

Validate ARIA labels on all buttons.

### TS-ACC-005

Validate accessibility of error modals.

### TS-ACC-006

Validate accessibility of success modals.

### TS-ACC-007

Validate keyboard navigation through forms.

### TS-ACC-008

Validate audio announcement of error messages.

### TS-ACC-009

Validate audio announcement of success messages.

### TS-ACC-010

Validate modal compatibility with VLibras.

---

# Summary

| Module        | Total Scenarios |
| ------------- | --------------- |
| Registration  | 40              |
| Login         | 17              |
| Accessibility | 10              |
| Total         | 67              |

These scenarios serve as the basis for creating detailed test cases and executing functional validation of the QAPlayground Authentication Modules.
