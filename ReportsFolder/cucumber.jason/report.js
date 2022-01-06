$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SMSFunctionality/SMSFunctionality.feature");
formatter.feature({
  "name": "Verify SMS notification is working fine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create appointment from CC grid to PWB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatAppointmentfromPatientGrid"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on appointment tab",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Add button to add appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set visit type as telehealth in PWB",
  "keyword": "* "
});
formatter.step({
  "name": "I verify that copy button and send sms button available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I set \u003cReason\u003e to schedual the appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set start date for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set end date for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set status \u003cStatus\u003e for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in text area of appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I click the save button to save Appointments",
  "keyword": "When "
});
formatter.step({
  "name": "I should see message of success for \u003cmodule\u003e record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Filter",
        "Patient",
        "Language",
        "Phone",
        "Message_Text",
        "Status",
        "Comment",
        "module",
        "Reason"
      ]
    },
    {
      "cells": [
        "Contains",
        "Leo, Grayson",
        "Spanish",
        "+19294154089",
        "Edit message",
        "Scheduled",
        "Appointment created through Patient grid",
        "adding",
        "Abnormal menses"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create appointment from CC grid to PWB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatAppointmentfromPatientGrid"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I search Leo, Grayson using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on appointment tab",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.appointmenttab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Add button to add appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.addappointment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set visit type as telehealth in PWB",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.visittypecc()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify that copy button and send sms button available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.veryfybuttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set Abnormal menses to schedual the appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.reasonseselect(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set start date for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.adate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set end date for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.edate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set status Scheduled for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.statuseselect(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Appointment created through Patient grid in text area of appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.commentfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the save button to save Appointments",
  "keyword": "When "
});
formatter.match({
  "location": "SMSverification.saveappointmentbutn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see message of success for adding record",
  "keyword": "Then "
});
formatter.match({
  "location": "ProblemListsteps.saved_alerts_shoud_be_popup(String)"
});
formatter.result({
  "status": "passed"
});
});