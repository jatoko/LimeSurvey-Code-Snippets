# LimeSurvey-Code-Snippets
This repository provides a set of useful code snippets to customize the surveys created with [LimeSurvey](https://www.limesurvey.org). This collection intends to complement LimeSurvey's "[workarounds' wiki page](https://manual.limesurvey.org/Workarounds:_Manipulating_a_survey_at_runtime_using_Javascript)".

## Code Snippets
- ### [Dropdown List with Autocomplete](./dropdown-autocomplete)
    Converts an existing question of type **List (Dropdown)** to a text input field with **dropdown** and **autocomplete** functionality.

    ![Autocomplete with surveycodings](./dropdown-autocomplete/surveycodings-integration/autocomplete_surveycodings.png)



- ### [On Scroll Fixed Question Header](./on-scroll-fixed-question)

    Fixes the question header when scrolling down a long answer section of question type **Array** in order to continuously display the question to the participant.

    ![Dropdown with autocomplete](./on-scroll-fixed-question/on_scroll_fixed.gif)


- ### [5-point choice to endpoint named scale](./5-point-choice-endpoint-named-scale)

    Adds endpoint names to a 5 point choice scale.
    
    ![Endpoint-named scale](./5-point-choice-endpoint-named-scale/endpoint_named_scale.png)

## How to use it
1. Enable javascript via admin panel first by disabling XSS-check for HTML. This **does not** influence XSS protection from respondents, but only from LimeSurvey users.
2. Edit a question and click "Source":
    ![Edit Question](edit_question_1.png)
3. Insert 
   ```<script> </script>``` and paste javascript from js-file.
    ![Endpoint-named scale](edit_question_2.png) 