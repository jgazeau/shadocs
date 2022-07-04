---
weight: 4000
linkTitle: "Saut de ligne"
title: "Markdown: Saut de ligne"
description: "Comment définir un saut de ligne ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Saut de ligne
---

## Syntaxe classique

Pour définir un saut de ligne, il faut **finir une ligne de texte par 2 espaces** et suivre par une autre ligne de texte.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis un paragraphe,  
et moi je suis avec toi !
```
{{< /md >}}|{{< plaintext >}}
<p>Je suis un paragraphe,<br>
et moi je suis avec toi !</p>
{{< /plaintext >}}|{{< md >}}
Je suis un paragraphe,  
et moi je suis avec toi !
{{< /md >}}|

## Syntaxe alternative

Pour définir un saut de ligne il est possible d'utiliser une syntaxe alternative:

* **Ajouter un antislash** (**\\**) a la fin d'une ligne de texte.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis un paragraphe,\
et moi je suis avec toi !
```
{{< /md >}}|{{< plaintext >}}
<p>Je suis un paragraphe,<br>
et moi je suis avec toi !</p>
{{< /plaintext >}}|{{< md >}}
Je suis un paragraphe,\
et moi je suis avec toi !
{{< /md >}}|

{{< alert type="warning" >}}
Attention, cette syntaxe est **supportée dans CommonMark** mais il est recommandé d'**utiliser la syntaxe avec 2 espaces**, plus répandue et supportée plus largement par les convertisseurs markdown.
{{< /alert >}}
