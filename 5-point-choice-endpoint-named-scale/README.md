# 5-Point Choice Endpoint-Named Scale
This code snippet adds endpoint names to the left and right to all questions of type "5 point choice" in a group.
- Supports "No Answer"

![Endpoint-named scale](endpoint_named_scale.png)

## Requirements
1. LimeSurvey instance must support **JavaScript** in the question editing menu.

## Usage
1. Add a question where question type is "5 point choice".
2. In the editor window of Group click "Source".
3. Add JavaScript code snippet from [endpoint_named_scale.js](endpoint_named_scale.js) to the group's text:
   ```HTML
        <script>
                Code Here
        </script>
    ```