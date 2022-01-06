$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/ClinicalSection/VitalSign.feature");
formatter.feature({
  "name": "Add Edit and Delete in Vital Sign",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@VitalSign"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Delete the specific record in vital signs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delete"
    },
    {
      "name": "@DeleteVitalSign"
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
  "name": "I click on Clinical tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Vital Sign\ttab",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTemp\u003e to delete record in vital signs",
  "keyword": "* "
});
formatter.step({
  "name": "I should see message of success for \u003cmodule\u003e record",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the deleted vital signs not present on grid",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Temp",
        "module"
      ]
    },
    {
      "cells": [
        "tahmeed, tahmeed",
        "98",
        "deleting"
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
  "name": "Delete the specific record in vital signs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VitalSign"
    },
    {
      "name": "@Delete"
    },
    {
      "name": "@DeleteVitalSign"
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
  "name": "I search tahmeed, tahmeed using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Clinical tab",
  "keyword": "And "
});
formatter.match({
  "location": "ProblemListsteps.I_am_on_PWB_CLinical_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Vital Sign\ttab",
  "keyword": "* "
});
formatter.match({
  "location": "Vitalsignsteps.I_click_on_vital_sign_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 98 to delete record in vital signs",
  "keyword": "* "
});
formatter.match({
  "location": "Vitalsignsteps.I_click_on_delete_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see message of success for deleting record",
  "keyword": "Then "
});
formatter.match({
  "location": "ProblemListsteps.saved_alerts_shoud_be_popup(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the deleted vital signs not present on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Vitalsignsteps.very_deleted_data_should_benot_visible_on_the_UI()"
});
formatter.result({
  "status": "passed"
});
});