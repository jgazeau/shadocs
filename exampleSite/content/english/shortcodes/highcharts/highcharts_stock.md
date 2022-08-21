---
title: "{{< highcharts-stock >}}"
description: "Shortcode {{< highcharts-stock >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

TODO
The **highcharts-stock** shortcode is used.



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
{{</*/* highcharts-stock source="/highcharts/example.yaml" */*/>}}
```
{{< /md >}}|{{< highcharts-stock source="/highcharts/example.yaml" >}}|
|{{< md >}}
```
{{</*/* highcharts-stock source="https://petstore.swagger.io/v2/swagger.json" */*/>}}
```
{{< /md >}}|{{< highcharts-stock source="https://petstore.swagger.io/v2/swagger.json" >}}|
