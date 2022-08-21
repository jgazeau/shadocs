---
title: "{{< highcharts >}}"
description: "Shortcode {{< highcharts >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

TODO
The **highcharts** shortcode is used.



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
{{</*/* highcharts source="/highcharts/example.json" */*/>}}
```
{{< /md >}}|{{< highcharts source="/highcharts/example.json" >}}|
|{{< md >}}
```
{{</*/* highcharts source="https://petstore.swagger.io/v2/swagger.json" */*/>}}
```
{{< /md >}}|{{< highcharts source="https://petstore.swagger.io/v2/swagger.json" >}}|
