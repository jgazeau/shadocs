---
weight: 8000
linkTitle: "Extrait de code"
title: "Markdown: Extrait de code"
description: "Comment définir un extrait de code ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Extrait de code
---

## Fragment de code

Pour définir un fragment de code, il faut **ajouter une apostrophe inversée (\`) avant et après le code à mettre en évidence**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Tapez `hugo version` pour connaitre la version Hugo
```
{{< /md >}}|{{< plaintext >}}
<p>Tapez <code>hugo version</code> pour connaitre la version Hugo</p>
{{< /plaintext >}}|{{< md >}}
Tapez `hugo version` pour connaitre la version Hugo
{{< /md >}}|

## Fragment de code imbriqué

Pour définir un fragment de code imbriqué dans un autre, il faut **ajouter deux apostrophes inversées (\`) avant et après le texte global qui contiendra le fragment de code imbriqué**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
``Tapez `hugo version` pour connaitre la version Hugo``
```
{{< /md >}}|{{< plaintext >}}
<p><code>Tapez `hugo version` pour connaitre la version Hugo</code></p>
{{< /plaintext >}}|{{< md >}}
``Tapez `hugo version` pour connaitre la version Hugo``
{{< /md >}}|

## Bloc de code

Pour définir un bloc de code sur plusieurs lignes, il faut **ajouter 4 espaces en début de chaque ligne de code**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
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

## Bloc de code cloisonné

### Syntaxe classique

Pour définir un bloc de code cloisonné sur plusieurs lignes, il faut **ajouter 3 apostrophes inversées (\`) au début de deux nouvelles lignes, avant et après le code à mettre en évidence**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
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

### Syntaxe classique avec surlignage

Pour définir un bloc de code cloisonné avec surlignage du code en fonction du langage utilisé, il faut **rajouter le code du langage après les 3 apostrophes inversées (\`) de la première ligne**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
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
Il est possible d'utiliser les fonctions avancées du [surlignage de code fourni par Hugo](https://gohugo.io/content-management/syntax-highlighting/#highlighting-in-code-fences) afin d'obtenir un rendu plus adapté à vos besoins.
{{< /alert >}}
