Feature: COMMON - Ornikar component
  As a user I navigate in Homepage

  @Header @Desktop
  Scenario: Check Header Ornikar
    Given I navigate on Ornikar HomePage
    Then I check the header
    And I accept all cookies