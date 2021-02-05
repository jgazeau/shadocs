---
title: "{{< parameter >}}"
description: "Shortcode {{< parameter >}}."
categories: ["Shortcode"]
---

# Description
---

The **parameter** shortcode allows to display a site parameter according to its type.

| Type | Display |
| ---- | ------- |
| Map (Key/Value) | Table |
| String list | List |
| String | Text |

The parameter to display can be set using two different ways:
* Standard website settings ([.Site.Params](https://gohugo.io/variables/site/#the-siteparams-variable) variables), using **the positional parameter** of the shortcode.
* [Website specific data file](https://gohugo.io/templates/data-templates/), using **the named parameter** of the shortcode.

{{< alert
    type="warning"
>}}
The parameter to display is read as a markdown and converted accordingly.
{{< /alert >}}

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| | positional | Standard parameter path to display. |
| path | named |{{< md >}}
Specific parameter path to display.  
*NB: The file parameter takes precedence over the i18n parameter.*
{{< /md >}}|
| i18n | named | i18n key parameter to display. |

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</* parameter "unknown" /*/>}}
```
{{< /md >}}|{{< parameter "unknown" />}}|
|{{< md >}}
```
{{</* parameter "logo" /*/>}}
```
{{< /md >}}|{{< parameter "logo" />}}|
|{{< md >}}
```
{{</* parameter "faviconmd" /*/>}}
```
{{< /md >}}|{{< parameter "faviconmd" />}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleArray"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="dir.exampleTemplate.exampleMap.exampleString"
/>}}|
|{{< md >}}
```
{{</* parameter
    path="themeParams.navbar.shortcuts.1_info"
/*/>}}
```
{{< /md >}}|{{< parameter
    path="themeParams.navbar.shortcuts.1_info"
/>}}|
|{{< md >}}
```
{{</* parameter
    i18n="homepage_title"
/*/>}}
```
{{< /md >}}|{{< parameter
    i18n="homepage_title"
/>}}|
