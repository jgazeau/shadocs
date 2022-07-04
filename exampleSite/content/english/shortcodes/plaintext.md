---
title: "{{< plaintext >}}"
description: "Shortcode {{< plaintext >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **plaintext** shortcode allows to force the display of plain text, without markdown conversion and characters escape.  
This shortcode is particularly useful for displaying HTML code, or markdown code without conversion.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* plaintext */*/>}}
<p>I'm a HTML code</p>
{{</*/* /plaintext */*/>}}
```
{{< /md >}}|{{< plaintext >}}
<p>I'm a HTML code</p>
{{< /plaintext >}}|
|{{< md >}}
```
{{</*/* plaintext */*/>}}
**I'm a markdown code**
{{</*/* /plaintext */*/>}}
```
{{< /md >}}|{{< plaintext >}}
**I'm a markdown code**
{{< /plaintext >}}|
