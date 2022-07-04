---
weight: 8000
linkTitle: "Code snippet"
title: "Markdown: Code snippet"
description: "How to define a code snippet?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Code snippet
---

## Code fragment

To define a code fragment, **add a backtick (\`) before and after the code to highlight**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
Enter `hugo version` to get the Hugo version
```
{{< /md >}}|{{< plaintext >}}
<p>Enter <code>hugo version</code> to get the Hugo version</p>
{{< /plaintext >}}|{{< md >}}
Enter `hugo version` to get the Hugo version
{{< /md >}}|

## Nested code fragment

To define a nested code fragment, **add two backticks (\`) before and after the global text that will contain the nested code fragment**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
``Enter `hugo version` to get the Hugo version``
```
{{< /md >}}|{{< plaintext >}}
<p><code>Enter `hugo version` to get the Hugo version</code></p>
{{< /plaintext >}}|{{< md >}}
``Enter `hugo version` to get the Hugo version``
{{< /md >}}|

## Code block

To define a code block over several lines, **add 4 spaces to each line start of code**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
    <html>
      <head>
        <title>Hello world</title>
      </head>
    </html>
```
{{< /md >}}|{{< plaintext >}}
<pre>
  <code>
    <html>
      <head>
        <title>Hello world</title>
      </head>
    </html>
  </code>
</pre>
{{< /plaintext >}}|{{< md >}}
    <html>
      <head>
        <title>Hello world</title>
      </head>
    </html>
{{< /md >}}|

## Fenced code block

### Classic syntax

To define a fenced code block over several lines, **add 3 backticks (\`) at the start of two new lines, before and after the code to highlight**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
`````````
```
<html>
  <head>
    <title>Hello world</title>
  </head>
</html>
```
`````````
{{< /md >}}|{{< plaintext >}}
<pre>
  <code>
    <html>
      <head>
        <title>Hello world</title>
      </head>
    </html>
  </code>
</pre>
{{< /plaintext >}}|{{< md >}}
```
<html>
  <head>
    <title>Hello world</title>
  </head>
</html>
```
{{< /md >}}|

### Classic syntax with highlighting

To define a fenced code block with code highlighting based on the language used, **add the language code after the 3 backticks (\`) to the first line**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
`````````
```html {linenos=table,hl_lines=[1,"3-4"],linenostart=10}
<html>
  <head>
    <title>Hello world</title>
    <meta charset="UTF-8">
  </head>
</html>
```
`````````
{{< /md >}}|{{< plaintext >}}
[...]
<pre>
  <code>
    <html>
      <head>
        <title>Hello world</title>
        <meta charset="UTF-8">
      </head>
    </html>
  </code>
</pre>
[...]
{{< /plaintext >}}|{{< md >}}
```html {linenos=table,hl_lines=[1,"3-4"],linenostart=10}
<html>
  <head>
    <title>Hello world</title>
    <meta charset="UTF-8">
  </head>
</html>
```
{{< /md >}}|

{{< alert type="info" >}}
It is possible to use the [highlighting Hugo advanced functions](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences) in order to get a rendering that suit your needs.
{{< /alert >}}
