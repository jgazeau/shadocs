---
weight: 1000
linkTitle: "Titre"
title: "Markdown: Titre"
description: "Comment définir un titre ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Titre
---

## Syntaxe classique

Pour définir un titre, il faut **ajouter un nombre de croisillon (\#) correspondant au niveau du titre souhaité (de 1 à 6) en début de ligne, suivi d'un espace**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
# Titre de niveau 1
```
{{< /md >}}|{{< plaintext >}}
<h1>Titre de niveau 1</h1>
{{< /plaintext >}}|{{< md >}}
# Titre de niveau 1
{{< /md >}}|
|{{< md >}}
```
## Titre de niveau 2
```
{{< /md >}}|{{< plaintext >}}
<h2>Titre de niveau 2</h2>
{{< /plaintext >}}|{{< md >}}
## Titre de niveau 2
{{< /md >}}|
|{{< md >}}
```
### Titre de niveau 3
```
{{< /md >}}|{{< plaintext >}}
<h3>Titre de niveau 3</h3>
{{< /plaintext >}}|{{< md >}}
### Titre de niveau 3
{{< /md >}}|
|{{< md >}}
```
#### Titre de niveau 4
```
{{< /md >}}|{{< plaintext >}}
<h4>Titre de niveau 4</h4>
{{< /plaintext >}}|{{< md >}}
#### Titre de niveau 4
{{< /md >}}|
|{{< md >}}
```
##### Titre de niveau 5
```
{{< /md >}}|{{< plaintext >}}
<h5>Titre de niveau 5</h5>
{{< /plaintext >}}|{{< md >}}
##### Titre de niveau 5
{{< /md >}}|
|{{< md >}}
```
###### Titre de niveau 6
```
{{< /md >}}|{{< plaintext >}}
<h6>Titre de niveau 6</h6>
{{< /plaintext >}}|{{< md >}}
###### Titre de niveau 6
{{< /md >}}|

## Syntaxe alternative

Pour les **niveaux 1 et 2 uniquement**, il est possible d'utiliser une syntaxe alternative:

* **Répéter les caractères de 1 à n fois** sur la ligne suivant le texte du titre ((**=**) pour le niveau 1 et (**-**) pour le niveau 2).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Titre de niveau 1
=================
```
{{< /md >}}|{{< plaintext >}}
<h1>Titre de niveau 1</h1>
{{< /plaintext >}}|{{< md >}}
Titre de niveau 1
=================
{{< /md >}}|
|{{< md >}}
```
Titre de niveau 2
-----------------
```
{{< /md >}}|{{< plaintext >}}
<h2>Titre de niveau 2</h2>
{{< /plaintext >}}|{{< md >}}
Titre de niveau 2
-----------------
{{< /md >}}|

## L'ID d'un titre

Pour définir l'ID d'un titre, il faut **respecter la syntaxe suivante**:

* **# Texte_du_titre {#ID_du_titre}**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
# Titre de niveau 1 {#titre_id}
```
{{< /md >}}|{{< plaintext >}}
<h1 id="titre_id">Titre de niveau 1</h1>
{{< /plaintext >}}|{{< md >}}
# Titre de niveau 1 {#titre_id}
{{< /md >}}|

{{< alert type="info" >}}
Par défaut dans le thème, l'ID d'un titre correspond à la variable [Anchor](https://gohugo.io/getting-started/configuration-markup#render-hook-templates).
{{< /alert >}}
