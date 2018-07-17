Feature: W3schools layout differences
  As a tester
  I want to compare the phone and the desktop view of the W3schools website
  So that I am going to see the most important differences

  Scenario Outline: 1/<n>. Checking the layout and using a main function on <view> view
    Given the W3schools page is opened
    Then the green navigation bar should be present
    And the example boxes should be <visibility_example>
    And the green navigation menu items should be <placing> the hamburger menu
    And the left white menu should be <visibility_white_menu>
    And the text "THE WORLD'S LARGEST WEB DEVELOPER SITE" should be <visibility_text>
    And the green navigation menu should have the following items:
      | TUTORIALS  |
      | REFERENCES |
      | EXAMPLES   |
    And the close button at the top-right corner should be <visibility_close>

    When the "Tutorials" option is clicked
    And the very first sub-option is clicked
    Then the search icon should be displayed
    And the green home button should be displayed

  @desktop
    Examples:
      | n | view    | visibility_example | placing    | visibility_white_menu | visibility_text | visibility_close |
      | a | desktop | displayed          | not within | displayed             | displayed       | hidden           |

  @phone
    Examples:
      | n | view  | visibility_example | placing | visibility_white_menu | visibility_text | visibility_close |
      | b | phone | hidden             | within  | hidden                | hidden          | displayed        |