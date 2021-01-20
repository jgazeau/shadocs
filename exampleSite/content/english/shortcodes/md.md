---
title: "{{< md >}}"
description: "Shortcode {{< md >}}."
categories: ["Shortcode"]
---

# Description
---

The **md** shortcode allows to force the conversion of a block of text written in markdown.  
This shortcode is particularly useful to add content written in complex markdown syntaxes (lists, code snippets, ...), in a table, or in case of nested shortcodes.
{{< alert type="warning" >}}
Auto-nesting of this shortcode is not possible.
{{< /alert >}}

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
{{</* md */>}}
I'm a text written in **markdown**
{{</* /md */>}}
```
{{< /md >}}|{{< md >}}
I'm a text written in **markdown**
{{< /md >}}|
|{{< md >}}
~~~
| Markdown | Rendering |
| -------- | --------- |
|{{</* md */>}}
```
{{</* md */>}}
I'm a text written in **markdown**
{{</* /md */>}}
```
{{</* /md */>}}|{{</* md */>}}
I'm a text written in **markdown**
{{</* /md */>}}
~~~
{{< /md >}}| Table of examples without the current row (***Rendering not available because auto-nesting of the md shortcode***) |
