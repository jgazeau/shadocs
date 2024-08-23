---
title: "{{< jsoneditor >}}"
description: "Shortcode {{< jsoneditor >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **jsoneditor** shortcode allows to display a form based on a JSON Schema. This form can then be used to export (copy to clipboard/download as a file) the resulting JSON.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the JSON Schema.  
*NB: The source can be either a local path or an URL.*
{{< /md >}}|
| postAnalyzeFunction | named |{{< md >}}
Name of the global Javascript method to run specific and additionnal validation right after the Jsoneditor standard validation.  
* **input**: JSON Schema, JSON generated from JSON Schema by Jsoneditor
* **output**: Array of ***errors*** (Empty array if no errors), with ***errors*** of type:  
  ```
  {
    path: [FIELD_ERROR_PATH],
    message: [ERROR_MESSAGE]
  }
  ```
{{< /md >}}|
| postProcessFunction | named |{{< md >}}
Name of the global Javascript method to run specific and additionnal process right after the Jsoneditor standard JSON generation.  
* **input**: JSON Schema, JSON generated from JSON Schema by Jsoneditor
* **output**: JSON to export
{{< /md >}}|
| filenameToDownloadFunction | named |{{< md >}}
Name of the global Javascript method to define filename to download.  
* **input**: JSON Schema, JSON generated from JSON Schema by Jsoneditor
* **output**: Filename to download

*NB: By default filename will be equal to **schema.title** or fallback to the **ID of the jsoneditor HTML container**.*
{{< /md >}}|

{{< snippet
    file="assets/js/jsoneditor.js"
    caption="jsoneditor.js"
    codelang="js"
/>}}

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  postAnalyzeFunction="examplePostAnalyzeFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postAnalyzeFunction="examplePostAnalyzeFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  postProcessFunction="examplePostProcessFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postProcessFunction="examplePostProcessFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor
  source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json"
  filenameToDownloadFunction="exampleFilenameToDownloadFunction"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" filenameToDownloadFunction="exampleFilenameToDownloadFunction" >}}|
|{{< md >}}
```
{{</*/* jsoneditor source="jsoneditor/example.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="jsoneditor/example.json" >}}|
