---
weight: 7000
linkTitle: "Liste"
title: "Markdown: Liste"
description: "Comment définir une liste ?"
categories: ["Markdown"]
tags: ["Gestion du contenu"]
---

# Liste
---

## Liste ordonnée

Pour définir une liste ordonnée, il faut **ajouter un chiffre suivi du caractère point (.) en début de ligne, suivi d'un espace** (L'ordre des chiffres n'est pas important, mais **le chiffre de la première ligne défini le point de départ de la liste**).  
Il est possible d'**imbriquer des listes en rajoutant au minimum 4 espaces en début de ligne** par rapport au niveau précédent (tous les élément d'un même niveau doivent avoir **le même nombre d'espaces en début de ligne**).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
1. Premier
2. Second
3. Troisième
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. Premier
2. Second
3. Troisième
{{< /md >}}|
|{{< md >}}
```
1. Premier
1. Second
1. Troisième
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. Premier
1. Second
1. Troisième
{{< /md >}}|
|{{< md >}}
```
1. Premier
3. Second
6. Troisième
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. Premier
3. Second
6. Troisième
{{< /md >}}|
|{{< md >}}
```
1. Premier
2. Second
    1. Second.1
    2. Second.2
3. Troisième
```
{{< /md >}}|{{< plaintext >}}
<ol>
  <li>Premier</li>
  <li>Second
    <ol>
      <li>Second.1</li>
      <li>Second.2</li>
    </ol>
  </li>
  <li>Troisième</li>
</ol>
{{< /plaintext >}}|{{< md >}}
1. Premier
2. Second
    1. Second.1
    2. Second.2
3. Troisième
{{< /md >}}|

## Liste non-ordonnée

Pour définir une liste non-ordonnée, il faut **ajouter un caractère traits d'union (-), plus (+) ou une étoile (*) en début de ligne, suivi d'un espace**.  
Il est possible d'**imbriquer des listes en rajoutant au minimum 4 espaces en début de ligne** par rapport au niveau précédent (tous les élément d'un même niveau doivent avoir **le même nombre d'espaces en début de ligne**).

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
* Premier
* Second
* Troisième
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* Premier
* Second
* Troisième
{{< /md >}}|
|{{< md >}}
```
+ Premier
+ Second
+ Troisième
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ul>
{{< /plaintext >}}|{{< md >}}
+ Premier
+ Second
+ Troisième
{{< /md >}}|
|{{< md >}}
```
- Premier
- Second
- Troisième
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>Premier</li>
  <li>Second</li>
  <li>Troisième</li>
</ul>
{{< /plaintext >}}|{{< md >}}
- Premier
- Second
- Troisième
{{< /md >}}|
|{{< md >}}
```
* Premier
* Second
    * Second.1
    * Second.2
* Troisième
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>Premier</li>
  <li>Second
    <ul>
      <li>Second.1</li>
      <li>Second.2</li>
    </ul>
  </li>
  <li>Troisième</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* Premier
* Second
    * Second.1
    * Second.2
* Troisième
{{< /md >}}|

{{< alert type="warning" >}}
Attention, pour des raisons de lisibilité de de compatibilité il est recommandé d'**éviter de mixer différents caractères pour une seule et même liste**.
{{< /alert >}}

## Liste de définition

Pour définir une liste de définition, il faut **ajouter un caractère double point (:) en début de ligne, suivi d'un espace uniquement pour les lignes contenant la définition**.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
Définition 1
: Je suis la définition 1

Définition 2
: Je suis une définition 2
: Je suis une autre définition 2
```
{{< /md >}}|{{< plaintext >}}
<dl>
  <dt>Définition 1</dt>
  <dd>Je suis la définition 1</dd>
  <dt>Définition 2</dt>
  <dd>Je suis une définition 2</dd>
  <dd>Je suis une autre définition 2</dd>
</dl>
{{< /plaintext >}}|{{< md >}}
Définition 1
: Je suis la définition 1

Définition 2
: Je suis une définition 2
: Je suis une autre définition 2
{{< /md >}}|

## Liste de tache

Pour définir une liste de tache, il faut **respecter une des syntaxes suivantes pour chaque ligne de tache**:

* **- \[ \] Texte_de_la_tache** (Pour une tache non réalisée)
* **- \[x\] Texte_de_la_tache** (Pour une tache réalisée)

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
- [ ] Tache 1 non réalisée
- [x] Tache 2 réalisée
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li><input disabled="" type="checkbox"> Tache 1 non réalisée</li>
  <li><input checked="" disabled="" type="checkbox"> Tache 2 réalisée</li>
</ul>
{{< /plaintext >}}|{{< md >}}
- [ ] Tache 1 non réalisée
- [x] Tache 2 réalisée
{{< /md >}}|

## Ajouter des élément à une liste

Pour ajouter un élément à une liste, il faut **considérer l'élément comme étant de niveau inférieur au niveau à intégrer à la liste**. Il faut donc **rajouter au minimum 4 espaces en début de ligne**, devant chaque élément à intégrer à la liste.

| Markdown | HTML | Rendu |
| -------- | ---- | ----- |
|{{< md >}}
```
* Premier
* Second
    > Je suis une citation  
    Je suis un paragraphe
* Troisième
```
{{< /md >}}|{{< plaintext >}}
<ul>
  <li>Premier</li>
  <li>Second
    <blockquote><p>Je suis une citation
      <br>
      Je suis un paragraphe</p>
    </blockquote>
  </li>
  <li>Troisième</li>
</ul>
{{< /plaintext >}}|{{< md >}}
* Premier
* Second
    > Je suis une citation  
    Je suis un paragraphe
* Troisième
{{< /md >}}|
