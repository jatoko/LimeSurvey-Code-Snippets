# LimeSurvey List (Dropdown) Autocomplete
This code snippet converts a LimeSurvey List-Object (Dropdown) into a dropdown with autocomplete functionality.

![Dropdown with autocomplete](dropdown_to_autocomplete.png)

## Requirements
1. LimeSurvey instance must support **JavaScript** in the question editing menu.
2. Survey must include [JQuery UI](https://code.jquery.com/ui/)

## Usage
1. Edit a question where question type is "List (dropdown)".
2. In the editor window click "Source".
3. Add JavaScript code snippet from [autocomplete.js](autocomplete.js) to the question text:
   ```HTML
        <script>
                Code Here
        </script>
    ```
