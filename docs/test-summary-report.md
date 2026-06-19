# Test Summary Report

## 1. Project Information

| Item                | Description         |
| ------------------- | ------------------- |
| Project             | Hora do QA          |
| Application         | Web Application     |
| Modules Tested      | Sign Up and Sign In |
| Tester              | Thiago              |
| Test Cycle          | Cycle 1             |
| Test Execution Date | 2026-06-19          |

---

## 2. Test Objective

The purpose of this test cycle was to validate the functionality, validations, navigation, localStorage integration, and accessibility requirements of the Sign Up and Sign In modules.

---

## 3. Scope

### In Scope

* Sign Up module
* Sign In module
* Field validations
* Navigation buttons
* localStorage integration
* Accessibility requirements

### Out of Scope

* Performance testing
* Security testing
* Cross-browser compatibility testing
* Mobile responsiveness testing

---

## 4. Test Execution Summary

| Metric           | Result |
| ---------------- | ------ |
| Total Test Cases | 62     |
| Executed         | 62     |
| Passed           | 59     |
| Failed           | 3      |
| Blocked          | 0      |
| Not Run          | 0      |

Execution Rate:

```text
Executed / Total = 62 / 62 = 100%
```

Pass Rate:

```text
Passed / Executed = 59 / 62 = 95.16%
```

Fail Rate:

```text
Failed / Executed = 3 / 62 = 4.84%
```

---

## 5. Defect Summary

| Bug ID  | Title                                                     | Severity | Status |
| ------- | --------------------------------------------------------- | -------- | ------ |
| BUG-001 | Show Password functionality is missing on Sign Up page    | High     | Open   |
| BUG-002 | User validation message is incomplete on Sign In page     | Medium   | Open   |
| BUG-003 | Password validation message is incomplete on Sign In page | Medium   | Open   |

---

## 6. Defect Distribution

| Severity | Quantity |
| -------- | -------- |
| Critical | 0        |
| High     | 1        |
| Medium   | 2        |
| Low      | 0        |

Total Defects Found: **3**

---

## 7. Risks Identified

* Users cannot reveal the password during registration, causing non-compliance with requirements and negatively impacting usability.
* Validation messages are inconsistent with specifications, potentially causing confusion to end users.
* Accessibility requirements should be retested after bug fixes.

---

## 8. Conclusion

The application presented good overall stability and most functional requirements were successfully validated.

However, three defects were identified during execution, including one High severity defect related to a missing mandatory feature.

Due to the existence of an open High severity defect, this test cycle does not meet the exit criteria for release.

---

## 9. Final Status

**TEST CYCLE STATUS: FAILED**

Recommendation:

* Fix BUG-001, BUG-002, and BUG-003.
* Perform regression testing on Sign Up and Sign In modules.
* Execute a new test cycle before considering release approval.

---

## 10. Deliverables

* Test Plan
* Test Scenarios
* Test Cases
* Bug Reports
* Test Evidence (Screenshots)
* Test Summary Report
