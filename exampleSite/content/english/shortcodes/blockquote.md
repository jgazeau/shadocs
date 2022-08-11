---
title: "{{< blockquote >}}"
description: "Shortcode {{< blockquote >}}."
categories: ["Shortcode"]
tags: ["Content management"]
---

# Description
---

The **blockquote** shortcode allows to write a quote.

# Parameters
---

| Name | Type(named/positional) | Description |
| ---- | ---------------------- | ----------- |
| source | named |{{< md >}}
Source of the quote.  
*NB: If not specified, the rendering is similar to a [standard markdown quote](../../markdown/blockquote/).*
{{< /md >}}|

# Examples
---

| Markdown | Rendering |
| -------- | --------- |
|{{< md >}}
```
{{</*/* blockquote */*/>}}
I'm a quote without source
{{</*/* /blockquote */*/>}}
```
{{< /md >}}|{{< blockquote >}}
I'm a quote without source
{{< /blockquote >}}|
|{{< md >}}
```
{{</*/* blockquote
    source="Shadocs"
*/*/>}}
I'm a quote with source
{{</*/* /blockquote */*/>}}
```
{{< /md >}}|{{< blockquote
    source="Shadocs"
>}}
I'm a quote with source
{{< /blockquote >}}|
