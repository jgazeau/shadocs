---
weight: 6000
linkTitle: "Citation"
title: "Markdown: Citation"
description: "Comment définir une citation ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Citation
---

## Citation Simple

Pour définir une citation, il faut **ajouter un caractère supérieur (>) en début de ligne, suivi d'un espace**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
> Je suis une citation.
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>Je suis une citation.</p>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> Je suis une citation.
{{< /md >}}|

## Citation sur plusieurs paragraphes

Pour définir une citation sur plusieurs paragraphes, il faut **ajouter un caractère supérieur (>) en début de chaque ligne, même vide** ( toujours suivi d'un espace pour les lignes contenant du texte).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
> Je suis une citation.
>
> Et voilà la suite !
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>Je suis une citation.</p>
  <p>Et voilà la suite !</p>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> Je suis une citation.
>
> Et voilà la suite !
{{< /md >}}|

## Citations imbriquées

Pour définir des citations imbriquées, il faut **ajouter un caractère supérieur (>) en plus au début de chaque ligne afin de correspondre au niveau de la citation** (toujours suivi d'un espace pour les lignes contenant du texte).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
> Je suis une citation.
>
>> Et moi une cita(ception) !
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <p>Je suis une citation.</p>
  <blockquote>
    <p>Et moi une cita(ception) !</p>
  </blockquote>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> Je suis une citation.
>
>> Et moi une cita(ception) !
{{< /md >}}|

## Citation avec d'autres éléments

Pour définir une citation contenant d'autres éléments markdown, il faut écrire le markdown normalement et **prendre en compte un décalage de 2 caractères en début de ligne** correspondant à la citation (**le caractère supérieur (>) + 1 espace pour les lignes contenant du texte**).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
> ### Je suis le titre de la citation.
>
> > Et moi une cita(ception) en **gras** !
```
{{< /md >}}|{{< plaintext >}}
<blockquote>
  <h3>Je suis le titre de la citation.</h3>
  <blockquote>
    <p>Et moi une cita(ception) en <strong>gras</strong> !</p>
  </blockquote>
</blockquote>
{{< /plaintext >}}|{{< md >}}
> ### Je suis le titre de la citation.
>
> > Et moi une cita(ception) en **gras** !
{{< /md >}}|

{{< alert type="warning" >}}
Attention, il est possible que certaines notations markdown ne fonctionnent pas dans les citations.
{{< /alert >}}
