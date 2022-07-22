Feature: E2E - Demander un tarif
  As a user I navigate in homepage and I want to do a quotation for my vehicle

  @Quotation @Desktop
  Scenario: to do a quotation
    Given I navigate on Ornikar HomePage
    When I click on the button "estimer un tarif"
    And I am redirected to "mon véhicule" screen
    And I search my vehicle by plate number
    And I enter my plate number
    And I am redirected to my vehicules information
    And I click on the button "commencer"

