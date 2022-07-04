---
weight: 5000
linkTitle: "Emphasis"
title: "Markdown: Emphasis"
description: "How to emphasize text?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Emphasis
---

## Italic text

To define an italic text, **include it between 1 star (\*) or 1 underscore (\_)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm in *italic*
```
{{< /md >}}|{{< plaintext >}}
I'm in <em>italic</em>
{{< /plaintext >}}|{{< md >}}
I'm in *italic*
{{< /md >}}|

{{< alert type="warning" >}}
Warning, for compatibility reasons between the several markdowns syntaxes, it is recommended to **use the stars syntax** rather than the underscores one.
{{< /alert >}}

## Bold text

To define a bold text, **include it between 2 stars (\*) or 2 underscores (\_)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm in **bold**
```
{{< /md >}}|{{< plaintext >}}
I'm in <strong>bold</strong>
{{< /plaintext >}}|{{< md >}}
I'm in **bold**
{{< /md >}}|

{{< alert type="warning" >}}
Warning, for compatibility reasons between the several markdowns syntaxes, it is recommended to **use the stars syntax** rather than the underscores one.
{{< /alert >}}

## Italic and bold text

To define an italic and bold text, **include it between 3 star (\*) or 3 underscore (\_)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm in ***italic and bold***
```
{{< /md >}}|{{< plaintext >}}
I'm in <em><strong>italic and bold</strong></em>
{{< /plaintext >}}|{{< md >}}
I'm in ***italic and bold***
{{< /md >}}|

{{< alert type="warning" >}}
Warning, for compatibility reasons between the several markdowns syntaxes, it is recommended to **use the stars syntax** rather than the underscores one.
{{< /alert >}}

## Strikethrough text

To define a strikethrough text, **include it between 2 tilde (\~)**.

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
I'm ~~strikethrough~~
```
{{< /md >}}|{{< plaintext >}}
I'm <del>strikethrough</del>
{{< /plaintext >}}|{{< md >}}
I'm ~~strikethrough~~
{{< /md >}}|
