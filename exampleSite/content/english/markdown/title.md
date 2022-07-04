---
weight: 1000
linkTitle: "Title"
title: "Markdown: Title"
description: "How to define a title?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Title
---

## Classic title

To define a title, **add a corresponding number of crosses (\#) to the desired title level (from 1 to 6) at line start, followed by a space**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
# Level 1 title
```
{{< /md >}}|{{< plaintext >}}
<h1>Level 1 title</h1>
{{< /plaintext >}}|{{< md >}}
# Level 1 title
{{< /md >}}|
|{{< md >}}
```
## Level 2 title
```
{{< /md >}}|{{< plaintext >}}
<h2>Level 2 title</h2>
{{< /plaintext >}}|{{< md >}}
## Level 2 title
{{< /md >}}|
|{{< md >}}
```
### Level 3 title
```
{{< /md >}}|{{< plaintext >}}
<h3>Level 3 title</h3>
{{< /plaintext >}}|{{< md >}}
### Level 3 title
{{< /md >}}|
|{{< md >}}
```
#### Level 4 title
```
{{< /md >}}|{{< plaintext >}}
<h4>Level 4 title</h4>
{{< /plaintext >}}|{{< md >}}
#### Level 4 title
{{< /md >}}|
|{{< md >}}
```
##### Level 5 title
```
{{< /md >}}|{{< plaintext >}}
<h5>Level 5 title</h5>
{{< /plaintext >}}|{{< md >}}
##### Level 5 title
{{< /md >}}|
|{{< md >}}
```
###### Level 6 title
```
{{< /md >}}|{{< plaintext >}}
<h6>Level 6 title</h6>
{{< /plaintext >}}|{{< md >}}
###### Level 6 title
{{< /md >}}|

## Alternative syntax

For **levels 1 and 2 only**, it is possible to use an alternative syntax:

* **Repeat characters from 1 to n times**, on the line following the title text ((**=**) for level 1 and (**-**) for level 2).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
Level 1 title
=============
```
{{< /md >}}|{{< plaintext >}}
<h1>Level 1 title</h1>
{{< /plaintext >}}|{{< md >}}
Level 1 title
=============
{{< /md >}}|
|{{< md >}}
```
Level 2 title
-------------
```
{{< /md >}}|{{< plaintext >}}
<h2>Level 2 title</h2>
{{< /plaintext >}}|{{< md >}}
Level 2 title
-------------
{{< /md >}}|

## Title ID

To define a title ID, **use the following syntax**:

* **# Title_text {#title_ID}**

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
# Level 1 title {#title_ID}
```
{{< /md >}}|{{< plaintext >}}
<h1 id="title_ID">Level 1 title</h1>
{{< /plaintext >}}|{{< md >}}
# Level 1 title {#title_ID}
{{< /md >}}|

{{< alert type="info" >}}
By default in the theme, title ID corresponds to the [Anchor](https://gohugo.io/getting-started/configuration-markup#render-hook-templates) variable.
{{< /alert >}}
