---
title: "{{< highcharts >}}"
description: "Shortcode {{< highcharts >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **highcharts** shortcode allows to display [Highcharts](https://www.highcharts.com/) charts.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| id | named |{{< md >}}
Id of the Highcharts container.  
*NB: This Id can be used as the **renderTo** parameter of the [Highcharts.Chart class](https://api.highcharts.com/class-reference/Highcharts.Chart).*
{{< /md >}}|
| assets | named |{{< md >}}
Comma-separated list of minified [Highcharts assets](https://cdnjs.com/libraries/highcharts) to load in the page.  
*NB: All the minified assets of Highcharts are included in the theme and available in **assets/js/external/highcharts**.*
{{< /md >}}|
| source | named |{{< md >}}
Source of the Highcharts chart.  
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
  assets="js/external/highcharts/highcharts.min.js"
  source="/highcharts/example-default.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts1"
  assets="js/external/highcharts/highcharts.min.js"
  source="/highcharts/example-default.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts2"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/gantt.min.js"
  source="/highcharts/example-gantt.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts2"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/gantt.min.js"
  source="/highcharts/example-gantt.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts3"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/map.min.js"
  source="/highcharts/example-maps.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts3"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/map.min.js"
  source="/highcharts/example-maps.json"
>}}|
|{{< md >}}
```
{{</*/* highcharts
  id="highcharts4"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/stock.min.js,js/external/highcharts/highcharts-more.min.js,js/external/highcharts/modules/exporting.min.js,js/external/highcharts/modules/export-data.min.js,js/external/highcharts/modules/accessibility.min.js,js/external/highcharts/themes/adaptive.min.js"
  source="/highcharts/example-stock.json"
*/*/>}}
```
{{< /md >}}|{{< highcharts
  id="highcharts4"
  assets="js/external/highcharts/highcharts.min.js,js/external/highcharts/modules/stock.min.js,js/external/highcharts/highcharts-more.min.js,js/external/highcharts/modules/exporting.min.js,js/external/highcharts/modules/export-data.min.js,js/external/highcharts/modules/accessibility.min.js,js/external/highcharts/themes/adaptive.min.js"
  source="/highcharts/example-stock.json"
>}}|
