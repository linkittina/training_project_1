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
#    And there should be a close button at the top-right corner
#
#    When the main option <main_option> is clicked
#    And the suboption "<suboption>" is clicked
#    Then the adress bar should contain "<url>" as a part of the URL
#    And the "<title>" should appear on the page
#    And the grey navigation menu should contain "<sub_item>"

  @desktop
    Examples:
      | n | view    | visibility_example | placing    | visibility_white_menu | visibility_text | main_option | suboption    | url                         | title                          | sub_item   |
      | a | desktop | displayed          | not within | displayed             | displayed       | TUTORIALS   | Learn HTML   | /html/default.asp           | HTML5 Tutorial                 | HTML       |
      | b | desktop | displayed          | not within | displayed             | displayed       | REFERENCES  | HTML UTF-8   | /charsets/ref_html_utf8.asp | HTML Unicode (UTF-8) Reference | References |
      | c | desktop | displayed          | not within | displayed             | displayed       | EXAMPLES    | XML Examples | /xml/xml_examples.asp       | XML Examples                   | More       |

  @phone
    Examples:
      | n | view  | visibility_example | placing | visibility_white_menu | visibility_text | main_option | suboption    | url                         | title                          | sub_item   |
      | d | phone | hidden             | within  | hidden                | hidden          | TUTORIALS   | Learn HTML   | /html/default.asp           | HTML5 Tutorial                 | HTML       |
      | e | phone | hidden             | within  | hidden                | hidden          | REFERENCES  | HTML UTF-8   | /charsets/ref_html_utf8.asp | HTML Unicode (UTF-8) Reference | References |
      | f | phone | hidden             | within  | hidden                | hidden          | EXAMPLES    | XML Examples | /xml/xml_examples.asp       | XML Examples                   | More       |
