---
weight: 4030
title: "{{< collapsible >}}"
description: "Shortcode {{< collapsible >}}."
categories: ["Shortcode"]
---

# Description
---

The **collapsible** shortcode allows to write a collapsible block of text.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| title | named |{{< md >}}
Text block title.  
*NB: If not specified, the title is a default text defined by the theme.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</* collapsible */>}}
I'm hidden
{{</* /collapsible */>}}
```
{{< /md >}}|{{< collapsible >}}
I'm hidden
{{< /collapsible >}}|
|{{< md >}}
```
{{</* collapsible
    title="Open sesame!"
*/>}}
I'm hidden
{{</* /collapsible */>}}
```
{{< /md >}}|{{< collapsible
    title="Open sesame!"
>}}
I'm hidden
{{< /collapsible >}}|
