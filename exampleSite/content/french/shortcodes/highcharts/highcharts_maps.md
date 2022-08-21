---
title: "{{< highcharts-maps >}}"
description: "Shortcode {{< highcharts-maps >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

TODO
The **highcharts-maps** shortcode is used.



# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the OpenAPI documentation.  
*NB: The source can be either a local path or an URL.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* highcharts-maps source="/highcharts/example.yaml" */*/>}}
```
{{< /md >}}|{{< highcharts-maps source="/highcharts/example.yaml" >}}|
|{{< md >}}
```
{{</*/* highcharts-maps source="https://petstore.swagger.io/v2/swagger.json" */*/>}}
```
{{< /md >}}|{{< highcharts-maps source="https://petstore.swagger.io/v2/swagger.json" >}}|
