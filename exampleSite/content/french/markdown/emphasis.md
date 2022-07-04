---
weight: 5000
linkTitle: "L'accentuation"
title: "Markdown: L'accentuation"
description: "Comment accentuer du texte ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# L'accentuation
---

## Texte en italique

Pour définir un texte en italique, il faut **l'inclure entre 1 étoile (\*) ou 1 traits de soulignement (\_)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis en *italique*
```
{{< /md >}}|{{< plaintext >}}
Je suis en <em>italique</em>
{{< /plaintext >}}|{{< md >}}
Je suis en *italique*
{{< /md >}}|

{{< alert type="warning" >}}
Attention, pour des raisons de compatibilité entre les différentes syntaxes markdown il est recommandé d'**utiliser la syntaxe avec des étoiles** plutôt que celle avec les traits de soulignement.
{{< /alert >}}

## Texte en gras

Pour définir un texte en gras, il faut **l'inclure entre 2 étoiles (\*) ou 2 traits de soulignement (\_)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis en **gras**
```
{{< /md >}}|{{< plaintext >}}
Je suis en <strong>gras</strong>
{{< /plaintext >}}|{{< md >}}
Je suis en **gras**
{{< /md >}}|

{{< alert type="warning" >}}
Attention, pour des raisons de compatibilité entre les différentes syntaxes markdown il est recommandé d'**utiliser la syntaxe avec des étoiles** plutôt que celle avec les traits de soulignement.
{{< /alert >}}

## Texte en italique et en gras

Pour définir un texte en italique et en gras, il faut **l'inclure entre 3 étoile (\*) ou 3 traits de soulignement (\_)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis en ***italique et en gras***
```
{{< /md >}}|{{< plaintext >}}
Je suis en <em><strong>italique et en gras</strong></em>
{{< /plaintext >}}|{{< md >}}
Je suis en ***italique et en gras***
{{< /md >}}|

{{< alert type="warning" >}}
Attention, pour des raisons de compatibilité entre les différentes syntaxes markdown il est recommandé d'**utiliser la syntaxe avec des étoiles** plutôt que celle avec les traits de soulignement.
{{< /alert >}}

## Texte barré

Pour définir un texte barré, il faut **l'inclure entre 2 tilde (\~)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Je suis ~~barré~~
```
{{< /md >}}|{{< plaintext >}}
Je suis <del>barré</del>
{{< /plaintext >}}|{{< md >}}
Je suis ~~barré~~
{{< /md >}}|
