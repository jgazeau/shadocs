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
| postProcessFunction | named |{{< md >}}
Name of the global Javascript method to be executed after validating the JSON schema and allowing the generated JSON to be processed before exporting it.  
* **input**: JSON generated from JSON Schema
* **output**: JSON to export
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
  postProcessFunction="examplePostProcessJson"
*/*/>}}
```
{{< /md >}}|{{< jsoneditor source="https://raw.githubusercontent.com/json-schema-org/website/main/public/data/getting-started-examples/schemas/default.json" postProcessFunction="examplePostProcessJson" >}}|
|{{< md >}}
```
{{</*/* jsoneditor source="jsoneditor/example.json" */*/>}}
```
{{< /md >}}|{{< jsoneditor source="jsoneditor/example.json" >}}|
