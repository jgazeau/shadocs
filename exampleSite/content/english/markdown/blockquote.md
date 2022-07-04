---
weight: 6000
linkTitle: "Blockquote"
title: "Markdown: Blockquote"
description: "How to define a blockquote?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Blockquote
---

## Simple blockquote

To define a blockquote, **add a greater-than character (>) at line start, followed by a space**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
> I'm a blockquote.
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>I'm a blockquote.</p>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> I'm a blockquote.
{{< /md >}}|

## Blockquote over several paragraphs

To define a blockquote over several paragraphs, **add a greater-than character (>) at line start, even empty** (always followed by a space for lines containing text).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
> I'm a blockquote.
>
> And here is the rest!
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>I'm a blockquote.</p>
  <p>And here is the rest!</p>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> I'm a blockquote.
>
> And here is the rest!
{{< /md >}}|

## Nested blockquotes

To define nested blockquotes, **add an extra greater-than character (>) at the beginning of each line to match the level of the blockquote** (always followed by a space for lines containing text).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
> I'm a blockquote.
>
>> And I'm a blockquote(ception)!
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>I'm a blockquote.</p>
  <blockquote>
    <p>And I'm a blockquote(ception)!</p>
  </blockquote>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> I'm a blockquote.
>
>> And I'm a blockquote(ception)!
{{< /md >}}|

## Blockquote with other elements

To define a blockquote containing other markdown elements, normally write markdown and **take into account an offset of 2 characters at line start** corresponding to the blockquote (**the greater-than character (>) + 1 space for lines containing text**).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
> ### I'm the title of the blockquote.
>
> > And I'm a **bold** blockquote(ception)!
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <h3>I'm the title of the blockquote.</h3>
  <blockquote>
    <p>And I'm a <strong>bold</strong> blockquote(ception)!</p>
  </blockquote>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> ### I'm the title of the blockquote.
>
> > And I'm a **bold** blockquote(ception)!
{{< /md >}}|

{{< alert type="warning" >}}
Warning, some markdown notations may not work in blockquotes.
{{< /alert >}}
