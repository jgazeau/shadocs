---
weight: 4000
linkTitle: "Line break"
title: "Markdown: Line break"
description: "How to define a line break?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Line break
---

## Classic syntax

To define a line break, **add 2 spaces at the end of a text line** and follow it with another text line.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm a paragraph,  
and I'm with you!
```
{{< /md >}}|{{< plaintext >}}
<p>I'm a paragraph,<br>
and I'm with you!</p>
{{< /plaintext >}}|{{< md >}}
I'm a paragraph,  
and I'm with you!
{{< /md >}}|

## Alternative syntax

To define a line break, it is possible to use an alternative syntax:

* **Add a backslash** (**\\**) at the end of a text line.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm a paragraph,\
and I'm with you!
```
{{< /md >}}|{{< plaintext >}}
<p>I'm a paragraph,<br>
and I'm with you!</p>
{{< /plaintext >}}|{{< md >}}
I'm a paragraph,\
and I'm with you!
{{< /md >}}|

{{< alert type="warning" >}}
Warning, this syntax is **supported in CommonMark** but it is recommended to **use the 2 spaces syntax**, more common and more widely supported by markdown converters.
{{< /alert >}}
