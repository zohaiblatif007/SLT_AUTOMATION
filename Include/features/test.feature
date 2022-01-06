@Discharge

Feature: Add Edit and Delete in Allergies

Background: 
  Given I navigate to patient grid
    
  @Add
  @AddMedication
  @Regression
  @Sanity
Scenario Outline: Add in medication with all fields

  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Medication	tab
	 When I click on medication Add button
    And I enter <Source_Type> in medication source type field
    *   I enter <Name> in medication name field
    *   I enter <Frequency> in medication frequency field
    *   I enter <Route> in medication route field
		*   I enter <Start_Date> in medication start date field 
	  *   I enter <Prescribed_By> in medication prescribed by type field
	  *   I enter <CPOE> in medication cpoe field
	  *   I enter <eSent> in medication esent field
	  *   I enter <Drug_Formulacy> in medication drug formulacy status field
	  *   I enter <Directions> in medication directions field
	  *   I click on medication Save All button
	 Then I should see message of success: <dynamicid> for following <message>
		And I should see the newly added <Source_Type> and <Name> and <Frequency> and <Route> and <Start_Date> and <CPOE> and <eSent> and <Drug_Formulacy> and <Directions> medication on grid
		

 Examples:
     |    Patient      |Source_Type|                               Name                              |  Frequency  |      Route     |Start_Date|Prescribed_By|CPOE|eSent|Drug_Formulacy|        Directions         |dynamicid|message|
     |tahmeed, tahmeed |    MMSL   |Humulin R U-500 KwikPen 500unit/ml Solution for Injection::100034|3 times a day|Auricular (otic)| 12102020 |Bpci, Provider| Yes| Yes |     Yes      |As per the doctor recommend|Changes saved successfully|successChanges saved successfully.Hide|
  