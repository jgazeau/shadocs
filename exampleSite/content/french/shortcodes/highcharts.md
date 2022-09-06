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
{{</*/* highcharts
  id="highcharts1"
  assets=""
  source="/highcharts/example-default.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts1"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/map.min.js"
  source="/highcharts/example-default.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts2"
  source="https://raw.githubusercontent.com/jgazeau/shadocs/main/exampleSite/highcharts/example-default.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts2"
  source="https://raw.githubusercontent.com/jgazeau/shadocs/main/exampleSite/highcharts/example-default.json"
>}}|