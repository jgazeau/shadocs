---
weight: 13000
linkTitle: "Emoji"
title: "Markdown: Emoji"
description: "How to define an emoji ?"
categories: ["Markdown"]
tags: ["Content management"]
---

# Emoji
---

## Classic syntax

To define an emoji, **use its associated pseudo-code** ([Sample emoji pseudo-code list](https://www.webfx.com/tools/emoji-cheat-sheet/)).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
:metal:
```
{{< /md >}}|{{< plaintext >}}
<p>🤘</p>
{{< /plaintext >}}|{{< md >}}
🤘
{{< /md >}}|

{{< alert type="warning" >}}
Warning, to be able to use the emoji pseudo-code it is necessary that the [enableEmoji](https://gohugo.io/getting-started/configuration/#all-configuration-settings) Hugo option has to be activated.  
In addition, some pseudo-code may not be taken into account by the markdown converter.
{{< /alert >}}

## Alternative syntax

To define an emoji it is possible to use an alternative syntax:

* **copy the emoji as text** ([Sample emoji list to copy](https://emojipedia.org/)).

| Markdown | HTML | Rendering |
| -------- | ---- | --------- |
|{{< md >}}
```
🤘
```
{{< /md >}}|{{< plaintext >}}
<p>🤘</p>
{{< /plaintext >}}|{{< md >}}
🤘
{{< /md >}}|
