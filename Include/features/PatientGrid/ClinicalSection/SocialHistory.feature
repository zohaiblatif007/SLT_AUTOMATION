@SocialHistory
Feature: Add Edit and Delete in Social History

Background: 
  Given I navigate to patient grid
    
    @Add
    @AddSocialHistory
    @Regression
    @Sanity
    Scenario Outline: Add in social history with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Social History tab
	 When I click on social history Add button
    And I enter <Type> in social history type field
    *   I enter <Observation> in social history observation field
    *   I enter <Start_Date> in social history start date field
    *   I enter <End_Date> in social history end date field
    *   I click on social history Update button
	 Then I should see message of success for <module> record
		And I should see the newly added <Type> and <Observation> and <Start_Date> and <End_Date> social history on grid
   
   Examples:
   |   Patient     |        Type            |   Observation   |Start_Date|End_Date|module|
   |tahmeed, tahmeed |Tobacco use and exposure|under observation| 01012021 |01122021|adding|

   @Edit
   @EditSocialHistory
   @Regression
   @Sanity
    Scenario Outline: Edit in social history with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Social History tab
	 When I click on social history Edit button
    And I enter <Type> in social history type field
    *   I enter <Observation> in social history observation field
    *   I enter <Start_Date> in social history start date field
    *   I enter <End_Date> in social history end date field
    *   I click on social history Update button
	  Then I should see message of success for <module> record
		 And I should see the newly added <Type> and <Observation> and <Start_Date> and <End_Date> social history on grid
   
   
   Examples:
   |   Patient    |    Type      |     Observation    |Start_Date|End_Date|module|
   |tahmeed, tahmeed |Smoking status|Edit the observation| 03082021 |03172021|editing|
    
   @Delete
   @DeleteSocialHistory
   @Regression
   @Sanity
    Scenario Outline: Delete the specific record in social history
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Social History tab
		*   I enter <Type> to delete record in social history 
	 Then I should see message of success for <module> record
	  And I should see the deleted social history not present on grid
   
   Examples:
   |   Patient    |    Type      |module| 
   |tahmeed, tahmeed |Smoking status|deleting|
    