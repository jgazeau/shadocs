---
weight: 13000
linkTitle: "Emoji"
title: "Markdown: Emoji"
description: "Comment définir un emoji ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Emoji
---

## Syntaxe classique

Pour définir un emoji, il faut **utiliser son pseudo-code associé** ([Exemple de liste de pseudo-code pour emoji](https://www.webfx.com/tools/emoji-cheat-sheet/)).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
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
Attention, pour pouvoir utiliser les pseudo-code emoji il est nécessaire que l'option Hugo [enableEmoji](https://gohugo.io/getting-started/configuration/#all-configuration-settings) soit activée.  
De plus, certains pseudo-code peuvent ne pas être pris en compte par le convertisseur markdown.
{{< /alert >}}

## Syntaxe alternative

Pour définir un emoji il est possible d'utiliser une syntaxe alternative:

* **copier l'emoji en tant que texte** ([Exemple de liste d'emoji à copier](https://emojipedia.org/)).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
🤘
```
{{< /md >}}|{{< plaintext >}}
<p>🤘</p>
{{< /plaintext >}}|{{< md >}}
🤘
{{< /md >}}|
