---
weight: 11000
linkTitle: "Tableau"
title: "Markdown: Tableau"
description: "Comment définir un tableau ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Tableau
---

## Syntaxe classique

Pour définir un tableau, il faut **respecter les règles suivantes**:

* **Séparer les colonnes par des barres verticales (\|)**
* **Insérer des barres verticales (\|) aux deux extrémités du tableau**
* **Séparer le titre d'une colonne avec son contenu, par une ligne de démarcation contenant au minimum 3 caractères traits d'union (-)**

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
| Variable | Valeur | Description |
| -------- | ------ | ----------- |
| A        | 1      | Entier      |
| B        | 2      |             |
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Valeur</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>1</td>
      <td>Entier</td>
    </tr>
    <tr>
      <td>B</td>
      <td>2</td>
      <td></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
| Variable | Valeur | Description |
| -------- | ------ | ----------- |
| A        | 1      | Entier      |
| B        | 2      |             |
{{< /md >}}|
|{{< md >}}
```
|Variable|Valeur|Description|
|---|---|---|
|A|1|Entier|
|B|2||
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Valeur</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>1</td>
      <td>Entier</td>
    </tr>
    <tr>
      <td>B</td>
      <td>2</td>
      <td></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
|Variable|Valeur|Description|
|---|---|---|
|A|1|Entier|
|B|2||
{{< /md >}}|

{{< alert type="info" >}}
Pour créer plus facilement des tableaux, il est possible d'utiliser des générateurs de tableaux en ligne tel que [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) afin d'obtenir directement le code markdown associé à un tableau.
{{< /alert >}}
{{< alert type="warning" >}}
Attention, il est possible de formater le texte d'un tableau en utilisant *l'accentuation*, *le lien* ou *le fragment de code*. Néanmoins il n'est pas possible d'utiliser des syntaxes plus complexes telles que *le bloc de code*, *le titre*, *la liste*, *l'image* ou *la séparation horizontale*.
{{< /alert >}}

## Alignement

Pour aligner le contenu d'une colonne, il faut **ajouter un caractère double point (:) au traits d'union de la ligne de démarcation du côté souhaité de l'alignement (des deux côtés pour centrer le contenu)**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
| Variable | Valeur | Description |
| :------- | :----: | ----------: |
| A        | 1      | Entier      |
| B        | 2      |             |
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th align="left">Variable</th>
      <th align="center">Valeur</th>
      <th align="right">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">A</td>
      <td align="center">1</td>
      <td align="right">Entier</td>
    </tr>
    <tr>
      <td align="left">B</td>
      <td align="center">2</td>
      <td align="right"></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
| Variable | Valeur | Description |
| :------- | :----: | ----------: |
| A        | 1      | Entier      |
| B        | 2      |             |
{{< /md >}}|
|{{< md >}}
```
|Variable|Valeur|Description|
|:---|:---:|---:|
|A|1|Entier|
|B|2||
```
{{< /md >}}|{{< plaintext >}}
<table>
  <thead>
    <tr>
      <th align="left">Variable</th>
      <th align="center">Valeur</th>
      <th align="right">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">A</td>
      <td align="center">1</td>
      <td align="right">Entier</td>
    </tr>
    <tr>
      <td align="left">B</td>
      <td align="center">2</td>
      <td align="right"></td>
    </tr>
  </tbody>
</table>
{{< /plaintext >}}|{{< md >}}
|Variable|Valeur|Description|
|:---|:---:|---:|
|A|1|Entier|
|B|2||
{{< /md >}}|
