---
title: "{{< alert >}}"
description: "Shortcode {{< alert >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **alert** shortcode is used to highlight text using different styles.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| type| named |{{< md >}}
Styles available:
* info
* success
* warning
* error

*NB: If not specified, the default style is **info**.*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* alert */*/>}}
I'm a **info** type alert by default
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert >}}
I'm a **info** type alert by default
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="info"
*/*/>}}
I'm a **info** type alert
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="info"
>}}
I'm a **info** type alert
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="success"
*/*/>}}
I'm a **success** type alert
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="success"
>}}
I'm a **success** type alert
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="warning"
*/*/>}}
I'm a **warning** type alert
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="warning"
>}}
I'm a **warning** type alert
{{< /alert >}}|
|{{< md >}}
```
{{</*/* alert
    type="error"
*/*/>}}
I'm a **error** type alert
{{</*/* /alert */*/>}}
```
{{< /md >}}|{{< alert
    type="error"
>}}
I'm a **error** type alert
{{< /alert >}}|
